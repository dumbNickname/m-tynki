import { createSignal, onMount } from "solid-js";
import styles from "./ThemeToggle.module.css";

type Scheme = "light" | "dark";

const STORAGE_KEY = "mtynk_theme";

// Shared by both toggle instances (desktop header + mobile header bar) so they never disagree.
const [theme, setTheme] = createSignal<Scheme>("light");
let listening = false;

function systemScheme(): Scheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStored(): Scheme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
}

/** No stored value = follow the OS; "light"/"dark" = the user's explicit override. */
function apply(stored: Scheme | null) {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
  if (meta) meta.content = stored ?? "light dark";
  const resolved = stored ?? systemScheme();
  document.documentElement.setAttribute("data-theme", resolved);
  setTheme(resolved);
}

function startListening() {
  if (listening) return;
  listening = true;
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => apply(readStored()));
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY || e.key === null) apply(readStored());
  });
}

export default function ThemeToggle() {
  onMount(() => {
    apply(readStored());
    startListening();
  });

  // Picking the scheme the OS already uses means "undo my override": clear it rather
  // than storing it, so the site keeps following future OS changes.
  const toggle = () => {
    const target: Scheme = theme() === "dark" ? "light" : "dark";
    const stored = target === systemScheme() ? null : target;
    try {
      if (stored) localStorage.setItem(STORAGE_KEY, stored);
      else localStorage.removeItem(STORAGE_KEY);
    } catch {}
    apply(stored);
  };

  return (
    <button
      type="button"
      class={styles.toggle}
      onClick={toggle}
      aria-label={theme() === "dark" ? "Włącz tryb jasny" : "Włącz tryb ciemny"}
      title={theme() === "dark" ? "Tryb jasny" : "Tryb ciemny"}
    >
      <svg
        class={`${styles.icon} ${theme() === "dark" ? styles.hidden : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      <svg
        class={`${styles.icon} ${theme() === "light" ? styles.hidden : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    </button>
  );
}
