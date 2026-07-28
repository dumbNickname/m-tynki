import { For } from "solid-js";
import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import PostCard from "~/components/PostCard";
import NavLink from "~/components/NavLink";
import site from "~/data/site.json";
import posts from "~/data/posts.json";
import navigation from "~/data/navigation.json";
import styles from "./tynki-ze-szlichta-pod-malowanie.module.css";
import realizacjeStyles from "./realizacje/index.module.css";

const featuredSlugs = ["tynki-ze-szlichta-pod-malowanie-wroclaw", "tynkowanie-scian-we-wroclawiu", "tynkowanie-w-domu-jednorodzinnym"];
const featuredPosts = posts.filter((p) => featuredSlugs.includes(p.slug));
const categoryLabels: Record<string, string> = {};
navigation.categories.forEach((c) => { categoryLabels[c.slug] = c.label; });

const benefits = [
  { icon: "⏱️", title: "Oszczędność czasu", description: "Eliminacja etapu nakładania gładzi skraca czas wykończenia nawet o kilka dni." },
  { icon: "✨", title: "Idealna gładkość", description: "Szlichta z gładziolitem zapewnia perfekcyjnie równą powierzchnię bez widocznych nierówności." },
  { icon: "💰", title: "Oszczędność kosztów", description: "Brak potrzeby osobnej gładzi oznacza niższe koszty materiałów i robocizny." },
  { icon: "🎨", title: "Gotowe pod malowanie", description: "Po wyschnięciu ściany są od razu gotowe do malowania — bez dodatkowego szlifowania." },
  { icon: "🏗️", title: "Trwałość", description: "Tynk ze szlichtą tworzy jednolitą, mocną warstwę, odporną na pęknięcia i uszkodzenia mechaniczne." },
  { icon: "🔧", title: "Uniwersalność", description: "Nadaje się do zastosowania na ścianach i sufitach, w budynkach mieszkalnych oraz użytkowych." },
];

const faqs = [
  {
    question: "Ile kosztuje tynk ze szlichtą wygładzającą?",
    answer: "Koszt tynku ze szlichtą wygładzającą zależy od wielkości powierzchni, stanu podłoża oraz lokalizacji inwestycji. Zapraszamy do kontaktu telefonicznego w celu uzyskania bezpłatnej wyceny — każde zlecenie wyceniamy indywidualnie.",
  },
  {
    question: "Jak długo schnie tynk ze szlichtą?",
    answer: "Czas schnięcia zależy od grubości warstwy, temperatury i wilgotności w pomieszczeniu. Zazwyczaj tynk ze szlichtą jest gotowy do malowania po ok. 2–4 tygodniach. Dokładny czas podajemy przy każdej realizacji.",
  },
  {
    question: "Czy tynk ze szlichtą nadaje się od razu pod malowanie?",
    answer: "Tak — to główna zaleta naszej metody. Szlichta z gładziolitem wygładza powierzchnię tynku do takiego stopnia, że po wyschnięciu nie wymaga nakładania dodatkowej gładzi. Ściana jest gotowa bezpośrednio pod malowanie lub tapetowanie.",
  },
  {
    question: "Na jakich powierzchniach można stosować tynk ze szlichtą?",
    answer: "Tynk ze szlichtą wygładzającą można stosować na ścianach i sufitach z cegły, betonu, pustaków oraz bloków silikatowych. Sprawdza się zarówno w domach jednorodzinnych, mieszkaniach, jak i obiektach użytkowych.",
  },
  {
    question: "Jaki jest czas realizacji tynkowania?",
    answer: "Czas realizacji zależy od powierzchni do otynkowania. Dla domu jednorodzinnego o powierzchni ok. 500–800 m² prace trwają zazwyczaj od 7 do 25 dni roboczych. Dokładny termin ustalamy indywidualnie po zapoznaniu się z zakresem prac.",
  },
  {
    question: "Ile kosztuje tynkowanie maszynowe we Wrocławiu?",
    answer: "Cena tynków maszynowych zależy od wielu czynników: powierzchni do otynkowania, stanu ścian, rodzaju materiału oraz zakresu prac wykończeniowych. Ceny rynkowe zmieniają się dynamicznie, dlatego każde zlecenie wyceniamy indywidualnie. Zadzwoń po bezpłatną wycenę — podamy aktualną cenę dopasowaną do Twojej inwestycji.",
  },
  {
    question: "Czy wycena tynków jest bezpłatna?",
    answer: "Tak — wycena jest zawsze bezpłatna i niezobowiązująca. Po kontakcie telefonicznym ustalamy szczegóły inwestycji i przedstawiamy indywidualną ofertę. Obsługujemy Wrocław i okolice.",
  },
];

