import { createSignal, onMount, onCleanup } from "solid-js";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [visible, setVisible] = createSignal(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 300);
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", handleScroll));
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      class={`${styles.scrollToTop} ${visible() ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Przewiń do góry"
      tabindex={0}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="57 35.171 26 16.043">
        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" transform="rotate(180 70 43.193)" />
      </svg>
    </button>
  );
}
