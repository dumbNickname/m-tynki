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
    question: "Ile kosztuje tynkowanie maszynowe we Wrocławiu?",
    answer: "Cena tynków maszynowych zależy od wielu czynników: powierzchni do otynkowania, stanu ścian, rodzaju materiału oraz zakresu prac wykończeniowych. Ceny rynkowe zmieniają się dynamicznie, dlatego każde zlecenie wyceniamy indywidualnie. Zadzwoń po bezpłatną wycenę — podamy aktualną cenę dopasowaną do Twojej inwestycji.",
  },
  {
    question: "Jak długo schnie tynk ze szlichtą?",
    answer: "Czas schnięcia zależy od grubości warstwy, temperatury i wilgotności w pomieszczeniu. Orientacyjnie przyjmuje się około jednego dnia na każdy milimetr grubości tynku. Zazwyczaj tynk ze szlichtą jest gotowy do malowania po ok. 2–4 tygodniach.",
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
    question: "Czym różni się tynk gipsowy od gładzi gipsowej?",
    answer: "Tynk gipsowy to warstwa wyrównująca nakładana na surową ścianę, a gładź to cienka warstwa wykończeniowa. Dzięki wykończeniu szlichtą wygładzającą nasz tynk gipsowy w wielu przypadkach pełni obie role i ścianę można malować bez osobnej gładzi.",
  },
  {
    question: "Czy tynk gipsowy nadaje się do łazienki i kuchni?",
    answer: "W pomieszczeniach okresowo wilgotnych tynk gipsowy bywa stosowany, ale w strefach narażonych na bezpośredni kontakt z wodą lepiej sprawdzają się tynki bardziej odporne na wilgoć. Dobór rozwiązania ustalamy dla konkretnego wnętrza.",
  },
  {
    question: "Czym różni się tynkowanie ze szlichtą od zwykłego tynkowania?",
    answer: "Po zwykłym tynkowaniu zwykle trzeba nałożyć osobną warstwę gładzi przed malowaniem. W naszej metodzie tynk wykańczamy szlichtą wygładzającą, dzięki czemu ściana jest gładka i w wielu przypadkach gotowa pod malowanie bez dodatkowej gładzi.",
  },
  {
    question: "Jaki jest czas realizacji tynkowania?",
    answer: "Czas realizacji zależy od powierzchni do otynkowania. Dla domu jednorodzinnego o powierzchni ok. 500–800 m² prace trwają zazwyczaj od 7 do 25 dni roboczych. Dokładny termin ustalamy indywidualnie po zapoznaniu się z zakresem prac.",
  },
  {
    question: "Czy wycena tynków jest bezpłatna?",
    answer: "Tak — wycena jest zawsze bezpłatna i niezobowiązująca. Po kontakcie telefonicznym ustalamy szczegóły inwestycji i przedstawiamy indywidualną ofertę. Obsługujemy Wrocław i okolice.",
  },
  {
    question: "Czy trzeba gruntować ściany przed tynkiem maszynowym?",
    answer: "Przygotowanie podłoża dobieramy do rodzaju ściany — chłonne i nierównomiernie nasiąkliwe podłoża zwykle wymagają zagruntowania, aby tynk dobrze się związał i równo wysychał.",
  },
  {
    question: "Czym jest gładź natryskowa i kiedy jest potrzebna?",
    answer: "Gładź natryskowa to metoda wygładzania ścian agregatem — stosowana gdy podłoże wymaga dodatkowej warstwy wyrównującej. Nasze tynki gipsowe ze szlichtą wygładzającą w wielu przypadkach eliminują potrzebę osobnej gładzi, ale w niektórych sytuacjach doradzamy gładź natryskową jako uzupełnienie.",
  },
];

