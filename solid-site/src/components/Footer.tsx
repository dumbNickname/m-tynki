import { For } from "solid-js";
import navigation from "~/data/navigation.json";
import site from "~/data/site.json";
import NavLink from "./NavLink";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.main}>
        <div class={`container ${styles.grid}`}>
          <div class={styles.brand}>
            <NavLink href="/">
              <img src={site.logoGreen} alt={site.name} width="300" height="81" />
            </NavLink>
            <p>
              Oferujemy Tynki Gipsowe z Gładziolitem Wygładzającym pod Malowanie. Nie potrzebujesz dodatkowej warstwy gładzi!
            </p>
            <div class={styles.social}>
              <a href={site.facebookUrl} target="_blank" rel="nofollow noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href={site.instagramUrl} target="_blank" rel="nofollow noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
          <div class={styles.linksGroup}>
            <div class={styles.col}>
              <h4>Przydatne linki</h4>
              <ul>
                <For each={navigation.footer}>
                  {(item) => (
                    <li>
                      <NavLink href={item.href}>{item.label}</NavLink>
                    </li>
                  )}
                </For>
              </ul>
            </div>
            <div class={styles.col}>
              <h4>Kontakt</h4>
              <ul>
                <li>
                  <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>{site.address}</li>
              </ul>
            </div>
            <div class={styles.col}>
              <h4>Oceń nas</h4>
              <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer" class={styles.googleLink}>
                <img src="images/ocena-google-300x300-1-150x150-1.png" alt="Oceń nas na Google" width="120" height="120" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class={styles.bottom}>
        <div class={`container ${styles.bottomInner}`}>
          <p>&copy; {new Date().getFullYear()} <strong>M-TYNK</strong> Tynki ze Szlichtą pod Malowanie</p>
          <p>Realizacja: ro@ch</p>
        </div>
      </div>
    </footer>
  );
}
