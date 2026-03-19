import { A } from "@solidjs/router";
import { For } from "solid-js";
import navigation from "~/data/navigation.json";
import site from "~/data/site.json";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.main}>
        <div class={`container ${styles.grid}`}>
          <div class={styles.brand}>
            <A href="/">
              <img src={site.logoGreen} alt={site.name} width="300" height="81" />
            </A>
            <p>
              Oferujemy Tynki Gipsowe z<br />
              Gładziolitem Wygładzającym pod<br />
              Malowanie. Nie potrzebujesz<br />
              dodatkowej warstwy gładzi!
            </p>
          </div>
          <div class={styles.linksGroup}>
            <div class={styles.col}>
              <h3>Przydatne linki</h3>
              <ul>
                <For each={navigation.footer}>
                  {(item) => (
                    <li>
                      <A href={item.href}>{item.label}</A>
                    </li>
                  )}
                </For>
              </ul>
            </div>
            <div class={styles.col}>
              <h3>Oceń nas</h3>
              <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer">
                <img src="/images/ocena-google-300x300-1-150x150-1.png" alt="Oceń nas na Google" width="150" height="150" />
              </a>
            </div>
            <div class={styles.col}>
              <h3>Odwiedź nas</h3>
              <div class={styles.social}>
                <a href={site.facebookUrl} target="_blank" rel="nofollow noopener noreferrer" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href={site.instagramUrl} target="_blank" rel="nofollow noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class={styles.bottom}>
        <div class={`container ${styles.bottomInner}`}>
          <p>Copyright © 2022 <strong>M-TYNK Z GŁADZIOLITEM WYGŁADZAJĄCYM POD MALOWANIE</strong></p>
          <p>
            <a href="https://computersoft.net.pl/" target="_blank" rel="noopener">
              Projekt i realizacja: ComputerSoft 2023
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
