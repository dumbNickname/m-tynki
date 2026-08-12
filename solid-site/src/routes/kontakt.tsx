import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import site from "~/data/site.json";
import styles from "./kontakt.module.css";

export default function Kontakt() {
  return (
    <Layout>
      <SeoHead
        title="Kontakt i bezpłatna wycena"
        canonical="/kontakt"
        pageType="ContactPage"
        description={`Zadzwoń i umów bezpłatną wycenę: ${site.phone}. M-TYNK, ${site.address} — pracujemy we Wrocławiu, powiecie wrocławskim i okolicznych miejscowościach.`}
        dateModified="2024-06-19T10:29:05+00:00"
        breadcrumbs={[
          { name: "Strona Główna", href: "/" },
          { name: "Kontakt" },
        ]}
      />

      <PageHeader
        title="Kontakt"
        breadcrumbs={[{ label: "Strona Główna", href: "/" }, { label: "Kontakt" }]}
      />

      <section class="section">
        <div class="container">
          <div class={styles.contactGrid}>
            <div>
              <h2>Skontaktuj się z nami</h2>
              <p>Jeśli chcesz się umówić na Tynkowanie lub masz pytania odnośnie Szlichty Wygładzającej — zadzwoń lub napisz.</p>
              <div class={styles.contactInfo}>
                <div class={styles.contactItem}>
                  <div class={styles.contactIcon}>📍</div>
                  <div class={styles.contactText}>
                    <span class={styles.contactLabel}>Adres</span>
                    <span class={styles.contactValue}>{site.address}</span>
                  </div>
                </div>
                <div class={styles.contactItem}>
                  <div class={styles.contactIcon}>📞</div>
                  <div class={styles.contactText}>
                    <span class={styles.contactLabel}>Telefon</span>
                    <span class={styles.contactValue}>
                      <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
                    </span>
                  </div>
                </div>
                <div class={styles.contactItem}>
                  <div class={styles.contactIcon}>✉️</div>
                  <div class={styles.contactText}>
                    <span class={styles.contactLabel}>E-mail</span>
                    <span class={styles.contactValue}>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class={styles.reviewCards}>
              <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer" class={styles.reviewCard}>
                <img src="images/ocena-google-300x300-1-150x150-1.png" alt="Ocena Google" width="80" height="80" loading="lazy" />
                <div>
                  <strong>Oceń nas na Google</strong>
                  <p style={{ margin: "0.25rem 0 0", "font-size": "var(--fs-small)", color: "var(--color-text-light)" }}>Zachęcamy do postawienia opinii po wykonanej pracy</p>
                </div>
              </a>
              <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer" class={styles.reviewCard}>
                <img src="images/3f01b95197aa73a801f7357854c22483-150x150-1.png" alt="Opinie Google" width="80" height="80" loading="lazy" />
                <div>
                  <strong>Nasze opinie</strong>
                  <p style={{ margin: "0.25rem 0 0", "font-size": "var(--fs-small)", color: "var(--color-text-light)" }}>Zobacz co mówią o nas klienci</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style={{ "padding-top": "0" }}>
        <div class="container">
          <div class={styles.areaServed}>
            <h2>Obszar działania we Wrocławiu</h2>
            <p>Tynkujemy w całym Wrocławiu i okolicach. Realizacje wykonujemy we wszystkich dzielnicach miasta oraz w popularnych osiedlach.</p>
            <h3>Dzielnice Wrocławia</h3>
            <ul class={styles.areaList}>
              <li>Krzyki</li>
              <li>Fabryczna</li>
              <li>Psie Pole</li>
              <li>Stare Miasto</li>
              <li>Śródmieście</li>
            </ul>
            <h3>Popularne osiedla i okolice</h3>
            <ul class={styles.areaList}>
              <li>Sępolno</li>
              <li>Biskupin</li>
              <li>Karłowice</li>
              <li>Różanka</li>
              <li>Maślice</li>
              <li>Kozanów</li>
              <li>Gądów Mały</li>
              <li>Muchobór Wielki</li>
              <li>Oporów</li>
              <li>Klecina</li>
              <li>Jagodno</li>
              <li>Brochów</li>
            </ul>
            <p>Działamy również poza granicami miasta: Sobótka, Trzebnica, Oława, Długołęka, Miękinia, Domasław, Dobrzykowice, Lutynia i okoliczne miejscowości powiatu wrocławskiego.</p>
          </div>
        </div>
      </section>

      <section class="section" style={{ "padding-top": "0" }}>
        <div class="container">
          <div class={styles.map}>
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=Tynki%20gipsowe%20z%20g%C5%82adziolitem%20pod%20malowanie%20-%20M-Tynk%2C%20Obornicka%2077C%2F4A%2C%2051-114%20Wroc%C5%82aw&t=m&z=17&output=embed&iwloc=near"
              title="Tynki gipsowe z gładziolitem pod malowanie - M-Tynk, Obornicka 77C/4A, 51-114 Wrocław"
              aria-label="Tynki gipsowe z gładziolitem pod malowanie - M-Tynk, Obornicka 77C/4A, 51-114 Wrocław"
              width="100%"
              height="400"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
