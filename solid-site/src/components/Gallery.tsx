import { createSignal, createEffect, onCleanup, For, Show } from "solid-js";
import { toThumb } from "~/utils/images";
import styles from "./Gallery.module.css";

interface GalleryProps {
  images: string[];
  altPrefix?: string;
  alts?: string[];
}

function imageAlt(prefix: string, index: number, alts?: string[]): string {
  return alts?.[index] || `${prefix} — zdjęcie ${index + 1}`;
}

export default function Gallery(props: GalleryProps) {
  const prefix = () => props.altPrefix || "Realizacja M-TYNK";
  const [lightboxIndex, setLightboxIndex] = createSignal<number | null>(null);
  let lightboxRef!: HTMLDivElement;

  function openLightbox(index: number) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
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
      <div class={styles.grid}>
        <For each={props.images}>
          {(src, i) => (
            <button class={styles.item} onClick={() => openLightbox(i())} type="button">
              <img src={toThumb(src)} alt={imageAlt(prefix(), i(), props.alts)} loading="lazy" />
              <div class={styles.overlay} />
            </button>
          )}
        </For>
      </div>

      <Show when={lightboxIndex() !== null}>
        <div
          ref={lightboxRef}
          class={styles.lightbox}
          onClick={closeLightbox}
          onKeyDown={handleKeydown}
          tabindex="-1"
        >
          <div class={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button class={styles.close} onClick={closeLightbox} aria-label="Zamknij">✕</button>
            <button class={styles.prev} onClick={prev} aria-label="Poprzednie" disabled={lightboxIndex() === 0}>‹</button>
            <img src={props.images[lightboxIndex()!]} alt={imageAlt(prefix(), lightboxIndex()!, props.alts)} />
            <button class={styles.next} onClick={next} aria-label="Następne" disabled={lightboxIndex() === props.images.length - 1}>›</button>
          </div>
        </div>
      </Show>
    </>
  );
}