export default function TynkiService() {
  return (
    <Layout>
      <SeoHead
        title="Tynki maszynowe ze szlichtą pod malowanie Wrocław"
        canonical="/tynki-ze-szlichta-pod-malowanie"
        description="Tynki ze szlichtą gładziolitu pod malowanie Wrocław ★ ściany gotowe do malowania bez dodatkowej gładzi. Firma M-TYNK od 1999 — bezpłatna wycena. ☎ 535 157 036."
        ogImage="images/uploads/2023/08/tynki-ze-szlichta-pod-malowanie.jpg"
        dateModified="2023-09-04T09:44:26+00:00"
        breadcrumbs={[
          { name: "Strona Główna", href: "/" },
          { name: "Tynki ze szlichtą pod malowanie" },
        ]}
        faq={faqs}
      />

      <PageHeader
        title="Tynki maszynowe ze szlichtą pod malowanie"
        breadcrumbs={[{ label: "Strona Główna", href: "/" }, { label: "Tynki ze szlichtą pod malowanie" }]}
      />

      <section class="section">
        <div class={`container ${styles.grid}`}>
          <div class={styles.text1}>
            <h2 class={styles.sectionTitle}>Tynki maszynowe gipsowe ze szlichtą gładziolitu wygładzającego pod malowanie we Wrocławiu</h2>
            <div class={styles.divider} />
            <p>
              Nasza Firma posiada w swojej ofercie coś, co wyróżnia ją na tle innych firm zajmujących się tynkowaniem. Oferowane przez nas Tynki Gipsowe są wykańczane Szlichtą z GŁADZIOLITEM Wygładzającym, która nadaje gładkość tynkowanej ścianie. Dzięki Gładziolitowi, ściany i sufity w pomieszczeniu są perfekcyjnie równe i można od razu po wyschnięciu przejść do malowania.
            </p>
            <p>
              Tynk ze Gładziolitem Wygładzającym powoduje brak konieczności wykonywania dodatkowej gładzi na powierzchni tynku. Brak konieczności stosowania gładzi prowadzi do oszczędności czasu i pieniędzy.
            </p>
            <p>
              Na terenie Wrocławia, gdzie znajduje się siedziba naszej firmy, a także w okolicach, wykonujemy tynki maszynowe gipsowe z Gładziolitem Wygładzającym. Możemy się pochwalić szeregiem opinii naszych klientów, którzy chwalą nasze przywiązanie do detali, pracowitość i przede wszystkim jakość wykonanych tynków.
            </p>
          </div>

          <div class={`${styles.imageWrap} ${styles.img1}`}>
            <img
              src="images/uploads/2023/08/tynki-ze-szlichta-pod-malowanie.jpg"
              srcset="images/thumbs/uploads/2023/08/tynki-ze-szlichta-pod-malowanie.jpg 400w, images/uploads/2023/08/tynki-ze-szlichta-pod-malowanie.jpg 1125w"
              sizes="(max-width: 768px) 60vw, 500px"
              alt="Tynki ze szlichtą pod malowanie"
              loading="lazy"
            />
          </div>

          <div class={styles.szlichta}>
            <h2 class={styles.sectionTitle}>Czym jest szlichta z gładziolitem?</h2>
            <div class={styles.divider} />
            <p>
              Szlichta z Gładziolitem wygładzającym jest niczym innym jak ostatnią warstwą nakładanego tynku. Można powiedzieć, że jest to warstwa dodatkowa, która nadaje gładkości ścianie i pozwala od razu przejść do malowania bądź położenia płytek. Jest to coś, co wymaga dodatkowej pracy, ale daje piorunujący efekt końcowy.
            </p>
          </div>

          <div class={`${styles.imageWrap} ${styles.img2}`}>
            <img
              src="images/uploads/elementor/thumbs/tyni-pod-malowanie-qbdq91rev2rfmler3fd35z8elq8utmztpuh8j5jxts.jpg"
              alt="Tynki pod malowanie"
              loading="lazy"
            />
          </div>

          <div class={styles.gdzie}>
            <h2 class={styles.sectionTitle}>Gdzie mogę zobaczyć tynk ze szlichtą gładziolitu?</h2>
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

      <section class={`section ${styles.localSection}`}>
        <div class="container">
          <div class={styles.localCard}>
            <div>
              <h2>Firma tynkarska Wrocław — dane kontaktowe i obszar działania</h2>
              <p>Wykonujemy tynki maszynowe, tynki gipsowe ze szlichtą oraz przygotowanie ścian pod malowanie we Wrocławiu i okolicach.</p>
              <p><strong>Adres:</strong> {site.address}</p>
              <p><strong>Telefon:</strong> <a href={`tel:${site.phoneRaw}`}>{site.phone}</a> · <strong>E-mail:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
              <p><strong>Obsługiwane lokalizacje:</strong> Wrocław, powiat wrocławski, Trzebnica, Oława, Sobótka, Długołęka, Miękinia, Domasław, Dobrzykowice, Lutynia.</p>
            </div>
            <div class={styles.localLinks}>
              <NavLink href="/uslugi/tynki-maszynowe-wroclaw">Tynki maszynowe Wrocław</NavLink>
              <NavLink href="/uslugi/tynki-gipsowe-wroclaw">Tynki gipsowe Wrocław</NavLink>
              <NavLink href="/uslugi/firma-tynkarska-wroclaw">Firma tynkarska Wrocław</NavLink>
            </div>
          </div>
        </div>
      </section>

      <section class={`section ${styles.benefitsSection}`}>
        <div class="container">
          <div class="text-center">
            <h2>Zalety tynku ze szlichtą wygładzającą</h2>
          </div>
          <div class={styles.benefitsGrid}>
            <For each={benefits}>
              {(b) => (
                <div class={styles.benefitCard}>
                  <span class={styles.benefitIcon}>{b.icon}</span>
                  <h3>{b.title}</h3>
                  <p>{b.description}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center">
            <h2>Najczęściej zadawane pytania</h2>
          </div>
          <div class={styles.faqList}>
            <For each={faqs}>
              {(faq) => (
                <details class={styles.faqItem}>
                  <summary class={styles.faqQuestion}>{faq.question}</summary>
                  <p class={styles.faqAnswer}>{faq.answer}</p>
                </details>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center">
            <h2>Zobacz nasze realizacje tynków ze szlichtą</h2>
          </div>
          <div class={realizacjeStyles.postsGrid}>
            <For each={featuredPosts}>
              {(post) => <PostCard post={post} categoryLabels={categoryLabels} />}
            </For>
          </div>
          <div class="text-center" style={{ "margin-top": "2rem" }}>
            <NavLink class="btn btn-outline" href="/realizacje">Wszystkie realizacje</NavLink>
          </div>
        </div>
      </section>

      <section class={`section ${styles.ctaSection}`}>
        <div class="container text-center">
          <h2>Zainteresowany? Skontaktuj się z nami!</h2>
          <p>Zadzwoń i umów się na bezpłatną wycenę lub wizytę na aktualnej budowie.</p>
          <a class="btn btn-primary btn-lg" href={`tel:${site.phoneRaw}`}>
            {site.phone}
          </a>
        </div>
      </section>
    </Layout>
  );
}
