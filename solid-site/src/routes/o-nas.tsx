import { For, JSX } from "solid-js";
import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import NavLink from "~/components/NavLink";
import site from "~/data/site.json";
import { opinieLabel } from "~/utils/plural";
import styles from "./o-nas.module.css";

const OWNER_NAME = site.owner.name;

const stages: { label: string; title: string; content: JSX.Element }[] = [
  {
    label: "1999",
    title: "Początki: Podlasie i Litwa",
    content: (
      <p>Moja przygoda z tynkowaniem zaczęła się w 1999 roku na Podlasiu. Tam zdobywałem pierwsze doświadczenia, a z czasem praca zaprowadziła mnie również na Litwę.</p>
    ),
  },
  {
    label: "2005–2010",
    title: "Warszawa: budowy deweloperskie",
    content: (
      <p>Po powrocie do Polski przeniosłem się do Warszawy. W latach 2005–2010 pracowałem głównie na budowach deweloperskich, gdzie zdobywałem kolejne doświadczenia i doskonaliłem swój warsztat.</p>
    ),
  },
  {
    label: "ok. 3 lata",
    title: "Niemcy: pierwsze spotkanie ze szlichtą",
    content: (
      <>
        <p>Kolejnym ważnym etapem były Niemcy, gdzie przez około trzy lata pracowałem dla niemieckiej firmy. Wyjechałem przede wszystkim po to, żeby poznać nowe technologie i metody tynkowania.</p>
        <p>To właśnie tam po raz pierwszy zetknąłem się z <NavLink href="/tynki-ze-szlichta-pod-malowanie">tynkowaniem ze szlichtą</NavLink>. Wcześniej nie spotkałem się w Polsce z takim rozwiązaniem, dlatego tym bardziej zaskoczył mnie efekt końcowy: naprawdę gładkie, estetyczne ściany, bardzo dobrze przygotowane pod malowanie. To doświadczenie w dużej mierze ukształtowało moje podejście do jakości pracy.</p>
      </>
    ),
  },
  {
    label: "ok. 2 lata",
    title: "Szwajcaria: kolejne standardy",
    content: (
      <p>Następnie przez około dwa lata pracowałem w Szwajcarii, gdzie poznałem kolejne standardy i rozwiązania stosowane w branży.</p>
    ),
  },
  {
    label: "od ok. 12 lat",
    title: "Wrocław: tu zostałem",
    content: (
      <p>Po powrocie do Polski trafiłem w okolice Wrocławia. Przypadkiem natrafiłem na ogłoszenie o pracę, które spodobało mi się na tyle, że postanowiłem zostać. Z czasem przeprowadziłem się tu na stałe i dziś Wrocław jest moim domem już od około 12 lat.</p>
    ),
  },
  {
    label: "2019",
    title: "Własna firma: M-TYNK",
    content: (
      <p>We wrześniu 2019 roku założyłem we Wrocławiu własną działalność — firmę tynkarską M-TYNK. Od początku stawiam na metodę, którą poznałem w Niemczech: tynki gipsowe ze szlichtą wygładzającą, po których ściany są gotowe pod malowanie.</p>
    ),
  },
];

export default function ONas() {
  return (
    <Layout>
      <SeoHead
        title={`O nas — tynkarz ${OWNER_NAME}`}
        canonical="/o-nas"
        pageType="AboutPage"
        description={`${OWNER_NAME}, właściciel M-TYNK, tynkuje od 1999 roku — w Polsce, na Litwie, w Niemczech i Szwajcarii. Dziś tynki ze szlichtą we Wrocławiu.`}
        dateModified="2026-11-04T00:00:00+00:00"
        aboutOwner
        breadcrumbs={[
          { name: "Strona Główna", href: "/" },
          { name: "O nas" },
        ]}
      />

      <PageHeader
        title={`${OWNER_NAME} — tynkarz od 1999 roku`}
        breadcrumbs={[{ label: "Strona Główna", href: "/" }, { label: "O nas" }]}
      />

      <section class="section">
        <div class={`container ${styles.narrow}`}>
          <span class={styles.sectionTag}>O właścicielu</span>
          <h2>Ponad 25 lat w zawodzie tynkarza</h2>
          <p class={styles.lead}>
            Nazywam się {OWNER_NAME} i prowadzę firmę tynkarską M-TYNK. Tynkuję od 1999 roku — pracowałem w Polsce, na Litwie, w Niemczech i w Szwajcarii, a od około 12 lat mieszkam i pracuję we Wrocławiu.
          </p>

          <ol class={styles.timeline}>
            <For each={stages}>
              {(stage) => (
                <li class={styles.timelineItem}>
                  <span class={styles.timelineDot} aria-hidden="true" />
                  <span class={styles.timelineLabel}>{stage.label}</span>
                  <h3>{stage.title}</h3>
                  {stage.content}
                </li>
              )}
            </For>
          </ol>
        </div>
      </section>

      <section class={`section ${styles.why}`}>
        <div class={`container ${styles.narrow}`}>
          <h2>Dlaczego wyjeżdżałem za granicę</h2>
          <p>Za granicę wyjeżdżałem przede wszystkim z ciekawości i chęci rozwoju. Chciałem zobaczyć, jak pracuje się w innych krajach, jakie metody tynkowania się tam stosuje i jaką wagę przykłada się do jakości wykonania. Z tych doświadczeń korzystam w swojej pracy do dziś.</p>

          <h2>M-TYNK dzisiaj</h2>
          <p>Obecnie skupiamy się przede wszystkim na tynkowaniu domów jednorodzinnych we Wrocławiu i okolicach. Stawiamy na dokładność i efekt końcowy, bo w naszej pracy liczy się jakość, a nie ilość.</p>
          <blockquote class={styles.quote}>
            <p>Jakość, nie ilość.</p>
            <cite>— {OWNER_NAME}</cite>
          </blockquote>
          <p>
            Zobacz nasze <NavLink href="/realizacje">realizacje</NavLink>, przeczytaj, na czym polegają <NavLink href="/tynki-ze-szlichta-pod-malowanie">tynki gipsowe ze szlichtą pod malowanie</NavLink>, albo sprawdź <a href={site.googleReviewsListUrl} target="_blank" rel="noopener noreferrer">{site.googleReviewCount} {opinieLabel(site.googleReviewCount)} w Google (średnia {site.googleRating}/5)</a>.
          </p>
          <div class={styles.ctaRow}>
            <a class="btn btn-primary btn-lg" href={`tel:${site.phoneRaw}`}>Zadzwoń: {site.phone}</a>
            <NavLink class={styles.ctaLink} href="/kontakt">Kontakt i bezpłatna wycena →</NavLink>
          </div>
        </div>
      </section>
    </Layout>
  );
}
