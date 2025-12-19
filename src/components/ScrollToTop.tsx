import { createSignal, onMount, onCleanup, Show } from "solid-js";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = createSignal(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  onMount(() => {
    window.addEventListener("scroll", toggleVisibility);
    
    onCleanup(() => {
      window.removeEventListener("scroll", toggleVisibility);
    });
  });

  return (
    <Show when={isVisible()}>
      <button
        onClick={scrollToTop}
        class="fixed bottom-8 right-8 w-12 h-12 bg-success hover:bg-success/90 text-white rounded-md shadow-lg transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <svg class="w-6 h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </Show>
  );
}
