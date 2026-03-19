import { createSignal, For, Show } from "solid-js";
import styles from "./Gallery.module.css";

interface GalleryProps {
  images: string[];
}

export default function Gallery(props: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = createSignal<number | null>(null);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }

  function prev() {
    const current = lightboxIndex();
    if (current !== null && current > 0) setLightboxIndex(current - 1);
  }

  function next() {
    const current = lightboxIndex();
    if (current !== null && current < props.images.length - 1) setLightboxIndex(current + 1);
  }

  return (
    <>
      <div class={styles.grid}>
        <For each={props.images}>
          {(src, i) => (
            <button class={styles.item} onClick={() => openLightbox(i())} type="button">
              <img src={src} alt="" loading="lazy" />
              <div class={styles.overlay} />
            </button>
          )}
        </For>
      </div>

      <Show when={lightboxIndex() !== null}>
        <div class={styles.lightbox} onClick={closeLightbox}>
          <div class={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button class={styles.close} onClick={closeLightbox} aria-label="Zamknij">✕</button>
            <button class={styles.prev} onClick={prev} aria-label="Poprzednie" disabled={lightboxIndex() === 0}>‹</button>
            <img src={props.images[lightboxIndex()!]} alt="" />
            <button class={styles.next} onClick={next} aria-label="Następne" disabled={lightboxIndex() === props.images.length - 1}>›</button>
          </div>
        </div>
      </Show>
    </>
  );
}
