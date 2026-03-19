import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import site from "~/data/site.json";
import styles from "./tynki-ze-szlichta-pod-malowanie.module.css";

export default function TynkiService() {
  return (
    <Layout>
      <SeoHead
        title="Tynki ze Szlichtą pod Malowanie Wrocław"
        canonical="/tynki-ze-szlichta-pod-malowanie"
        description="Tynki Gipsowe ze Szlichtą Gładziolitu Wygładzającego pod Malowanie Wrocław. Oferujemy tynki gipsowe wykańczane Szlichtą z Gładziolitem — ściany gotowe do malowania bez dodatkowej gładzi."
        ogImage="/images/uploads/2023/08/tynki-ze-szlichta-pod-malowanie.jpg"
        dateModified="2023-09-04T09:44:26+00:00"
        breadcrumbs={[
          { name: "HOME", href: "/" },
          { name: "Tynki ze szlichtą pod malowanie" },
        ]}
      />

      <PageHeader
        title="Tynki ze Szlichtą pod Malowanie"
        breadcrumbs={[{ label: "HOME", href: "/" }, { label: "Tynki ze szlichtą pod malowanie" }]}
      />

      <section class="section">
        <div class="container grid-2">
          <div>
            <h2>TYNKI GIPSOWE ZE SZLICHTĄ GŁADZIOLITU WYGŁADZAJĄCEGO POD MALOWANIE</h2>
            <div class={styles.divider} />
            <p>
              Nasza Firma posiada w swojej ofercie coś, co wyróżnia ją na tle innych firm zajmujących się tynkowaniem. Oferowane przez nas Tynki Gipsowe są wykańczane Szlichtą z GŁADZIOLITEM Wygładzającym, która nadaje gładkość tynkowanej ścianie. Dzięki Gładziolitowi, ściany i sufity w pomieszczeniu są perfekcyjnie równe i można od razu po wyschnięciu przejść do malowania.
            </p>
            <p>
              Tynk ze Gładziolitem Wygładzającym powoduje brak konieczności wykonywania dodatkowej gładzi na powierzchni tynku. Brak konieczności stosowania gładzi prowadzi do oszczędności czasu i pieniędzy.
            </p>
            <p>
              Na terenie Wrocławia, gdzie znajduje się siedziba naszej firmy, a także w okolicach, jesteśmy jedyną firmą, która stawia na Tynk Gipsowy z Gładziolitem Wygładzającym. Możemy się pochwalić szeregiem opinii naszych klientów, którzy chwalą nasze przywiązanie do detali, pracowitość i przede wszystkim jakość wykonanych tynków.
            </p>
          </div>
          <div class="text-center">
            <img
              src="/images/uploads/2023/08/tynki-ze-szlichta-pod-malowanie.jpg"
              alt="Tynki ze szlichtą pod malowanie"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container grid-2">
          <div class="text-center">
            <img
              src="/images/uploads/elementor/thumbs/tyni-pod-malowanie-qbdq91rev2rfmler3fd35z8elq8utmztpuh8j5jxts.jpg"
              alt="Tynki pod malowanie"
              loading="lazy"
            />
          </div>
          <div>
            <h2>CZYM JEST SZLICHTA Z GŁADZIOLITEM?</h2>
            <div class={styles.divider} />
            <p>
              Szlichta z Gładziolitem wygładzającym jest niczym innym jak ostatnią warstwą nakładanego tynku. Można powiedzieć, że jest to warstwa dodatkowa, która nadaje gładkości ścianie i pozwala od razu przejść do malowania bądź położenia płytek. Jest to coś, co wymaga dodatkowej pracy, ale daje piorunujący efekt końcowy.
            </p>
            <h2>GDZIE MOGĘ ZOBACZYĆ TYNK ZE SZLICHTĄ GŁADZIOLITU?</h2>
            <div class={styles.divider} />
            <p>
              Jeśli chcą Państwo zapoznać się z tym jak wygląda Tynk ze Szlichtą Gładziolitu – zapraszamy na naszą aktualną budowę. Zawsze zapraszamy inwestorów, aby zapoznali się z jakością wykonywanych przez nas tynków. Dlatego też, w każdej sytuacji, prosimy o kontakt telefoniczny w celu umówienia się na wizytę. Na takiej wizycie opowiemy też więcej o wykonywanych Tynkach Gipsowych ze Szlichtą Gładziolitu, a także pokażemy, jak wygląda tynk bez szlichty gładziolitu oraz ze szlichtą gładziolitem.
            </p>
            <div class="text-right">
              <a class="btn btn-primary" href={`tel:${site.phoneRaw}`}>
                Umów się na wizytę!
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
