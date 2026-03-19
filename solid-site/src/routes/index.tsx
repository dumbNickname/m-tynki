import { createSignal, For } from "solid-js";
import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import Reviews from "~/components/Reviews";
import site from "~/data/site.json";
import styles from "./index.module.css";

const services = [
  {
    icon: "/images/uploads/2023/08/tynk-ze-szlichta-wygladzajaca-01-01.png",
    title: "Tynki Gipsowe",
    description: "Wykonane przez nas tynki gipsowe pozwalają na uzyskanie gładkiej, równej i dokładnie wykończonej powierzchni.",
  },
  {
    icon: "/images/uploads/2023/08/szlichta-wygladzajaca-01.png",
    title: "Tynki Gipsowe ze szlichtą wygładzającą",
    description: "Na tynki gipsowe nakładamy dodatkową warstwą wygładzającą, która pozwala na uzyskanie idealnie gładkiej ściany nadającej się bezpośrednio pod malowanie!",
  },
  {
    icon: "/images/uploads/2023/08/plastering.png",
    title: "Tynki Cementowo-Wapienne",
    description: "Tynki cementowo-wapienne są rodzajem tynków bardziej odpornych na korozję biologiczną, charakteryzuje się także dużą wytrzymałością na uszkodzenia.",
  },
  {
    icon: "/images/uploads/2023/08/tynk-ze-szlichta-wygladzajaca-01-01.png",
    title: "Tynki Gipsowe utwardzane",
    description: "Tynki te są alternatywą dla tynków gipsowych i cementowo-wapiennych, ponieważ mają właściwości regulujące wilgotność oraz są bardziej twarde niż tradycyjne tynki gipsowe",
  },
  {
    icon: "/images/uploads/2023/08/Bez-nazwy-2.png",
    title: "Zabudowy G-K",
    description: "Oferujemy również zabudowy ścian, sufitów podwieszanych oraz różnego rodzaju konstrukcji lekkich oraz dekoracyjnych wykonanych z płyt karton gipsowych",
  },
  {
    icon: "/images/uploads/2023/08/tynk-pod-malowanie-01.png",
    title: "Natryskowe Malowanie Ścian",
    description: "Pomieszczenia malujemy na biało i w kolorze, używamy do tego farb akrylowych, lateksowych, winylowych i ceramicznych.",
  },
];

const steps = [
  { title: "ETAP 1: Przygotowanie", content: "Pierwszym etapem zawsze jest odpowiednie zabezpieczenie okien, drzwi i elementów, które mogą zostać uszkodzone." },
  { title: "ETAP 2: Narzut", content: "Nakładanie pierwszej warstwy tynku, warstwy właściwej na ścianę. Na tym etapie zużywamy najwięcej materiału." },
  { title: "ETAP 3: Wygładzanie", content: "Wygładzanie powierzchni narzędziami tynkarskimi, uzupełnianie ubytków i nieprawidłowości. Każdy narzut jest przez nas wygładzany 3 rodzajami łat gładzących." },
  { title: "ETAP DODATKOWY: Gładziolit", content: "Zastosowanie Gładziolitu Wygładzającego w celu uzyskania gładkiej powierzchni Tynku. Na tym etapie wygładzamy ścianę do tego stopnia, że po wyschnięciu, jest gotowa do malowania." },
];