export default function TynkiService() {
  return (
    <Layout>
      <SeoHead
        title="Tynki maszynowe ze szlichtą pod malowanie Wrocław"
        canonical="/tynki-ze-szlichta-pod-malowanie"
        description="Tynki maszynowe Wrocław ★ tynki gipsowe ze szlichtą wygładzającą pod malowanie — ściany gotowe do malowania bez dodatkowej gładzi. Firma M-TYNK od 1999 — bezpłatna wycena. ☎ 535 157 036."
        ogImage="images/uploads/2023/08/tynki-ze-szlichta-pod-malowanie.jpg"
        dateModified="2023-09-04T09:44:26+00:00"
        breadcrumbs={[
          { name: "Strona Główna", href: "/" },
          { name: "Tynki ze szlichtą pod malowanie" },
        ]}
        faq={faqs}
        service={{ name: "Tynki maszynowe gipsowe ze szlichtą wygładzającą pod malowanie" }}
      />

      <PageHeader
        title="Tynki maszynowe ze szlichtą pod malowanie"
        breadcrumbs={[{ label: "Strona Główna", href: "/" }, { label: "Tynki ze szlichtą pod malowanie" }]}
      />

      <section class="section" id="szlichta">
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
              alt="Tynki ze szlichtą pod malowanie Wrocław"
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

      <section class={`section ${styles.contentSection}`} id="tynki-maszynowe">
        <div class="container">
          <div class={styles.prose}>
            <h2>Na czym polega tynkowanie maszynowe?</h2>
            <p>Tynk maszynowy nakładany jest na ścianę agregatem tynkarskim, który w sposób ciągły miesza suchą zaprawę z wodą i podaje gotową masę pod ciśnieniem prosto na powierzchnię. Dzięki temu zaprawa ma zawsze tę samą, powtarzalną konsystencję, a tynk dokładnie wypełnia podłoże i mocno się z nim wiąże. Maszyna zastępuje najbardziej pracochłonny etap ręcznego narzucania zaprawy, więc duże powierzchnie da się otynkować w znacznie krótszym czasie.</p>
            <p>Po nałożeniu warstwy właściwej ściągamy tynk łatą do równego, a następnie wygładzamy go ręcznie — u nas dodatkowo szlichtą gładziolitu. To połączenie wydajności maszyny z ręcznym, dokładnym wykończeniem daje równą ścianę gotową pod malowanie.</p>

            <h2>Tynk maszynowy a tynk ręczny — co wybrać?</h2>
            <p>Przy większych metrażach tynk maszynowy jest zwykle szybszy i bardziej jednolity niż tynk kładziony wyłącznie ręcznie, bo cała ściana powstaje z tej samej, równo wymieszanej zaprawy. Maszynowe podawanie ogranicza też różnice wynikające ze zmęczenia czy tempa pracy. Tynk ręczny pozostaje rozsądnym rozwiązaniem przy małych powierzchniach, trudno dostępnych miejscach i drobnych poprawkach.</p>
            <p>W praktyce na jednej budowie często łączymy obie metody: większość ścian i sufitów wykonujemy maszynowo, a detale, naroża i miejsca przy instalacjach dopracowujemy ręcznie. O doborze technologii decydujemy po obejrzeniu zakresu prac i stanu podłoża.</p>

            <h2>Jak przebiega tynkowanie maszynowe krok po kroku?</h2>
            <p>Realizację zaczynamy od oceny podłoża i zabezpieczenia budowy: okleiamy okna i drzwi, osłaniamy posadzki oraz instalacje. Następnie ustawiamy narożniki i listwy, przygotowujemy agregat i dobieramy konsystencję zaprawy do konkretnego pomieszczenia. Warstwę właściwą nakładamy maszynowo, ściągamy ją łatą do równego, a po wstępnym związaniu przystępujemy do wygładzania.</p>
            <p>Kluczowy dla efektu końcowego jest etap wygładzania. Każdy narzut przecieramy trzema rodzajami łat gładzących, uzupełniamy drobne ubytki, a na końcu nakładamy szlichtę gładziolitu. Dzięki temu ściana po wyschnięciu jest gładka i równa — bez fal, zacieków i widocznych łączeń — i nadaje się bezpośrednio pod malowanie, bez osobnej warstwy gładzi.</p>
            <p>Cały proces prowadzimy tak, aby ograniczyć liczbę poprawek po naszym wyjściu z budowy. Zwracamy uwagę na naroża, ościeża okien i miejsca przy instalacjach, bo to tam najczęściej widać różnicę między tynkiem wykonanym pospiesznie a dopracowanym ręcznie.</p>
          </div>
        </div>
      </section>

      <section class={`section ${styles.contentSection}`} id="tynki-gipsowe">
        <div class="container">
          <div class={styles.prose}>
            <h2>Dlaczego tynki gipsowe?</h2>
            <p>Tynk gipsowy daje gładką i równą powierzchnię ścian oraz sufitów, dobrze sprawdzającą się we wnętrzach mieszkalnych. Gips jest materiałem paroprzepuszczalnym, który pomaga regulować wilgotność powietrza w pomieszczeniach, a jednocześnie pozwala uzyskać estetyczne wykończenie bez grubych warstw dodatkowych mas.</p>
            <p>W naszym wykonaniu tynk gipsowy nakładamy maszynowo, a potem wygładzamy szlichtą gładziolitu. Taka ściana po wyschnięciu jest przygotowana bezpośrednio pod malowanie, więc w wielu przypadkach nie trzeba nakładać osobnej, kosztownej warstwy gładzi.</p>

            <h2>Tynk gipsowy a tynk cementowo-wapienny</h2>
            <p>Tynk gipsowy najlepiej sprawdza się w suchych pomieszczeniach mieszkalnych — pokojach, sypialniach, korytarzach — gdzie zależy nam na gładkiej powierzchni i komforcie wykończenia. Tynk cementowo-wapienny jest bardziej odporny na wilgoć i mechaniczne uszkodzenia, dlatego częściej stosuje się go w pomieszczeniach narażonych na zawilgocenie oraz na niektórych powierzchniach technicznych.</p>
            <p>Wybór technologii zależy od przeznaczenia pomieszczenia, oczekiwanego efektu i budżetu. Podczas wyceny doradzamy, które rozwiązanie będzie lepsze dla konkretnego wnętrza, i wskazujemy, gdzie tynk gipsowy ze szlichtą da najlepszy stosunek jakości do ceny.</p>
          </div>
        </div>
      </section>

      <section class={`section ${styles.contentSection}`} id="gladz-natryskowa">
        <div class="container">
          <div class={styles.prose}>
            <h2>Gładź natryskowa — kiedy jest potrzebna?</h2>
            <p>Gładź natryskowa to metoda wykończenia ścian, w której gotową masę nakłada się na powierzchnię za pomocą agregatu, a następnie rozprowadza i wygładza ręcznie. Natrysk pozwala równomiernie pokryć duże powierzchnie w krótkim czasie, a ręczne wygładzenie nadaje im ostateczną gładkość.</p>
            <p>Warto pamiętać, że w naszej metodzie tynkowania ze szlichtą wygładzającą wiele ścian jest gotowych pod malowanie bez osobnej warstwy gładzi. Podczas wyceny doradzamy, które rozwiązanie będzie korzystniejsze — czy wystarczy tynk ze szlichtą, czy w danym pomieszczeniu gładź natryskowa jest potrzebna jako uzupełnienie.</p>

            <h2>Malowanie natryskowe — wykończenie w jednej ekipie</h2>
            <p>Oprócz tynkowania wykonujemy również natryskowe malowanie ścian i sufitów na biało oraz w kolorze. Dzięki temu inwestor nie musi koordynować kilku ekip — tę samą powierzchnię, którą otynkowaliśmy i wygładziliśmy, możemy również pomalować. Malujemy farbami akrylowymi, lateksowymi, winylowymi i ceramicznymi, dobierając rodzaj farby do pomieszczenia.</p>
          </div>
        </div>
      </section>

      <section class={`section ${styles.localSection}`} id="firma">
        <div class="container">
          <div class={styles.localCard}>
            <div>
              <h2>Firma tynkarska M-TYNK Wrocław — od 1999 roku</h2>
              <p>M-TYNK to firma tynkarska działająca we Wrocławiu nieprzerwanie od 1999 roku. Przez ten czas wykonaliśmy tynki w wielu domach jednorodzinnych, mieszkaniach i lokalach usługowych. Naszą specjalnością są tynki gipsowe ze szlichtą wygładzającą pod malowanie.</p>
              <p>Wykonujemy tynki maszynowe, tynki gipsowe ze szlichtą, gładź natryskową, zabudowy z płyt karton-gipsowych oraz natryskowe malowanie ścian.</p>
              <p><strong>Adres:</strong> {site.address}</p>
              <p><strong>Telefon:</strong> <a href={`tel:${site.phoneRaw}`}>{site.phone}</a> · <strong>E-mail:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
              <p><strong>Obsługiwane lokalizacje:</strong> Wrocław, powiat wrocławski, Trzebnica, Oława, Sobótka, Długołęka, Miękinia, Domasław, Dobrzykowice, Lutynia.</p>
            </div>
          </div>
        </div>
      </section>

      <section class={`section ${styles.benefitsSection}`} id="zalety">
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

      <section class="section" id="faq">
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
