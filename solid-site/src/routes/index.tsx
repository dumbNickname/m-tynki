import { For } from "solid-js";
import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import Reviews from "~/components/Reviews";
import SocialFollow from "~/components/SocialFollow";
import NavLink from "~/components/NavLink";
import site from "~/data/site.json";
import styles from "./index.module.css";

const services = [
  {
    icon: "images/uploads/2023/08/szlichta-wygladzajaca-01.png",
    title: "Tynki Gipsowe ze szlichtą wygładzającą",
    description: "Nasza specjalność. Na tynki gipsowe nakładamy dodatkową warstwą wygładzającą, która pozwala na uzyskanie idealnie gładkiej ściany nadającej się bezpośrednio pod malowanie — bez dodatkowej warstwy gładzi.",
    href: "/tynki-ze-szlichta-pod-malowanie",
    featured: true,
  },
  {
    icon: "images/uploads/2024/09/gladz.svg",
    title: "Gładź natryskowa",
    description: "Gładź natryskowa to sprawdzona metoda wygładzania ścian, która gwarantuje idealnie równą powierzchnię. Zapewnia szybkie wykończenie i wysoką jakość efektu.",
    href: "/uslugi/gladz-natryskowa-wroclaw",
  },
  {
    icon: "images/uploads/2023/08/tynk-ze-szlichta-wygladzajaca-01-01.png",
    title: "Tynki Gipsowe",
    description: "Wykonane przez nas tynki gipsowe pozwalają na uzyskanie gładkiej, równej i dokładnie wykończonej powierzchni.",
    href: "/uslugi/tynki-gipsowe-wroclaw",
  },
  {
    icon: "images/uploads/2023/08/tynk-ze-szlichta-wygladzajaca-01-01.png",
    title: "Tynki maszynowe",
    description: "Tynki gipsowe nakładane maszynowo agregatem tynkarskim — szybko i równo na dużych powierzchniach, z ręcznym wykończeniem szlichtą pod malowanie.",
    href: "/uslugi/tynki-maszynowe-wroclaw",
  },
  {
    icon: "images/uploads/2023/08/Bez-nazwy-2.png",
    title: "Zabudowy G-K",
    description: "Oferujemy również zabudowy ścian, sufitów podwieszanych oraz różnego rodzaju konstrukcji lekkich oraz dekoracyjnych wykonanych z płyt karton gipsowych",
  },
  {
    icon: "images/uploads/2023/08/tynk-pod-malowanie-01.png",
    title: "Natryskowe Malowanie Ścian",
    description: "Pomieszczenia malujemy na biało i w kolorze, używamy do tego farb akrylowych, lateksowych, winylowych i ceramicznych.",
    href: "/uslugi/malowanie-scian-wroclaw",
  },
];

const steps = [
  { number: "01", title: "Przygotowanie", content: "Pierwszym etapem zawsze jest odpowiednie zabezpieczenie okien, drzwi i elementów, które mogą zostać uszkodzone." },
  { number: "02", title: "Narzut", content: "Nakładanie pierwszej warstwy tynku, warstwy właściwej na ścianę. Na tym etapie zużywamy najwięcej materiału." },
  { number: "03", title: "Wygładzanie", content: "Wygładzanie powierzchni narzędziami tynkarskimi, uzupełnianie ubytków i nieprawidłowości. Każdy narzut jest przez nas wygładzany 3 rodzajami łat gładzących." },
  { number: "04", title: "Gładziolit", content: "Zastosowanie Gładziolitu Wygładzającego w celu uzyskania gładkiej powierzchni Tynku. Na tym etapie wygładzamy ścianę do tego stopnia, że po wyschnięciu, jest gotowa do malowania." },
];

