import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import NavLink from "~/components/NavLink";
import site from "~/data/site.json";
import styles from "./[...404].module.css";

export default function NotFound() {
  return (
    <Layout>
      <SeoHead
        title="Strona nie została znaleziona"
        noindex
        description="Nie znaleziono żądanej strony. Wróć na stronę główną M-TYNK Wrocław."
      />

      <section class={`section ${styles.notFound}`}>
        <div class={`container ${styles.inner}`}>
          <span class={styles.code}>404</span>
          <h1>Tej strony już tu nie ma</h1>
          <p class={styles.lead}>
            Mogła zostać przeniesiona albo nigdy nie istniała. Zerknij poniżej — pewnie znajdziesz to,
            czego szukasz, albo zadzwoń, a doradzimy.
          </p>

          <div class={styles.actions}>
            <NavLink href="/" class="btn btn-primary">
              Strona główna
            </NavLink>
            <a href={`tel:${site.phoneRaw}`} class={styles.callLink}>
              Zadzwoń: {site.phone}
            </a>
          </div>

          <div class={styles.suggested}>
            <p class={styles.suggestedHeading}>Najczęściej odwiedzane</p>
            <ul>
              <li>
                <NavLink href="/realizacje">Realizacje</NavLink>
                <span>Zdjęcia i opisy ostatnich projektów</span>
              </li>
              <li>
                <NavLink href="/tynki-ze-szlichta-pod-malowanie">Tynki ze szlichtą pod malowanie</NavLink>
                <span>Nasza specjalność — ściana gotowa do malowania</span>
              </li>
              <li>
                <NavLink href="/galeria">Galeria</NavLink>
                <span>Pełen zbiór zdjęć z realizacji</span>
              </li>
              <li>
                <NavLink href="/kontakt">Kontakt</NavLink>
                <span>Adres, mapa, formularz</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
