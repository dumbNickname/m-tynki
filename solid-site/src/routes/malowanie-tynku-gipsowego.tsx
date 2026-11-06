import { For } from "solid-js";
import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import NavLink from "~/components/NavLink";
import VideoClip from "~/components/VideoClip";
import site from "~/data/site.json";
import videos from "~/data/videos.json";
import { opinieLabel } from "~/utils/plural";
import flagship from "./tynki-ze-szlichta-pod-malowanie.module.css";
import styles from "./malowanie-tynku-gipsowego.module.css";

const video = videos.tynkiGipsowe;

const faqs = [
  {
    question: "Po jakim czasie można malować tynk gipsowy?",
    answer: "Gdy tynk jest suchy w całej grubości. Orientacyjnie przyjmuje się około jednego dnia schnięcia na każdy milimetr tynku w dobrych warunkach, więc przy typowej grubości 10–15 mm to zwykle 2–4 tygodnie. Zimą, przy słabym wietrzeniu lub dużej wilgotności powietrza trwa to dłużej.",
  },
  {
    question: "Jak sprawdzić, czy tynk gipsowy jest już suchy?",
    answer: "Suchy tynk gipsowy ma jednolity, jasny kolor — ciemniejsze plamy, zwykle w narożach, przy suficie i na ścianach zewnętrznych, oznaczają wilgoć. Prosty test: przyklej taśmą na noc kawałek folii ok. 50×50 cm. Jeśli rano pod folią jest para lub ciemniejsza plama, na malowanie jest za wcześnie. Najdokładniej wilgotność zmierzy wilgotnościomierz — dopuszczalną wartość podaje karta techniczna tynku.",
  },
  {
    question: "Czy trzeba gruntować tynk gipsowy przed malowaniem?",
    answer: "Tak. Tynk gipsowy jest chłonny i nie wszędzie chłonie tak samo. Grunt lub farba podkładowa wyrównuje chłonność, dzięki czemu farba nawierzchniowa kryje równo, nie robi smug i nie trzeba kłaść dodatkowych warstw. Preparat najlepiej dobrać do systemu farby, którą będziesz malować.",
  },
  {
    question: "Jaka farba na tynk gipsowy?",
    answer: "Do pokoi, sypialni i korytarzy najczęściej stosuje się farby akrylowe lub lateksowe. W kuchni, łazience i w miejscach narażonych na zabrudzenia lepiej sprawdzają się farby lateksowe lub ceramiczne o wyższej odporności na szorowanie. Zwykle wystarczy podkład i dwie warstwy farby nawierzchniowej.",
  },
  {
    question: "Czy po tynku ze szlichtą trzeba robić gładź przed malowaniem?",
    answer: "W typowych pomieszczeniach zwykle nie — po wyschnięciu i zagruntowaniu ścianę można malować, więc odpada nakładanie gładzi, jej schnięcie i szlifowanie. Trzeba jednak pamiętać, że tynk ze szlichtą to nadal tynk, a nie gładź: jest odbierany według normy dla tynków gipsowych i nie ma gładkości gładzi szpachlowej. Jeśli planujesz oświetlenie padające wzdłuż ścian (listwy LED, kinkiety, oprawy przy suficie), farbę z połyskiem, ciemne kolory albo po prostu chcesz najwyższej klasy gładkości — zalecamy gładź. Wykonujemy ją jako osobny etap, przy malowaniu.",
  },
  {
    question: "Jak odbiera się tynk gipsowy — czy można go sprawdzać latarką?",
    answer: "Tynk gipsowy maszynowy odbiera się według normy PN-B-10110 (lub warunków zapisanych w umowie): łatą 2 m sprawdza się płaskość, poziomicą pion, kątownikiem naroża, a wygląd powierzchni ocenia się z odległości ok. 2 m w rozproszonym świetle dziennym. Latarka przyłożona płasko do ściany pokaże drobne ślady narzędzi na każdym tynku — nie jest to kryterium odbioru tynku. Ocena w świetle bocznym ma sens tylko wtedy, gdy wcześniej ustalono wyższy standard wykończenia, czyli gładź.",
  },
  {
    question: "Malowanie natryskowe czy wałkiem?",
    answer: "Natrysk jest szybszy na dużych, pustych powierzchniach — w nowym domu przed montażem podłóg i mebli — i daje bardzo równomierną powłokę, ale wymaga dokładnego zabezpieczenia okien i posadzek. Wałek lepiej sprawdza się w małych pomieszczeniach i przy poprawkach. W M-TYNK wykonujemy malowanie natryskowe tych samych ścian, które tynkujemy.",
  },
];

