#!/usr/bin/env python3
"""Generate thumbnail versions of gallery/post images for faster page loads.

Reads gallery.json and posts.json, creates 400px-wide JPEG thumbnails
in public/images/thumbs/ mirroring the original directory structure.
Post card thumbnails additionally get an 800px-wide variant in
public/images/medium/ (used by PostCard srcset on high-DPI phones).

Usage: python3 scripts/generate-thumbs.py
"""

import json
import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Error: Pillow is required. Install with: pip install pillow")
    sys.exit(1)

THUMB_WIDTH = 400
THUMB_QUALITY = 70
MEDIUM_WIDTH = 800
MEDIUM_QUALITY = 72
BASE = Path(__file__).resolve().parent.parent / "public"
SRC_DIR = Path(__file__).resolve().parent.parent / "src"


def to_variant_path(img_path: str, folder: str) -> str:
    # Non-.jpg sources keep their extension (wyr.png -> wyr-png.jpg) so they
    # can't collide with a same-named .jpg. Keep in sync with src/utils/images.ts.
    base, ext = os.path.splitext(img_path)
    ext = ext.lower().lstrip(".")
    name = (base if ext in ("jpg", "") else f"{base}-{ext}") + ".jpg"
    if name.startswith("images/"):
        name = name[len("images/") :]
    return f"images/{folder}/" + name


def to_thumb_path(img_path: str) -> str:
    return to_variant_path(img_path, "thumbs")


def to_medium_path(img_path: str) -> str:
    return to_variant_path(img_path, "medium")


def collect_images() -> set[str]:
    images: set[str] = set()

    with open(SRC_DIR / "data" / "gallery.json") as f:
        images.update(json.load(f))

    with open(SRC_DIR / "data" / "posts.json") as f:
        for post in json.load(f):
            if post.get("thumbnail"):
                images.add(post["thumbnail"])
            for img in post.get("gallery", []):
                images.add(img)

    return images


def collect_card_thumbnails() -> set[str]:
    with open(SRC_DIR / "data" / "posts.json") as f:
        return {post["thumbnail"] for post in json.load(f) if post.get("thumbnail")}


def generate_thumbnails(images: set[str], to_path=to_thumb_path, width: int = THUMB_WIDTH, quality: int = THUMB_QUALITY) -> None:
    created = 0
    skipped = 0
    errors = 0

    for img_path in sorted(images):
        src = BASE / img_path
        if not src.exists():
            print(f"  MISSING: {src}")
            errors += 1
            continue

        thumb_rel = to_path(img_path)
        thumb_path = BASE / thumb_rel
        thumb_path.parent.mkdir(parents=True, exist_ok=True)

        if thumb_path.exists() and thumb_path.stat().st_mtime >= src.stat().st_mtime:
            skipped += 1
            continue

        try:
            with Image.open(src) as im:
                im = im.convert("RGB")
                w, h = im.size
                if w <= width:
                    im.save(thumb_path, "JPEG", quality=quality, optimize=True, progressive=True)
                else:
                    ratio = width / w
                    new_h = int(h * ratio)
                    resized = im.resize((width, new_h), Image.Resampling.LANCZOS)
                    resized.save(
                        thumb_path, "JPEG", quality=quality, optimize=True, progressive=True
                    )
            created += 1
        except Exception as e:
            print(f"  ERROR: {src}: {e}")
            errors += 1

    orig_total = sum((BASE / p).stat().st_size for p in images if (BASE / p).exists())
    thumb_total = sum(
        (BASE / to_path(p)).stat().st_size
        for p in images
        if (BASE / to_path(p)).exists()
    )

    print(f"Created: {created}, Skipped: {skipped}, Errors: {errors}")
    print(f"Originals: {orig_total / 1024 / 1024:.1f} MB")
    print(f"Thumbnails: {thumb_total / 1024 / 1024:.1f} MB")
    if orig_total > 0:
        print(f"Savings: {(1 - thumb_total / orig_total) * 100:.0f}%")


if __name__ == "__main__":
    images = collect_images()
    print(f"Processing {len(images)} images ({THUMB_WIDTH}px thumbs)...")
    generate_thumbnails(images)

    cards = collect_card_thumbnails()
    print(f"Processing {len(cards)} post card images ({MEDIUM_WIDTH}px medium)...")
    generate_thumbnails(cards, to_medium_path, MEDIUM_WIDTH, MEDIUM_QUALITY)
