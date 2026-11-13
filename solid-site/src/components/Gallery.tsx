import { createSignal, createEffect, onCleanup, For, Show } from "solid-js";
import { toThumb } from "~/utils/images";
import styles from "./Gallery.module.css";

interface GalleryProps {
  images: string[];
  altPrefix?: string;
  alts?: string[];
  /** "mosaic": first image large (uses full-res source), 3-column layout. */
  variant?: "grid" | "mosaic";
}

function imageAlt(prefix: string, index: number, alts?: string[]): string {
  return alts?.[index] || `${prefix} — zdjęcie ${index + 1}`;
}

const VT_NAME = "gallery-photo";

function canAnimate(): boolean {
  return (
    typeof document.startViewTransition === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Resolves true once the image is decoded, false if it takes longer than `ms`. */
function preload(src: string, ms: number): Promise<boolean> {
  const img = new Image();
  img.src = src;
  return Promise.race([
    img.decode().then(() => true, () => false),
    new Promise<boolean>((resolve) => setTimeout(() => resolve(false), ms)),
  ]);
}

function isInViewport(el: Element): boolean {
  const r = el.getBoundingClientRect();
  return r.bottom > 0 && r.top < window.innerHeight && r.right > 0 && r.left < window.innerWidth;
}

export default function Gallery(props: GalleryProps) {
  const prefix = () => props.altPrefix || "Realizacja M-TYNK";
  const [lightboxIndex, setLightboxIndex] = createSignal<number | null>(null);
  const [morphing, setMorphing] = createSignal(false);
  let lightboxRef!: HTMLDivElement;
  const thumbs: HTMLImageElement[] = [];

  // Thumbnail morphs into the full-size photo (View Transitions API). The full image
  // is decoded first — otherwise the morph would land on an empty frame. Browsers
  // without support, reduced-motion users and slow loads get the plain lightbox.
  async function openLightbox(index: number) {
    const thumb = thumbs[index];
    if (!canAnimate() || !thumb || !(await preload(props.images[index], 250))) {
      setLightboxIndex(index);
      return;
    }
    thumb.style.viewTransitionName = VT_NAME;
    setMorphing(true);
    const t = document.startViewTransition(() => {
      thumb.style.viewTransitionName = "";
      setLightboxIndex(index);
    });
    t.finished.finally(() => setMorphing(false));
  }

  function closeLightbox() {
    const index = lightboxIndex();
    const thumb = index !== null ? thumbs[index] : undefined;
    if (!canAnimate() || !thumb || !isInViewport(thumb)) {
      setLightboxIndex(null);
      return;
    }
    setMorphing(true);
    const t = document.startViewTransition(() => {
      setLightboxIndex(null);
      thumb.style.viewTransitionName = VT_NAME;
    });
    t.finished.finally(() => {
      thumb.style.viewTransitionName = "";
      setMorphing(false);
    });
  }

  function prev() {
    const current = lightboxIndex();
    if (current !== null && current > 0) setLightboxIndex(current - 1);
  }

  function next() {
    const current = lightboxIndex();
    if (current !== null && current < props.images.length - 1) setLightboxIndex(current + 1);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "Escape") closeLightbox();
  }

  createEffect(() => {
    const isOpen = lightboxIndex() !== null;
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) lightboxRef?.focus();
    onCleanup(() => {
      document.body.style.overflow = "";
    });
  });

  return (
    <>
      <div class={props.variant === "mosaic" ? `${styles.grid} ${styles.mosaic}` : styles.grid}>
        <For each={props.images}>
          {(src, i) => (
            <button class={styles.item} onClick={() => openLightbox(i())} type="button" aria-label={`Powiększ: ${imageAlt(prefix(), i(), props.alts)}`}>
              <img
                ref={(el) => (thumbs[i()] = el)}
                src={toThumb(src)}
                srcset={props.variant === "mosaic" && i() === 0 ? `${toThumb(src)} 400w, ${src} 1200w` : undefined}
                sizes={props.variant === "mosaic" && i() === 0 ? "(max-width: 768px) 100vw, 800px" : undefined}
                alt={imageAlt(prefix(), i(), props.alts)}
                loading="lazy"
              />
              <div class={styles.overlay} />
            </button>
          )}
        </For>
      </div>

      <Show when={lightboxIndex() !== null}>
        <div
          ref={lightboxRef}
          class={morphing() ? `${styles.lightbox} ${styles.morphing}` : styles.lightbox}
          onClick={closeLightbox}
          onKeyDown={handleKeydown}
          tabindex="-1"
        >
          <div class={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button class={styles.close} onClick={closeLightbox} aria-label="Zamknij">✕</button>
            <button class={styles.prev} onClick={prev} aria-label="Poprzednie" disabled={lightboxIndex() === 0}>‹</button>
            <img
              src={props.images[lightboxIndex()!]}
              alt={imageAlt(prefix(), lightboxIndex()!, props.alts)}
              style={{ "view-transition-name": VT_NAME }}
            />
            <button class={styles.next} onClick={next} aria-label="Następne" disabled={lightboxIndex() === props.images.length - 1}>›</button>
          </div>
        </div>
      </Show>
    </>
  );
}
