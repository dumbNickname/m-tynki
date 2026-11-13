import { For } from "solid-js";
import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import Reviews from "~/components/Reviews";
import SocialFollow from "~/components/SocialFollow";
import NavLink from "~/components/NavLink";
import site from "~/data/site.json";
import { opinieLabel } from "~/utils/plural";
import styles from "./index.module.css";

const services = [
  {
    icon: "images/uploads/2023/08/szlichta-wygladzajaca-01.png",
    title: "Zabezpieczenie budowy",
    description: "Oklejamy okna, drzwi, osłaniamy posadzki oraz instalacje, aby ochronić budowę przed zabrudzeniami podczas tynkowania.",
    href: "/tynki-ze-szlichta-pod-malowanie#tynki-maszynowe",
    featured: true,
    featuredTitle: "Tynki gipsowe ze szlichtą wygładzającą",
    featuredDescription: "Nasza specjalność. Na tynki gipsowe nakładamy dodatkową warstwę wygładzającą, która wyraźnie wygładza ścianę już na etapie tynkowania. W typowych pomieszczeniach po wyschnięciu ścianę się gruntuje i maluje — bez osobnej gładzi. Pod oświetlenie wzdłuż ścian czy farby z połyskiem doradzamy gładź, którą robimy przy malowaniu.",
  },
  {
    icon: "images/uploads/2023/08/tynk-ze-szlichta-wygladzajaca-01-01.png",
    title: "Tynkowanie maszynowe",
    description: "Nakładamy tynk gipsowy agregatem tynkarskim — zaprawa ma powtarzalną konsystencję, a ściany są pokryte równo i szybko.",
    href: "/tynki-ze-szlichta-pod-malowanie#tynki-maszynowe",
  },
  {
    icon: "images/uploads/2023/08/tynk-ze-szlichta-wygladzajaca-01-01.png",
    title: "Ściąganie i wygładzanie",
    description: "Ściągamy tynk łatą do równego, a następnie wygładzamy ręcznie trzema rodzajami łat gładzących — uzupełniamy każdy ubytek.",
    href: "/tynki-ze-szlichta-pod-malowanie#szlichta",
  },
  {
    icon: "images/uploads/2024/09/gladz.svg",
    title: "Szlichta z gładziolitem",
    description: "Nakładamy szlichtę gładziolitu wygładzającego — tynk staje się gładki i w typowych pomieszczeniach nadaje się pod malowanie bez osobnej gładzi.",
    href: "/tynki-ze-szlichta-pod-malowanie#szlichta",
  },
  {
    icon: "images/uploads/2023/08/Bez-nazwy-2.png",
    title: "Zabudowy G-K i gładź natryskowa",
    description: "Wykonujemy też zabudowy z płyt karton-gipsowych, gładź natryskową oraz sufity podwieszane.",
    href: "/tynki-ze-szlichta-pod-malowanie#gladz-natryskowa",
  },
  {
    icon: "images/uploads/2023/08/tynk-pod-malowanie-01.png",
    title: "Natryskowe malowanie ścian",
    description: "Malujemy natryskowo na biało i w kolorze — równe pokrycie na dużych powierzchniach, szybciej niż wałkiem.",
    href: "/tynki-ze-szlichta-pod-malowanie#gladz-natryskowa",
  },
];

const steps = [
  { number: "01", title: "Przygotowanie", content: "Pierwszym etapem zawsze jest odpowiednie zabezpieczenie okien, drzwi i elementów, które mogą zostać uszkodzone." },
  { number: "02", title: "Narzut", content: "Nakładanie pierwszej warstwy tynku, warstwy właściwej na ścianę. Na tym etapie zużywamy najwięcej materiału." },
  { number: "03", title: "Wygładzanie", content: "Wygładzanie powierzchni narzędziami tynkarskimi, uzupełnianie ubytków i nieprawidłowości. Każdy narzut jest przez nas wygładzany 3 rodzajami łat gładzących." },
  { number: "04", title: "Gładziolit", content: "Zastosowanie Gładziolitu wygładzającego w celu uzyskania gładkiej powierzchni tynku. Na tym etapie wygładzamy ścianę tak, aby po wyschnięciu i zagruntowaniu w typowych pomieszczeniach można ją było malować. Płaskość sprawdzamy łatą 2 m według normy PN-B-10110." },
];

