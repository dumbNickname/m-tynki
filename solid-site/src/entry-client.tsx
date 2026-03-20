// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

mount(() => <StartClient />, document.getElementById("app")!);

const base = (import.meta.env.SERVER_BASE_URL || "") as string;

document.addEventListener("click", (e) => {
  const anchor = (e.target as Element).closest?.("a");
  if (!anchor) return;
  const href = anchor.getAttribute("href");
  if (!href) return;
  if (anchor.hasAttribute("target")) return;
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return;

  e.preventDefault();
  e.stopPropagation();
  window.location.href = href;
}, true);

window.addEventListener("popstate", () => {
  window.location.reload();
});