export default function Home() {
  const [openStep, setOpenStep] = createSignal<number | null>(null);

  function toggleStep(index: number) {
    setOpenStep(openStep() === index ? null : index);
  }

  return (
    <Layout>
      <SeoHead
        canonical="/"
        description="Tynki ze szlichtą wygładzającą pod malowanie Wrocław. Firma M-TYNK świadczy usługi tynkarskie od 1999 roku. Tynki gipsowe, cementowo-wapienne, zabudowy G-K, malowanie natryskowe."
        ogImage="/images/uploads/elementor/thumbs/tynk-ze-szlichta-wygladzajaca-2-1-qbc493vjwnj8vdtfz6et930fnfrti3rzhl17p4djqe.png"
        datePublished="2023-08-23T12:08:08+00:00"
        dateModified="2024-09-30T08:10:47+00:00"
        breadcrumbs={[{ name: "HOME" }]}
      />

      <section class={styles.hero}>
        <div class={styles.heroBg} style={{ "background-image": "url('/images/uploads/2023/08/tynki-ze-szlichta-pod-malowanie.jpg')" }}>
          <div class={styles.heroOverlay} />
          <div class={styles.heroContent}>
            <h1>
              Tynki ze szlichtą<br />wygładzającą<br />pod malowanie
            </h1>
            <a href="#dowiedz-sie-wiecej" class="btn btn-outline">Dowiedz się więcej</a>
          </div>
        </div>
      </section>

      <section class="section" id="dowiedz-sie-wiecej">
        <div class="container grid-2">
          <div>
            <h2>Tynki ze szlichtą wygładzającą pod malowanie</h2>
            <p class={styles.lead}>Jesteśmy firmą budowlaną świadczącą swoje usługi od 1999r co jest gwarancją jakości usług.</p>
            <h2>Zaufaj profesjonalnym usługom tynkarskim</h2>
            <p>Skontaktuj się z nami i przekonaj się o naszym profesjonalizmie!</p>
          </div>
          <div class="text-center">
            <img
              src="/images/uploads/elementor/thumbs/tynk-ze-szlichta-wygladzajaca-2-1-qbc493vjwnj8vdtfz6et930fnfrti3rzhl17p4djqe.png"
              alt="Tynk ze szlichtą wygładzającą"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section class={`section ${styles.about}`} id="o-nas">
        <div class="container grid-2">
          <div class="text-center">
            <img src={site.mascot} alt="M-TYNK maskotka" width="300" height="300" loading="lazy" />
          </div>
          <div>
            <h2>Działamy szybko i dokładnie!</h2>
            <p>
              Panuje przeświadczenie że wszystkie roboty budowlane trwają długo, są robione niedokładne, przez co trzeba przygotować się na dużą ilość poprawek. Jednak to nie tyczy się NAS! Działamy profesjonalnie, wiemy co nas irytuje w pracach budowlanych, dlatego pracujemy tak jakbyśmy sami chcieli zostać obsłużeni.
            </p>
            <p>
              Liczy się dla nas satysfakcja i zadowolenie przebiegu współpracy z klientami, przez to zwracamy uwagę na najmniejsze szczegóły. Opowiadamy na wszystkie pytania, aby Nasi klienci byli świadomi interesujących ich kroków naszej pracy.
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container text-center">
          <h2>Opinie naszych klientów</h2>
          <Reviews />
        </div>
      </section>

      <section class={`section ${styles.featured}`}>
        <div class="container">
          <div class={styles.featuredCard}>
            <img src="/images/uploads/2024/09/gladz.svg" alt="Gładź natryskowa" width="800" height="800" loading="lazy" />
            <div>
              <h3>Gładź natryskowa</h3>
              <p>Gładź natryskowa to sprawdzona metoda wygładzania ścian, która gwarantuje idealnie równą powierzchnię. Zapewnia szybkie wykończenie i wysoką jakość efektu.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class={styles.servicesGrid}>
            <For each={services}>
              {(svc) => (
                <div class={styles.serviceCard}>
                  <img src={svc.icon} alt={svc.title} width="60" height="60" loading="lazy" />
                  <h3>{svc.title}</h3>
                  <p>{svc.description}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class={`section ${styles.aboutFull}`} id="o-nas">
        <div class="container grid-2">
          <div>
            <h2>O Nas</h2>
            <div class="divider" />
            <p>Jesteśmy firmą z wieloletnim doświadczeniem, która od lat zajmuje się Tynkarstwem. Prawie od początku naszej działalności preferujemy metodę wykonywania Tynków wraz ze Szlichtą wygładzającą, która powoduje, że ściana jest przygotowana pod malowanie.</p>
            <p>Dzięki Szlichcie uzyskujemy efekt gładkiej ściany, bez wybrzuszeń i nierówności.</p>
            <p>Firma specjalizuje się w wykonaniu tynków maszynowych W branży tynków maszynowych działamy od 1999r. Posiadamy doświadczoną brygadę (wieloletnia praktyka w zawodzie) więc:</p>
            <ul class={styles.checkList}>
              <li>Tynki cechuje wysoka jakość, estetyka i kultura wykonania.</li>
              <li>Zabezpieczamy stolarkę okienna,instalacje i inne wymagające tego rzeczy.</li>
              <li>Zawsze stosujemy specjalistyczne grunty i preparaty, obrzutki, narożniki, siatki, jak i również listwy dylatacyjne do okien i drzwi.</li>
              <li>Posiadamy sprzęt do pracy w systemie silosowym.</li>
              <li>Doradzamy przy wyborze najlepszego materiału oraz technologi wykonania.</li>
              <li>Dbamy o powierzone mienie.</li>
            </ul>
            <div class={styles.counter}>
              <span class={styles.counterNumber}>100%</span>
              <span class={styles.counterLabel}>Naszego zaangażowania</span>
            </div>
          </div>
          <div class="text-center">
            <img src="/images/uploads/2023/08/mtynk-tynki-pod-malowanie-1.png" alt="M-TYNK tynki pod malowanie" loading="lazy" />
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="text-center">Jak działamy?</h2>
          <div class={styles.accordion}>
            <For each={steps}>
              {(step, i) => (
                <div class={styles.accordionItem}>
                  <button
                    class={`${styles.accordionTitle} ${openStep() === i() ? styles.accordionTitleActive : ""}`}
                    onClick={() => toggleStep(i())}
                  >
                    <span class={styles.accordionIcon}>{openStep() === i() ? "▲" : "▶"}</span>
                    {step.title}
                  </button>
                  {openStep() === i() && (
                    <div class={styles.accordionContent}>
                      <p>{step.content}</p>
                    </div>
                  )}
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class={`section ${styles.cta}`}>
        <div class="container text-center">
          <h2>Skontaktuj się z nami</h2>
          <p>Zadzwoń i umów się na bezpłatną wycenę!</p>
          <a class="btn btn-primary btn-lg" href={`tel:${site.phoneRaw}`}>
            {site.phone}
          </a>
        </div>
      </section>
    </Layout>
  );
}