const checklist = [
  { title: "Łata 2 m i poziomica", text: "Przyłóż łatę 2 m w różnych miejscach ściany, a poziomicą sprawdź pion. Norma dla tynków gipsowych maszynowych (PN-B-10110) dopuszcza niewielkie odchyłki — rzędu kilku milimetrów na długości łaty — więc liczy się zmierzona wartość, a nie samo „widać prześwit”." },
  { title: "Ocena wzrokowa z ok. 2 m", text: "Wygląd tynku ocenia się z odległości ok. 2 m, w rozproszonym świetle dziennym — tak, jak będziesz na ścianę patrzeć na co dzień. Szukamy rys, plam, zacieków i miejsc wyraźnie odstających od reszty ściany." },
  { title: "Naroża i ościeża", text: "Sprawdź kąty przy oknach i drzwiach, połączenia ścian z sufitem i krawędzie. To tam najczęściej widać pośpiech." },
  { title: "Okolice instalacji", text: "Puszki elektryczne, wyprowadzenia rur i kratki wentylacyjne powinny być obrobione czysto, bez wyszczerbień i grudek." },
  { title: "Kolor ściany", text: "Jednolity, jasny kolor oznacza suchy tynk. Ciemniejsze plamy to wilgoć — z malowaniem trzeba poczekać." },
];

const comparison = [
  { label: "Etapy przed malowaniem", standard: "tynk → gładź (często 2 warstwy) → szlifowanie → grunt", szlichta: "tynk ze szlichtą → grunt" },
  { label: "Dodatkowe schnięcie", standard: "tak — gładź musi wyschnąć przed szlifowaniem", szlichta: "nie — schnie tylko tynk" },
  { label: "Szlifowanie i pył", standard: "szlifowanie wszystkich ścian i sufitów", szlichta: "zwykle tylko drobne poprawki" },
  { label: "Liczba ekip", standard: "często tynkarz + osobna ekipa od gładzi", szlichta: "jedna ekipa (my możemy też pomalować)" },
  { label: "Gładkość", standard: "najwyższa — gładź przygotowuje ścianę także pod światło boczne", szlichta: "gładka powierzchnia tynku, odbierana według normy dla tynków gipsowych" },
  { label: "Kiedy wybrać", standard: "oświetlenie wzdłuż ścian, farby z połyskiem, ciemne kolory, najwyższy standard", szlichta: "typowe pokoje, korytarze i sypialnie malowane jasną, matową farbą" },
];