export default function Home() {
  return (
    <Layout>
      <SeoHead
        canonical="/"
        description={site.description}
        ogImage="images/og-default.jpg"
      />

      <section class={styles.hero}>
        <div class={styles.heroBg}>
          <img
            class={styles.heroImg}
            src="images/hero-1125w.jpg"
            srcset="images/hero-480w.jpg 480w, images/hero-768w.jpg 768w, images/hero-1125w.jpg 1125w"
            sizes="100vw"
            alt="Tynki gipsowe ze szlichtą pod malowanie"
            fetchpriority="high"
          />
          <div class={styles.heroOverlay} />
          <div class={styles.heroContent}>
            <span class={styles.heroBadge}>Doświadczenie od 1999 roku</span>
            <h1>
              <span class={styles.heroLocation}>Firma tynkarska — Wrocław i okolice</span>
              <span class={styles.heroService}>Tynki gipsowe ze szlichtą, przygotowane pod malowanie</span>
            </h1>
            <p class={styles.heroSubtitle}>W typowych pomieszczeniach malujesz bez osobnej gładzi — a gdzie jest potrzebna, zrobimy ją przy malowaniu</p>
            <div class={styles.heroActions}>
              <a href={`tel:${site.phoneRaw}`} class="btn btn-primary btn-lg">Bezpłatna wycena</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class={styles.introGrid}>
            <div>
              <span class={styles.sectionTag}>Kim jesteśmy</span>
              <h2>Doświadczenie w tynkowaniu od 1999 roku</h2>
              <p class={styles.lead}>Jesteśmy firmą tynkarską z Wrocławia z doświadczeniem w tynkowaniu od 1999 roku — zdobywanym w Polsce, na Litwie, w Niemczech i w Szwajcarii.</p>
              <p>Wykonujemy tynki we Wrocławiu i okolicach — tynkowanie domów, mieszkań i lokali użytkowych. Jako tynkarz z ponad 25-letnim doświadczeniem specjalizujemy się w tynkach gipsowych nakładanych agregatem, czyli <NavLink href="/tynki-ze-szlichta-pod-malowanie#tynki-maszynowe">tynkach maszynowych we Wrocławiu</NavLink>, wykańczanych szlichtą wygładzającą.</p>
              <p>Skontaktuj się z nami i przekonaj się o naszym profesjonalizmie! Zobacz nasze <NavLink href="/realizacje">realizacje</NavLink> lub dowiedz się więcej o <NavLink href="/tynki-ze-szlichta-pod-malowanie">tynkach gipsowych ze szlichtą pod malowanie</NavLink>.</p>
              <div class={styles.statsRow}>
                <div class={styles.statItem}>
                  <span class={styles.statNumber}>25+</span>
                  <span class={styles.statLabel}>Lat doświadczenia</span>
                </div>
                <a class={styles.statItem} href={site.googleReviewsListUrl} target="_blank" rel="noopener noreferrer">
                  <span class={styles.statNumber}>{site.googleRating}★</span>
                  <span class={styles.statLabel}>{site.googleReviewCount} {opinieLabel(site.googleReviewCount)} w Google</span>
                </a>
              </div>
            </div>
            <div class={styles.introImage}>
              <img
                src="images/uploads/elementor/thumbs/tynk-ze-szlichta-wygladzajaca-2-1-qbc493vjwnj8vdtfz6et930fnfrti3rzhl17p4djqe.jpg"
                alt="Tynk ze szlichtą wygładzającą"
                width="374"
                height="503"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section class={`section ${styles.about}`} id="o-nas">
        <div class="container">
          <div class={styles.aboutGrid}>
            <div class={styles.aboutImage}>
              <picture class={styles.imgLight}>
                <source srcset={site.mascotWebp} type="image/webp" />
                <img src={site.mascot} alt="M-TYNK maskotka" width="260" height="260" loading="lazy" />
              </picture>
              <picture class={styles.imgDark}>
                <source srcset={site.mascotDarkWebp} type="image/webp" />
                <img src={site.mascotDark} alt="M-TYNK maskotka" width="260" height="260" loading="lazy" />
              </picture>
            </div>
            <div>
              <span class={styles.sectionTag}>Dlaczego my?</span>
              <h2>Jak podchodzimy do pracy</h2>
              <p>
                Panuje przeświadczenie, że wszystkie roboty budowlane trwają długo, są robione niedokładnie, przez co trzeba przygotować się na dużą ilość poprawek. Jednak to nie tyczy się NAS! Działamy profesjonalnie, wiemy co nas irytuje w pracach budowlanych, dlatego pracujemy tak jakbyśmy sami chcieli zostać obsłużeni.
              </p>
              <p>
                Liczy się dla nas satysfakcja i zadowolenie przebiegu współpracy z klientami, przez to zwracamy uwagę na najmniejsze szczegóły. Odpowiadamy na wszystkie pytania, aby nasi klienci byli świadomi interesujących ich kroków naszej pracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SocialFollow />

      <section class="section">
        <div class="container text-center">
          <span class={styles.sectionTag}>Zaufali nam</span>
          <h2>Opinie o naszych tynkach we Wrocławiu i okolicach</h2>
          <Reviews />
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center">
            <span class={styles.sectionTag}>Co oferujemy</span>
              <h2>Co robimy na budowie</h2>
          </div>
          <div class={styles.servicesGrid}>
            <For each={services}>
              {(svc) => {
                const inner = (
                  <>
                    <div class={styles.serviceIcon}>
                      <img src={svc.icon} alt={svc.title} width="48" height="48" loading="lazy" />
                    </div>
                    <div class={svc.featured ? styles.featuredBody : ""}>
                      {svc.featured && <span class={styles.featuredEyebrow}>Nasza specjalność</span>}
                      <h3>{svc.featured ? svc.featuredTitle : svc.title}</h3>
                      <p>{svc.featured ? svc.featuredDescription : svc.description}</p>
                      {svc.href && <span class={styles.serviceMore}>Dowiedz się więcej</span>}
                    </div>
                  </>
                );
                return svc.href ? (
                  <NavLink class={`${styles.serviceCard} ${svc.featured ? styles.serviceCardFeatured : ""}`} href={svc.href}>
                    {inner}
                  </NavLink>
                ) : (
                  <div class={`${styles.serviceCard} ${svc.featured ? styles.serviceCardFeatured : ""}`}>
                    {inner}
                  </div>
                );
              }}
            </For>
            <a class={`${styles.serviceCard} ${styles.serviceCardCta}`} href={`tel:${site.phoneRaw}`}>
              <div class={styles.ctaIcon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <h3>Nie wiesz jakie tynki wybrać?</h3>
                <p>Zadzwoń — pomożemy dobrać technologię i wycenimy bezpłatnie.</p>
                <span class={styles.ctaPhone}>{site.phone}</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section class={`section ${styles.aboutFull}`}>
        <div class="container">
          <div class={styles.aboutFullGrid}>
            <div>
              <span class={styles.sectionTag}>O firmie</span>
              <h2>Skąd się wzięliśmy i jak pracujemy</h2>
              <div class="divider" />
              <p>Jesteśmy firmą tynkarską z wieloletnim doświadczeniem, która od lat zajmuje się tynkarstwem we Wrocławiu i okolicach. Prawie od początku naszej działalności preferujemy metodę wykonywania tynków wraz ze szlichtą wygładzającą, która powoduje, że ściana jest przygotowana pod malowanie.</p>
              <p>Dzięki szlichcie uzyskujemy gładką, równą ścianę, odbieraną według normy dla tynków gipsowych.</p>
              <p>Firmę prowadzi {site.owner.name}, który tynkuje od 1999 roku. Metodę ze szlichtą poznał podczas pracy w Niemczech. <NavLink href="/o-nas">Poznaj jego historię</NavLink>.</p>
              <p>Nasza firma tynkarska specjalizuje się w wykonaniu tynków maszynowych — doświadczenie w tynkach maszynowych zdobywamy od 1999 r. Posiadamy doświadczoną brygadę (wieloletnia praktyka w zawodzie) więc:</p>
              <ul class={styles.checkList}>
                <li>Tynki cechuje wysoka jakość, estetyka i kultura wykonania.</li>
                <li>Zabezpieczamy stolarkę okienną, instalacje i inne wymagające tego rzeczy.</li>
                <li>Zawsze stosujemy specjalistyczne grunty i preparaty, obrzutki, narożniki, siatki, jak i również listwy dylatacyjne do okien i drzwi.</li>
                <li>Posiadamy sprzęt do pracy w systemie silosowym.</li>
                <li>Doradzamy przy wyborze najlepszego materiału oraz technologii wykonania.</li>
                <li>Dbamy o powierzone mienie.</li>
              </ul>
            </div>
            <div class={styles.aboutFullImage}>
              <img src="images/uploads/2023/08/mtynk-tynki-pod-malowanie-1.jpg" alt="M-TYNK tynki pod malowanie" width="663" height="1080" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section class={`section ${styles.process}`}>
        <div class="container">
          <div class="text-center">
            <span class={styles.sectionTag}>Nasz proces</span>
            <h2>Co się dzieje na budowie, dzień po dniu</h2>
          </div>
          <div class={styles.timeline}>
            <For each={steps}>
              {(step) => (
                <div class={styles.timelineItem}>
                  <div class={styles.timelineNumber}>{step.number}</div>
                  <div class={styles.timelineCard}>
                    <h3>{step.title}</h3>
                    <p>{step.content}</p>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class={`section ${styles.cta}`}>
        <div class="container text-center">
          <h2>Umów bezpłatną wycenę</h2>
          <p>Zadzwoń i umów się na bezpłatną wycenę! Obsługujemy Wrocław, powiat wrocławski, Trzebnicę, Oławę, Sobótkę, Długołękę, Miękinię, Domasław, Dobrzykowice i Lutynię.</p>
          <p><strong>Adres:</strong> {site.address} · <strong>E-mail:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
          <a class="btn btn-primary btn-lg" href={`tel:${site.phoneRaw}`}>
            {site.phone}
          </a>
        </div>
      </section>
    </Layout>
  );
}
