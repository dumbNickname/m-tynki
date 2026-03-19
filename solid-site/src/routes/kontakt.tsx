import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import site from "~/data/site.json";
import styles from "./kontakt.module.css";

export default function Kontakt() {
  return (
    <Layout>
      <SeoHead
        title="Kontakt"
        canonical="/kontakt"
        description={`Skontaktuj się z firmą M-TYNK Wrocław. Adres: ${site.address}. Telefon: ${site.phone}. E-mail: ${site.email}. Tynki gipsowe ze szlichtą pod malowanie.`}
        ogImage="/images/ocena-google-300x300-1-150x150-1.png"
        dateModified="2024-06-19T10:29:05+00:00"
        breadcrumbs={[
          { name: "HOME", href: "/" },
          { name: "Kontakt" },
        ]}
      />

      <PageHeader
        title="KONTAKT"
        breadcrumbs={[{ label: "HOME", href: "/" }, { label: "Kontakt" }]}
      />

      <section class="section">
        <div class="container grid-3">
          <div>
            <h2>SKONTAKTUJ SIĘ Z NAMI!</h2>
            <div class="divider" />
            <p>
              Jeśli chcesz się umówić na Tynkowanie, masz pytania odnośnie Szlichty Wygładzającej. Zachęcamy także do postawienia opinii po wykonanej pracy.
            </p>
          </div>
          <div class="text-center">
            <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer">
              <img src="/images/ocena-google-300x300-1-150x150-1.png" alt="Ocena Google" width="150" height="150" loading="lazy" />
            </a>
          </div>
          <div class="text-center">
            <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer">
              <img src="/images/3f01b95197aa73a801f7357854c22483-150x150-1.png" alt="Opinie Google" width="150" height="150" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <ul class={styles.iconList}>
            <li>
              <span class={styles.iconListIcon}>📍</span>
              <span>{site.address}</span>
            </li>
            <li>
              <a href={`tel:${site.phoneRaw}`}>
                <span class={styles.iconListIcon}>📞</span>
                <span>{site.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <span class={styles.iconListIcon}>✉️</span>
                <span>{site.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class={styles.map}>
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=Tynki%20gipsowe%20z%20g%C5%82adziolitem%20pod%20malowanie%20-%20M-Tynk%2C%20Obornicka%2077D%2F4A%2C%2051-114%20Wroc%C5%82aw&t=m&z=17&output=embed&iwloc=near"
          title="Tynki gipsowe z gładziolitem pod malowanie - M-Tynk, Obornicka 77D/4A, 51-114 Wrocław"
          aria-label="Tynki gipsowe z gładziolitem pod malowanie - M-Tynk, Obornicka 77D/4A, 51-114 Wrocław"
          width="100%"
          height="400"
          style={{ border: "none" }}
        />
      </section>
    </Layout>
  );
}
