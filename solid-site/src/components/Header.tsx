import { createSignal, For, onCleanup, onMount } from "solid-js";
import navigation from "~/data/navigation.json";
import site from "~/data/site.json";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = createSignal(false);
  let menuRef!: HTMLDialogElement;

  // Modal <dialog>: the browser makes the page behind it inert, traps focus, closes on
  // Esc / back gesture and returns focus to the hamburger button on close.
  function openMenu() {
    menuRef.showModal();
    setMenuOpen(true);
  }

  function closeMenu() {
    menuRef.close();
  }

  // Light dismiss for browsers without <dialog closedby>: a click whose target is the
  // dialog itself but lands outside its box hit the backdrop.
  function handleMenuClick(e: MouseEvent) {
    if ("closedBy" in HTMLDialogElement.prototype || e.target !== menuRef) return;
    const r = menuRef.getBoundingClientRect();
    const inside = r.top <= e.clientY && e.clientY <= r.bottom && r.left <= e.clientX && e.clientX <= r.right;
    if (!inside) closeMenu();
  }

  onMount(() => {
    // The drawer only exists in the mobile layout; don't leave it open past the breakpoint.
    const desktop = window.matchMedia("(min-width: 1025px)");
    const onChange = () => desktop.matches && menuRef.open && closeMenu();
    desktop.addEventListener("change", onChange);
    onCleanup(() => desktop.removeEventListener("change", onChange));
  });

  return (
    <header class={styles.header}>
      <div class={styles.desktop}>
        <div class={styles.topBar}>
          <div class={`container ${styles.topInner}`}>
            <NavLink href="/" class={styles.logo}>
              <picture class={styles.logoLight}>
                <source srcset={site.logoWebp} type="image/webp" />
                <img src={site.logo} alt={site.name} width="240" height="50" />
              </picture>
              <picture class={styles.logoDark}>
                <source srcset={site.logoDarkWebp} type="image/webp" />
                <img src={site.logoDark} alt={site.name} width="240" height="50" />
              </picture>
            </NavLink>
            <div class={styles.topRight}>
              <a class={styles.phoneLink} href={`tel:${site.phoneRaw}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                {site.phone}
              </a>
              <ThemeToggle />
              <a class="btn btn-primary btn-sm" href={`tel:${site.phoneRaw}`}>
                Bezpłatna wycena
              </a>
            </div>
          </div>
        </div>
        <nav class={styles.navBar} aria-label="Menu główne">
          <div class={`container ${styles.navInner}`}>
            <ul>
              <For each={navigation.main}>
                {(item) => (
                  <li>
                    <NavLink href={item.href}>{item.label}</NavLink>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </nav>
      </div>

      <div class={styles.mobile}>
        <div class={`container ${styles.mobileInner}`}>
          <button
            type="button"
            class={styles.menuToggle}
            onClick={openMenu}
            aria-label="Otwórz menu"
            aria-expanded={menuOpen()}
            aria-controls="mobile-menu"
          >
            <span class={styles.hamburger} />
          </button>
          <NavLink href="/" class={styles.logo}>
            <picture class={styles.logoLight}>
              <source srcset={site.logoWebp} type="image/webp" />
              <img src={site.logo} alt={site.name} width="180" height="37" />
            </picture>
            <picture class={styles.logoDark}>
              <source srcset={site.logoDarkWebp} type="image/webp" />
              <img src={site.logoDark} alt={site.name} width="180" height="37" />
            </picture>
          </NavLink>
          <div class={styles.mobileRight}>
            <ThemeToggle />
            <a class={styles.phoneIcon} href={`tel:${site.phoneRaw}`} aria-label="Zadzwoń">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <dialog
        ref={menuRef}
        id="mobile-menu"
        class={styles.flyout}
        aria-label="Menu"
        closedby="any"
        onClick={handleMenuClick}
        onClose={() => setMenuOpen(false)}
      >
        <button type="button" class={styles.flyoutClose} onClick={closeMenu} aria-label="Zamknij menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class={styles.flyoutBrand}>
          <picture class={styles.logoLight}>
            <source srcset={site.logoWebp} type="image/webp" />
            <img src={site.logo} alt={site.name} width="160" height="33" />
          </picture>
          <picture class={styles.logoDark}>
            <source srcset={site.logoDarkWebp} type="image/webp" />
            <img src={site.logoDark} alt={site.name} width="160" height="33" />
          </picture>
        </div>
        <nav aria-label="Menu mobilne">
          <ul>
            <For each={navigation.main}>
              {(item) => (
                <li>
                  <NavLink href={item.href} onClick={closeMenu}>
                    {item.label}
                  </NavLink>
                </li>
              )}
            </For>
          </ul>
        </nav>
        <div class={styles.flyoutCta}>
          <a class="btn btn-primary" href={`tel:${site.phoneRaw}`}>
            {site.phone}
          </a>
        </div>
      </dialog>
    </header>
  );
}
