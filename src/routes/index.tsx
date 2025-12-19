import { Title, Meta } from "@solidjs/meta";
import Layout from "~/components/Layout";
import ServiceCard from "~/components/ServiceCard";

export default function Home() {
  const services = [
    {
      icon: "/images/tynk-ze-szlichta-wygladzajaca-01-01.png",
      title: "Tynki Gipsowe",
      description: "Wykonane przez nas tynki gipsowe pozwalają na uzyskanie gładkiej, równej i dokładnie wykończonej powierzchni."
    },
    {
      icon: "/images/szlichta-wygladzajaca-01.png",
      title: "Tynki Gipsowe ze szlichtą wygładzającą",
      description: "Na tynki gipsowe nakładamy dodatkową warstwą wygładzającą, która pozwala na uzyskanie idealnie gładkiej ściany nadającej się bezpośrednio pod malowanie!"
    },
    {
      icon: "/images/plastering.png",
      title: "Tynki Cementowo-Wapienne",
      description: "Tynki cementowo-wapienne są rodzajem tynków bardziej odpornych na korozję biologiczną, charakteryzuje się także dużą wytrzymałością na uszkodzenia."
    },
    {
      icon: "/images/gladz.svg",
      title: "Gładź natryskowa",
      description: "Gładź natryskowa to sprawdzona metoda wygładzania ścian, która gwarantuje idealnie równą powierzchnię. Zapewnia szybkie wykończenie i wysoką jakość efektu."
    },
    {
      icon: "/images/tynk-ze-szlichta-wygladzajaca-01-01.png",
      title: "Tynki Gipsowe utwardzane",
      description: "Tynki te są alternatywą dla tynków gipsowych i cementowo-wapiennych, ponieważ mają właściwości regulujące wilgotność oraz są bardziej twarde niż tradycyjne tynki gipsowe"
    },
    {
      icon: "/images/Bez-nazwy-2.png",
      title: "Zabudowy G-K",
      description: "Oferujemy również zabudowy ścian, sufitów podwieszanych oraz różnego rodzaju konstrukcji lekkich oraz dekoracyjnych wykonanych z płyt karton gipsowych"
    },
    {
      icon: "/images/tynk-pod-malowanie-01.png",
      title: "Natryskowe Malowanie Ścian",
      description: "Pomieszczenia malujemy na biało i w kolorze, używamy do tego farb akrylowych, lateksowych, winylowych i ceramicznych."
    }
  ];

  return (
    <Layout
      title="Tynki ze Szlichtą pod Malowanie - M-TYNK Wrocław"
      description="Profesjonalne tynki gipsowe ze szlichtą gładziolitu wygładzającego pod malowanie. Firma M-TYNK Wrocław - doświadczenie od 1999 roku. Zadzwoń: +48 535 157 036"
      canonical="https://wroclawtynki.pl/"
    >
      {/* Hero Section */}
      <section class="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          class="absolute inset-0 bg-cover bg-center"
          style={{
            "background-image": "url('/images/hero-bg.jpg')",
            "filter": "brightness(0.7)"
          }}
        />
        <div class="relative z-10 container-custom text-center text-white">
          <h1 class="text-4xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Tynki ze szlichtą<br />
            wygładzającą<br />
            pod malowanie
          </h1>
          <a href="#dowiedz-sie-wiecej" class="btn-primary inline-block">
            Dowiedz się więcej
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section class="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl lg:text-5xl font-heading font-bold mb-6">
                Tynki ze szlichtą wygładzającą pod malowanie
              </h2>
              <p class="text-lg text-secondary-light mb-6 leading-relaxed">
                Jesteśmy firmą budowlaną świadczącą swoje usługi od 1999r co jest gwarancją jakości usług.
              </p>
              <h3 class="text-2xl font-heading font-semibold mb-4">
                Zaufaj profesjonalnym usługom tynkarskim
              </h3>
              <p class="text-lg text-secondary-light leading-relaxed">
                Skontaktuj się z nami i przekonaj się o naszym profesjonalizmie!
              </p>
            </div>
            <div class="flex justify-center">
              <img
                src="/images/tynk-ze-szlichta-wygladzajaca-2-1.png"
                alt="Tynki ze szlichtą wygładzającą"
                class="max-w-full h-auto rounded-lg shadow-xl"
                width="663"
                height="1080"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section class="py-16 lg:py-24 bg-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1">
              <div class="bg-gray-50 p-8 rounded-lg">
                <h2 class="text-3xl font-heading font-bold mb-8 text-center">Opinie naszych klientów</h2>
                <div class="space-y-6">
                  <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                      <div class="flex text-accent">
                        {"★★★★★"}
                      </div>
                    </div>
                    <p class="text-secondary-light mb-4">
                      "Zdecydowanie polecam Pana Marcina z firmy M-tynk. Tynki wykonane bardzo staranie, terminowo z zachowaniem porządku na budowie."
                    </p>
                    <p class="font-semibold text-secondary">Piotr Błachuta</p>
                  </div>
                  
                  <div class="bg-white p-6 rounded-lg shadow-md">
                    <div class="flex items-center mb-4">
                      <div class="flex text-accent">
                        {"★★★★★"}
                      </div>
                    </div>
                    <p class="text-secondary-light mb-4">
                      "Jestem bardzo zadowolony z tynków wykonanych przez firmę M-Tynk. Pan Przemek kładzie tynki bardzo starannie i dokładnie."
                    </p>
                    <p class="font-semibold text-secondary">Przemysław Pawlik</p>
                  </div>
                  
                  <div class="text-center mt-8">
                    <a
                      href="https://g.page/r/CQJV4JkgnlhYEAg/review"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn-primary"
                    >
                      Zobacz wszystkie opinie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="order-1 lg:order-2 flex justify-center">
              <img
                src="/images/mtynk-ludzik-gladziolit-300x300-1.png"
                alt="M-TYNK Maskotka"
                class="w-64 h-64"
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="dowiedz-sie-wiecej" class="py-16 lg:py-24 bg-gray-50">
        <div class="container-custom">
          <h2 class="text-3xl lg:text-5xl font-heading font-bold text-center mb-12">
            Nasze Usługi
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" class="py-16 lg:py-24 bg-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 class="text-3xl lg:text-5xl font-heading font-bold mb-6">O Nas</h2>
              <div class="w-20 h-1 bg-accent mb-8"></div>
              
              <div class="space-y-6 text-secondary-light leading-relaxed">
                <p>
                  Jesteśmy firmą z wieloletnim doświadczeniem, która od lat zajmuje się Tynkarstwem. Prawie od początku naszej działalności preferujemy metodę wykonywania Tynków wraz ze Szlichtą wygładzającą, która powoduje, że ściana jest przygotowana pod malowanie.
                </p>
                <p>
                  Dzięki Szlichcie uzyskujemy efekt gładkiej ściany, bez wybrzuszeń i nierówności.
                </p>
                <p>
                  Firma specjalizuje się w wykonaniu tynków maszynowych. W branży tynków maszynowych działamy od 1999r. Posiadamy doświadczoną brygadę (wieloletnia praktyka w zawodzie) więc:
                </p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Tynki cechuje wysoka jakość, estetyka i kultura wykonania.</li>
                  <li>Zabezpieczamy stolarkę okienną, instalacje i inne wymagające tego rzeczy.</li>
                  <li>Zawsze stosujemy specjalistyczne grunty i preparaty, obrzutki, narożniki, siatki, jak i również listwy dylatacyjne do okien i drzwi.</li>
                  <li>Posiadamy sprzęt do pracy w systemie silosowym.</li>
                  <li>Doradzamy przy wyborze najlepszego materiału oraz technologii wykonania.</li>
                  <li>Dbamy o powierzone mienie.</li>
                </ul>
                
                <div class="bg-primary/5 p-8 rounded-lg text-center">
                  <div class="text-6xl font-bold text-primary mb-2">100%</div>
                  <div class="text-xl font-semibold">Naszego zaangażowania</div>
                </div>
              </div>
            </div>
            
            <div class="flex justify-center">
              <img
                src="/images/mtynk-tynki-pod-malowanie-1.png"
                alt="M-TYNK Tynki pod malowanie"
                class="max-w-full h-auto rounded-lg shadow-xl"
                width="663"
                height="1080"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section class="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div class="container-custom">
          <h2 class="text-3xl lg:text-5xl font-heading font-bold text-center mb-12">
            Jak działamy?
          </h2>
          
          <div class="max-w-4xl mx-auto space-y-4">
            <details class="bg-white rounded-lg shadow-md overflow-hidden group">
              <summary class="cursor-pointer p-6 font-semibold text-lg flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span>ETAP 1: Przygotowanie</span>
                <svg class="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="p-6 pt-0 text-secondary-light">
                <p>Pierwszym etapem zawsze jest odpowiednie zabezpieczenie okien, drzwi i elementów, które mogą zostać uszkodzone.</p>
              </div>
            </details>
            
            <details class="bg-white rounded-lg shadow-md overflow-hidden group">
              <summary class="cursor-pointer p-6 font-semibold text-lg flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span>ETAP 2: Narzut</span>
                <svg class="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="p-6 pt-0 text-secondary-light">
                <p>Nakładanie pierwszej warstwy tynku, warstwy właściwej na ścianę. Na tym etapie zużywamy najwięcej materiału.</p>
              </div>
            </details>
            
            <details class="bg-white rounded-lg shadow-md overflow-hidden group">
              <summary class="cursor-pointer p-6 font-semibold text-lg flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span>ETAP 3: Wygładzanie</span>
                <svg class="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="p-6 pt-0 text-secondary-light">
                <p>Wygładzanie powierzchni narzędziami tynkarskimi, uzupełnianie ubytków i nieprawidłowości. Każdy narzut jest przez nas wygładzany 3 rodzajami łat gładzących.</p>
              </div>
            </details>
            
            <details class="bg-white rounded-lg shadow-md overflow-hidden group">
              <summary class="cursor-pointer p-6 font-semibold text-lg flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span>ETAP DODATKOWY: Gładziolit</span>
                <svg class="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div class="p-6 pt-0 text-secondary-light">
                <p>Zastosowanie Gładziolitu Wygładzającego w celu uzyskania gładkiej powierzchni Tynku. Na tym etapie wygładzamy ścianę do tego stopnia, że po wyschnięciu, jest gotowa do malowania.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </Layout>
  );
}