export default function MalowanieTynkuGipsowego() {
  return (
    <Layout>
      <SeoHead
        title="Malowanie tynku gipsowego — kiedy, jaki grunt i farba"
        rawTitle
        canonical="/malowanie-tynku-gipsowego"
        description="Kiedy można malować tynk gipsowy, jak sprawdzić, czy wyschnął, czy gruntować i jaką farbę wybrać. Poradnik tynkarzy z Wrocławia + odbiór tynku według normy."
        ogImage="images/og-malowanie-tynku-gipsowego.jpg"
        ogType="article"
        datePublished="2026-11-06T08:00:00+00:00"
        dateModified="2026-11-06T08:00:00+00:00"
        breadcrumbs={[
          { name: "Strona Główna", href: "/" },
          { name: "Malowanie tynku gipsowego" },
        ]}
        faq={faqs}
        video={{
          name: video.name,
          description: video.description,
          thumbnailUrl: video.poster,
          contentUrl: video.src,
          uploadDate: video.uploadDate,
          duration: video.duration,
        }}
      />

      <PageHeader
        title="Malowanie tynku gipsowego — poradnik od tynkarzy"
        breadcrumbs={[{ label: "Strona Główna", href: "/" }, { label: "Malowanie tynku gipsowego" }]}
      />

      <section class="section">
        <div class={`container ${styles.intro}`}>
          <div class={styles.introText}>
            <p class={styles.lead}>
              <strong>W skrócie:</strong> tynk gipsowy maluje się dopiero, gdy jest suchy w całej grubości — zwykle po 2–4 tygodniach.
              Przed malowaniem ścianę trzeba zagruntować, a potem położyć dwie warstwy farby akrylowej lub lateksowej.
              Jeśli tynk był wykończony szlichtą wygładzającą, w typowych pomieszczeniach zwykle nie trzeba już robić gładzi — wyjątkiem są ściany oświetlane światłem bocznym.
            </p>
            <p>
              Tynkujemy domy we Wrocławiu i okolicach od 1999 roku i po każdej budowie inwestorzy pytają nas o to samo: kiedy można malować, czym gruntować i na co uważać.
              Zebraliśmy tu odpowiedzi, które dajemy na budowie. Obok krótki film z jednej z naszych realizacji — tak wyglądają ściany z tynku gipsowego ze szlichtą po wyschnięciu, tuż przed malowaniem.
            </p>
            <nav class={styles.toc} aria-label="Spis treści">
              <strong>Spis treści</strong>
              <ol>
                <li><a href="#kiedy-malowac">Kiedy można malować tynk gipsowy?</a></li>
                <li><a href="#czy-suchy">Jak sprawdzić, czy tynk wyschnął?</a></li>
                <li><a href="#gruntowanie">Gruntowanie tynku gipsowego</a></li>
                <li><a href="#jaka-farba">Jaka farba na tynk gipsowy?</a></li>
                <li><a href="#odbior">Odbiór tynku przed malowaniem — normy i lista kontrolna</a></li>
                <li><a href="#gladz">Tynk + gładź czy tynk ze szlichtą?</a></li>
                <li><a href="#faq">Najczęściej zadawane pytania</a></li>
              </ol>
            </nav>
          </div>
          <div class={styles.introVideo}>
            <VideoClip
              src={video.src}
              poster={video.poster}
              width={video.width}
              height={video.height}
              title={video.name}
              caption="Ściany z tynku gipsowego ze szlichtą po wyschnięciu — gotowe pod malowanie (film z budowy, kwiecień 2026)."
            />
          </div>
        </div>
      </section>

      <section class={`section ${flagship.contentSection}`}>
        <div class="container">
          <div class={flagship.prose}>
            <h2 id="kiedy-malowac">Kiedy można malować tynk gipsowy?</h2>
            <p>
              Tynk gipsowy można malować dopiero wtedy, gdy wyschnie w całej grubości, a nie tylko na powierzchni. W praktyce przyjmuje się około <strong>jednego dnia schnięcia na każdy milimetr tynku</strong> przy dobrej wentylacji i temperaturze pokojowej.
              Typowy tynk wewnętrzny ma 10–15 mm, więc ściany są gotowe do malowania zwykle po <strong>2–4 tygodniach</strong>. W zimie, przy dużej wilgotności powietrza albo w pomieszczeniach bez wietrzenia trwa to wyraźnie dłużej.
            </p>
            <p>
              Schnięcie przyspiesza przede wszystkim wietrzenie: wilgoć z tynku musi mieć dokąd uciec. Zimą warto umiarkowanie ogrzewać dom i regularnie wietrzyć. Nie kieruj nagrzewnicy bezpośrednio na świeży tynk — zbyt gwałtowne suszenie jednego miejsca nie pomaga, a może zaszkodzić.
            </p>
            <p>
              Malowanie zbyt wcześnie to najczęstszy błąd: wilgoć zamknięta pod farbą daje przebarwienia, plamy i łuszczenie się powłoki, a ściany schną potem jeszcze wolniej.
            </p>

            <h2 id="czy-suchy">Jak sprawdzić, czy tynk gipsowy wyschnął?</h2>
            <p>Nie trzeba specjalistycznego sprzętu — wystarczą trzy proste sposoby:</p>
            <ul class={styles.list}>
              <li><strong>Kolor.</strong> Mokry tynk gipsowy jest ciemniejszy, szarobeżowy. Suchy robi się jednolicie jasny. Ciemne plamy najdłużej utrzymują się w narożach, przy suficie, za grzejnikami i na ścianach zewnętrznych.</li>
              <li><strong>Test folii.</strong> Przyklej taśmą na noc kawałek folii ok. 50×50 cm. Jeśli rano pod folią jest para wodna albo ciemniejsza plama — na malowanie jest za wcześnie.</li>
              <li><strong>Wilgotnościomierz.</strong> Najdokładniejsza metoda. Dopuszczalną wilgotność tynku przed malowaniem podaje karta techniczna konkretnego produktu — warto ją sprawdzić, zanim kupisz farbę.</li>
            </ul>

            <figure class={styles.photo}>
              <img
                src="images/uploads/2026/04/swiezy-tynk-gipsowy-schniecie-scian.jpg"
                srcset="images/thumbs/uploads/2026/04/swiezy-tynk-gipsowy-schniecie-scian.jpg 400w, images/uploads/2026/04/swiezy-tynk-gipsowy-schniecie-scian.jpg 1200w"
                sizes="(max-width: 768px) 100vw, 400px"
                width="1200"
                height="1600"
                alt="Świeży tynk gipsowy w trakcie schnięcia — jaśniejsze i ciemniejsze partie ściany i sufitu w pustym pomieszczeniu"
                loading="lazy"
              />
              <figcaption>Tynk w trakcie schnięcia: ciemniejsze partie to miejsca, w których jest jeszcze wilgoć. Malujemy dopiero, gdy kolor wyrówna się na całej powierzchni.</figcaption>
            </figure>

            <h2 id="gruntowanie">Czy trzeba gruntować tynk gipsowy przed malowaniem?</h2>
            <p>
              Tak. Tynk gipsowy jest chłonny, a do tego nie wszędzie chłonie tak samo — inaczej przy narożnikach, inaczej na środku ściany. Bez gruntu farba wsiąka nierówno, powstają smugi i „łaty”, a na krycie trzeba zużyć więcej warstw.
            </p>
            <p>
              Grunt albo farba podkładowa wyrównuje chłonność i poprawia przyczepność. Najbezpieczniej wybrać preparat z tego samego systemu co farba nawierzchniowa i nakładać go zgodnie z zaleceniami producenta — ani za mało, ani „na zapas”, bo zbyt mocno zagruntowana ściana może tworzyć śliską powłokę, do której farba gorzej przylega.
            </p>

            <h2 id="jaka-farba">Jaka farba na tynk gipsowy?</h2>
            <ul class={styles.list}>
              <li><strong>Pokoje, sypialnie, korytarze</strong> — farby akrylowe lub lateksowe. Dobrze kryją, są paroprzepuszczalne i łatwe w poprawkach.</li>
              <li><strong>Kuchnia, łazienka, przedpokój</strong> — farby lateksowe lub ceramiczne o wyższej klasie odporności na szorowanie, które można myć.</li>
              <li><strong>Sufity</strong> — matowe farby sufitowe, które lepiej maskują drobne nierówności przy świetle padającym z okien.</li>
            </ul>
            <p>
              Im bardziej matowa i jaśniejsza farba, tym mniej widać drobne nierówności podłoża. Farby z połyskiem i ciemne kolory działają odwrotnie — podkreślają każdy ślad, dlatego pod nie zwykle robi się gładź.
            </p>
            <p>
              Standardowo: jedna warstwa podkładu i dwie warstwy farby nawierzchniowej. Przy intensywnych kolorach warto pierwszą warstwę zrobić w odcieniu zbliżonym do docelowego.
              Na dużych, pustych powierzchniach — w nowym domu przed montażem podłóg i mebli — szybciej i równiej wychodzi <NavLink href="/tynki-ze-szlichta-pod-malowanie#gladz-natryskowa">malowanie natryskowe</NavLink>.
            </p>

            <figure class={styles.photo}>
              <img
                src="images/uploads/2026/04/salon-po-tynkowaniu-i-malowaniu-sufit-gk.jpg"
                srcset="images/thumbs/uploads/2026/04/salon-po-tynkowaniu-i-malowaniu-sufit-gk.jpg 400w, images/uploads/2026/04/salon-po-tynkowaniu-i-malowaniu-sufit-gk.jpg 1600w"
                sizes="(max-width: 768px) 100vw, 800px"
                width="1600"
                height="1200"
                alt="Salon w nowym domu z gładkimi, pomalowanymi na biało ścianami i podwieszanym sufitem z płyt GK"
                loading="lazy"
              />
              <figcaption>Ściany po malowaniu na biało i podwieszany fragment sufitu z płyt GK. Planujesz oświetlenie liniowe przy suficie lub wzdłuż ścian? Powiedz nam przed wyceną — w takich miejscach doradzamy gładź.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="section" id="odbior">
        <div class="container">
          <div class={flagship.prose}>
            <h2>Odbiór tynku przed malowaniem — lista kontrolna</h2>
            <p>
              Tynk najlepiej odebrać <strong>zanim</strong> wejdzie malarz — poprawki przed malowaniem są proste, po malowaniu już nie. Punktem odniesienia jest norma <strong>PN-B-10110 „Tynki gipsowe wykonywane mechanicznie”</strong>, chyba że w umowie ustalono inaczej. Polskie Normy są dobrowolne, ale w praktyce właśnie według nich odbiera się tynki. Tak sprawdzają nas inwestorzy (i tak sami sprawdzamy swoją pracę):
            </p>
          </div>
          <ol class={styles.checklist}>
            <For each={checklist}>
              {(item) => (
                <li class={styles.checkItem}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              )}
            </For>
          </ol>
          <div class={`${flagship.prose} ${styles.notice}`}>
            <h3>A co ze światłem bocznym?</h3>
            <p>
              Światło padające wzdłuż ściany — z latarki, listwy LED, kinkietu albo okna tuż przy ścianie — wydobywa drobne ślady narzędzi na <strong>każdym</strong> tynku, także na bardzo dobrze wykonanym. Dlatego nie jest to sposób odbioru tynku.
            </p>
            <p>
              Jeśli jednak takie oświetlenie jest w projekcie (np. oprawy liniowe przy suficie, podświetlane wnęki, „wall-washery”), ściany będą tak oglądane na co dzień. Wtedy potrzebna jest <strong>gładź</strong> — osobna warstwa wykończeniowa, którą wykonujemy przy malowaniu i którą odbiera się już według wyższych wymagań. <strong>Powiedz nam o takim oświetleniu przed wyceną</strong> — doradzimy, w których pomieszczeniach wystarczy tynk ze szlichtą, a gdzie warto dodać gładź.
            </p>
          </div>
        </div>
      </section>

      <section class={`section ${flagship.contentSection}`} id="gladz">
        <div class="container">
          <div class={flagship.prose}>
            <h2>Tynk gipsowy + gładź czy tynk ze szlichtą?</h2>
            <p>
              Zwykły tynk gipsowy przed malowaniem najczęściej pokrywa się jeszcze gładzią, którą trzeba wysuszyć i wyszlifować. Tynk wykończony <NavLink href="/tynki-ze-szlichta-pod-malowanie#szlichta">szlichtą wygładzającą</NavLink> jest gładszy już na etapie tynkowania — w typowych pomieszczeniach po wyschnięciu wystarczy grunt i farba.
            </p>
            <div class={styles.tableWrap}>
              <table class={styles.table}>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Tynk gipsowy + gładź</th>
                    <th scope="col">Tynk gipsowy ze szlichtą</th>
                  </tr>
                </thead>
                <tbody>
                  <For each={comparison}>
                    {(row) => (
                      <tr>
                        <th scope="row">{row.label}</th>
                        <td>{row.standard}</td>
                        <td>{row.szlichta}</td>
                      </tr>
                    )}
                  </For>
                </tbody>
              </table>
            </div>
            <p>
              Szlichta wymaga od tynkarza więcej pracy na etapie tynkowania, ale tam, gdzie gładź nie jest potrzebna, inwestor oszczędza cały kolejny etap — czas, materiał i sprzątanie pyłu po szlifowaniu. Tam, gdzie jest potrzebna, wykonujemy ją jako osobny etap, przy malowaniu.
              Nie musisz wybierać „wszystko albo nic” — gładź można zrobić tylko w wybranych pomieszczeniach albo na pojedynczych ścianach.
              Więcej o tym, jak to robimy: <NavLink href="/tynki-ze-szlichta-pod-malowanie">tynki maszynowe gipsowe ze szlichtą pod malowanie</NavLink>.
            </p>
          </div>
        </div>
      </section>

      <section class="section" id="faq">
        <div class="container">
          <div class="text-center">
            <h2>Najczęściej zadawane pytania</h2>
          </div>
          <div class={flagship.faqList}>
            <For each={faqs}>
              {(faq) => (
                <details class={flagship.faqItem}>
                  <summary class={flagship.faqQuestion}>{faq.question}</summary>
                  <p class={flagship.faqAnswer}>{faq.answer}</p>
                </details>
              )}
            </For>
          </div>
        </div>
      </section>

      <section class={`section ${flagship.ctaSection}`}>
        <div class="container text-center">
          <h2>Budujesz pod Wrocławiem? Porozmawiajmy o tynkach</h2>
          <p>
            {site.googleRating}★ w {site.googleReviewCount} {opinieLabel(site.googleReviewCount)} Google. Zadzwoń po bezpłatną wycenę — powiedz nam o planowanym oświetleniu, a doradzimy, gdzie wystarczy szlichta, a gdzie warto dodać gładź. Możesz też obejrzeć naszą aktualną budowę.
          </p>
          <a class="btn btn-primary btn-lg" href={`tel:${site.phoneRaw}`}>
            {site.phone}
          </a>
        </div>
      </section>
    </Layout>
  );
}
