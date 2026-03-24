import { createSignal, onMount, Show } from "solid-js";
import styles from "./CookieBanner.module.css";

const COOKIE_KEY = "mtynk_cookies_accepted";

export default function CookieBanner() {
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setVisible(true);
    }
  });

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "1");
    setVisible(false);
  };

  return (
    <Show when={visible()}>
      <div class={styles.banner} role="alert" aria-live="polite">
        <div class={styles.inner}>
          <p class={styles.text}>
            Ta strona korzysta z plików cookie w celu zapewnienia prawidłowego działania.
            Więcej informacji znajdziesz w naszej{" "}
            <a href="polityka-prywatnosci">polityce prywatności</a>.
          </p>
          <button class={styles.accept} onClick={accept}>
            Rozumiem
          </button>
        </div>
      </div>
    </Show>
  );
}