export default function Home() {
  return (
    <Layout>
      <SeoHead
        canonical="/"
        description={site.description}
        faq={steps.map((s) => ({ question: `${s.title} — jak to robimy?`, answer: s.content }))}
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
            <span class={styles.heroBadge}>Od 1999 roku</span>
            <h1>
              <span class={styles.heroLocation}>Tynki maszynowe Wrocław i okolice</span>
              <span class={styles.heroService}>Tynki gipsowe ze szlichtą wygładzającą pod malowanie</span>
            </h1>
            <p class={styles.heroSubtitle}>Ściany gotowe do malowania — bez dodatkowej gładzi</p>
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
              <span class={styles.sectionTag}>Nasza specjalność</span>
              <h2>Tynki gipsowe ze szlichtą wygładzającą pod malowanie</h2>
              <p class={styles.lead}>Jesteśmy firmą budowlaną świadczącą swoje usługi od 1999r co jest gwarancją jakości usług.</p>
              <p>Skontaktuj się z nami i przekonaj się o naszym profesjonalizmie! Zobacz nasze <NavLink href="/realizacje">realizacje</NavLink> lub dowiedz się więcej o <NavLink href="/tynki-ze-szlichta-pod-malowanie">tynkach gipsowych ze szlichtą pod malowanie</NavLink>, <NavLink href="/uslugi/tynki-maszynowe-wroclaw">tynkach maszynowych we Wrocławiu</NavLink>, <NavLink href="/uslugi/tynkowanie-wroclaw">tynkowaniu ścian</NavLink> i ofercie <NavLink href="/uslugi/firma-tynkarska-wroclaw">firmy tynkarskiej M-TYNK</NavLink>.</p>
              <div class={styles.statsRow}>
                <div class={styles.statItem}>
                  <span class={styles.statNumber}>25+</span>
                  <span class={styles.statLabel}>Lat doświadczenia</span>
                </div>
                <div class={styles.statItem}>
                  <span class={styles.statNumber}>100%</span>
                  <span class={styles.statLabel}>Zaangażowania</span>
                </div>
              </div>
            </div>
            <div class={styles.introImage}>
              <img
                src="images/uploads/elementor/thumbs/tynk-ze-szlichta-wygladzajaca-2-1-qbc493vjwnj8vdtfz6et930fnfrti3rzhl17p4djqe.png"
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
              <h2>Działamy szybko i dokładnie!</h2>
              <p>
                Panuje przeświadczenie że wszystkie roboty budowlane trwają długo, są robione niedokładne, przez co trzeba przygotować się na dużą ilość poprawek. Jednak to nie tyczy się NAS! Działamy profesjonalnie, wiemy co nas irytuje w pracach budowlanych, dlatego pracujemy tak jakbyśmy sami chcieli zostać obsłużeni.
              </p>
              <p>
                Liczy się dla nas satysfakcja i zadowolenie przebiegu współpracy z klientami, przez to zwracamy uwagę na najmniejsze szczegóły. Opowiadamy na wszystkie pytania, aby Nasi klienci byli świadomi interesujących ich kroków naszej pracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SocialFollow />

      <section class="section">
        <div class="container text-center">
          <span class={styles.sectionTag}>Zaufali nam</span>
          <h2>Opinie klientów o firmie tynkarskiej M-TYNK</h2>
          <Reviews />
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center">
            <span class={styles.sectionTag}>Co oferujemy</span>
              <h2>Nasze usługi tynkarskie we Wrocławiu</h2>
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
                      <h3>{svc.title}</h3>
                      <p>{svc.description}</p>
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
              <h2>O firmie tynkarskiej M-TYNK</h2>
              <div class="divider" />
              <p>Jesteśmy firmą tynkarską z wieloletnim doświadczeniem, która od lat zajmuje się tynkarstwem we Wrocławiu i okolicach. Prawie od początku naszej działalności preferujemy metodę wykonywania tynków wraz ze szlichtą wygładzającą, która powoduje, że ściana jest przygotowana pod malowanie.</p>
              <p>Dzięki szlichcie uzyskujemy efekt gładkiej ściany, bez wybrzuszeń i nierówności.</p>
              <p>Nasza firma tynkarska specjalizuje się w wykonaniu tynków maszynowych — w branży tynków maszynowych działamy od 1999r. Posiadamy doświadczoną brygadę (wieloletnia praktyka w zawodzie) więc:</p>
              <ul class={styles.checkList}>
                <li>Tynki cechuje wysoka jakość, estetyka i kultura wykonania.</li>
                <li>Zabezpieczamy stolarkę okienna,instalacje i inne wymagające tego rzeczy.</li>
                <li>Zawsze stosujemy specjalistyczne grunty i preparaty, obrzutki, narożniki, siatki, jak i również listwy dylatacyjne do okien i drzwi.</li>
                <li>Posiadamy sprzęt do pracy w systemie silosowym.</li>
                <li>Doradzamy przy wyborze najlepszego materiału oraz technologi wykonania.</li>
                <li>Dbamy o powierzone mienie.</li>
              </ul>
            </div>
            <div class={styles.aboutFullImage}>
              <img src="images/uploads/2023/08/mtynk-tynki-pod-malowanie-1.png" alt="M-TYNK tynki pod malowanie" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section class={`section ${styles.process}`}>
        <div class="container">
          <div class="text-center">
            <span class={styles.sectionTag}>Nasz proces</span>
            <h2>Jak wykonujemy tynki maszynowe?</h2>
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
          <h2>Skontaktuj się z nami</h2>
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
