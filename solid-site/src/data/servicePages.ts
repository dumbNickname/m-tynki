export interface ServiceSection {
  heading: string;
  paragraphs: string[];
}

export interface ServicePage {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  points: string[];
  sections: ServiceSection[];
  faq: { question: string; answer: string }[];
  cardTitle: string;
  cardSummary: string;
}

export const servicePages: ServicePage[] = [
  {
    slug: "tynki-maszynowe-wroclaw",
    title: "Tynki maszynowe Wrocław",
    h1: "Tynki maszynowe Wrocław",
    description: "Tynki maszynowe Wrocław ★ tynki gipsowe ze szlichtą pod malowanie. Firma M-TYNK od 1999 roku — bezpłatna wycena. ☎ 535 157 036.",
    cardTitle: "Tynki maszynowe",
    cardSummary: "Tynki gipsowe nakładane agregatem — szybko, równo i z ręcznym wykończeniem szlichtą pod malowanie.",
    intro: "Wykonujemy tynki maszynowe we Wrocławiu i okolicach dla domów jednorodzinnych, mieszkań oraz obiektów użytkowych. Specjalizujemy się w tynkach gipsowych wykańczanych szlichtą wygładzającą, dzięki czemu ściany po wyschnięciu są przygotowane bezpośrednio pod malowanie.",
    points: [
      "tynki maszynowe gipsowe z wykończeniem pod malowanie",
      "prace w domach jednorodzinnych, mieszkaniach i lokalach usługowych",
      "zabezpieczenie stolarki, instalacji i elementów narażonych na zabrudzenie",
      "obsługa Wrocławia oraz miejscowości w powiecie wrocławskim",
    ],
    sections: [
      {
        heading: "Na czym polega tynkowanie maszynowe?",
        paragraphs: [
          "Tynk maszynowy nakładany jest na ścianę agregatem tynkarskim, który w sposób ciągły miesza suchą zaprawę z wodą i podaje gotową masę pod ciśnieniem prosto na powierzchnię. Dzięki temu zaprawa ma zawsze tę samą, powtarzalną konsystencję, a tynk dokładnie wypełnia podłoże i mocno się z nim wiąże. Maszyna zastępuje najbardziej pracochłonny etap ręcznego narzucania zaprawy, więc duże powierzchnie da się otynkować w znacznie krótszym czasie.",
          "Po nałożeniu warstwy właściwej ściągamy tynk łatą do równego, a następnie wygładzamy go ręcznie — u nas dodatkowo szlichtą gładziolitu. To połączenie wydajności maszyny z ręcznym, dokładnym wykończeniem daje równą ścianę gotową pod malowanie.",
        ],
      },
      {
        heading: "Tynk maszynowy a tynk ręczny — co wybrać?",
        paragraphs: [
          "Przy większych metrażach tynk maszynowy jest zwykle szybszy i bardziej jednolity niż tynk kładziony wyłącznie ręcznie, bo cała ściana powstaje z tej samej, równo wymieszanej zaprawy. Maszynowe podawanie ogranicza też różnice wynikające ze zmęczenia czy tempa pracy. Tynk ręczny pozostaje rozsądnym rozwiązaniem przy małych powierzchniach, trudno dostępnych miejscach i drobnych poprawkach.",
          "W praktyce na jednej budowie często łączymy obie metody: większość ścian i sufitów wykonujemy maszynowo, a detale, naroża i miejsca przy instalacjach dopracowujemy ręcznie. O doborze technologii decydujemy po obejrzeniu zakresu prac i stanu podłoża.",
        ],
      },
      {
        heading: "Tynki maszynowe we Wrocławiu i okolicach",
        paragraphs: [
          "Pracujemy głównie we Wrocławiu i powiecie wrocławskim — w nowych domach jednorodzinnych, mieszkaniach oraz lokalach usługowych. Realizowaliśmy tynki między innymi w Sobótce, Domasławiu, Trzebnicy, Dobrzykowicach i Lutyni, a zakres dojazdu ustalamy indywidualnie po poznaniu lokalizacji inwestycji.",
          "Przed rozpoczęciem prac zabezpieczamy okna, drzwi, instalacje i posadzki, a po zakończeniu zostawiamy ściany przygotowane do dalszego wykończenia. Wycena tynków maszynowych jest bezpłatna i przygotowywana na podstawie powierzchni, stanu budowy i lokalizacji.",
        ],
      },
      {
        heading: "Jak przebiega tynkowanie maszynowe krok po kroku?",
        paragraphs: [
          "Realizację zaczynamy od oceny podłoża i zabezpieczenia budowy: okleiamy okna i drzwi, osłaniamy posadzki oraz instalacje. Następnie ustawiamy narożniki i listwy, przygotowujemy agregat i dobieramy konsystencję zaprawy do konkretnego pomieszczenia. Warstwę właściwą nakładamy maszynowo, ściągamy ją łatą h do równego, a po wstępnym związaniu przystępujemy do wygładzania.",
          "Kluczowy dla efektu końcowego jest etap wygładzania. Każdy narzut przecieramy trzema rodzajami łat gładzących, uzupełniamy drobne ubytki, a na końcu nakładamy szlichtę gładziolitu. Dzięki temu ściana po wyschnięciu jest gładka i równa — bez fal, zacieków i widocznych łączeń — i nadaje się bezpośrednio pod malowanie, bez osobnej warstwy gładzi.",
          "Cały proces prowadzimy tak, aby ograniczyć liczbę poprawek po naszym wyjściu z budowy. Zwracamy uwagę na naroża, ościeża okien i miejsca przy instalacjach, bo to tam najczęściej widać różnicę między tynkiem wykonanym pospiesznie a dopracowanym ręcznie.",
        ],
      },
    ],
    faq: [
      {
        question: "Czy wykonujecie tynki maszynowe tylko we Wrocławiu?",
        answer: "Najczęściej pracujemy we Wrocławiu i najbliższych okolicach, ale zakres dojazdu ustalamy indywidualnie po poznaniu lokalizacji inwestycji.",
      },
      {
        question: "Czy tynki maszynowe są gotowe pod malowanie?",
        answer: "W naszej metodzie tynk gipsowy jest wykańczany szlichtą wygładzającą, dlatego po wyschnięciu ściany są przygotowane bezpośrednio pod malowanie bez osobnej warstwy gładzi.",
      },
      {
        question: "Ile schnie tynk maszynowy gipsowy?",
        answer: "Czas schnięcia zależy od grubości warstwy, temperatury i wentylacji pomieszczeń. Orientacyjnie przyjmuje się około jednego dnia na każdy milimetr grubości tynku, a do malowania przystępuje się dopiero po pełnym wyschnięciu ścian.",
      },
      {
        question: "Jaką powierzchnię można otynkować maszynowo w ciągu dnia?",
        answer: "Wydajność zależy od ekipy, dostępu do ścian, stanu podłoża i rodzaju pomieszczeń, dlatego realny postęp prac szacujemy dla konkretnej budowy podczas wyceny.",
      },
      {
        question: "Czy trzeba gruntować ściany przed tynkiem maszynowym?",
        answer: "Przygotowanie podłoża dobieramy do rodzaju ściany — chłonne i nierównomiernie nasiąkliwe podłoża zwykle wymagają zagruntowania, aby tynk dobrze się związał i równo wysychał.",
      },
      {
        question: "Jak zamówić wycenę tynków maszynowych?",
        answer: "Najprościej zadzwonić i podać lokalizację, przybliżoną powierzchnię oraz etap budowy. Wycena jest bezpłatna i przygotowywana indywidualnie.",
      },
    ],
  },
  {
    slug: "tynki-gipsowe-wroclaw",
    title: "Tynki gipsowe Wrocław",
    h1: "Tynki gipsowe Wrocław",
    description: "Tynki gipsowe Wrocław ★ ze szlichtą wygładzającą pod malowanie. Równe ściany, firma M-TYNK od 1999 — bezpłatna wycena. ☎ 535 157 036.",
    cardTitle: "Tynki gipsowe",
    cardSummary: "Gładkie, równe ściany i sufity do wnętrz mieszkalnych — wykończone szlichtą, gotowe pod malowanie.",
    intro: "Tynki gipsowe to dobre rozwiązanie do wnętrz, w których liczy się równa, estetyczna i gładka powierzchnia. M-TYNK wykonuje tynki gipsowe we Wrocławiu w technologii maszynowej, a następnie wykańcza je szlichtą wygładzającą.",
    points: [
      "gładka powierzchnia ścian i sufitów",
      "wykończenie ograniczające potrzebę dodatkowej gładzi",
      "doradztwo przy przygotowaniu podłoża i wyborze materiału",
      "doświadczenie w tynkowaniu od 1999 roku",
    ],
    sections: [
      {
        heading: "Dlaczego tynki gipsowe?",
        paragraphs: [
          "Tynk gipsowy daje gładką i równą powierzchnię ścian oraz sufitów, dobrze sprawdzającą się we wnętrzach mieszkalnych. Gips jest materiałem paroprzepuszczalnym, który pomaga regulować wilgotność powietrza w pomieszczeniach, a jednocześnie pozwala uzyskać estetyczne wykończenie bez grubych warstw dodatkowych mas.",
          "W naszym wykonaniu tynk gipsowy nakładamy maszynowo, a potem wygładzamy szlichtą gładziolitu. Taka ściana po wyschnięciu jest przygotowana bezpośrednio pod malowanie, więc w wielu przypadkach nie trzeba nakładać osobnej, kosztownej warstwy gładzi.",
        ],
      },
      {
        heading: "Tynk gipsowy a tynk cementowo-wapienny",
        paragraphs: [
          "Tynk gipsowy najlepiej sprawdza się w suchych pomieszczeniach mieszkalnych — pokojach, sypialniach, korytarzach — gdzie zależy nam na gładkiej powierzchni i komforcie wykończenia. Tynk cementowo-wapienny jest bardziej odporny na wilgoć i mechaniczne uszkodzenia, dlatego częściej stosuje się go w pomieszczeniach narażonych na zawilgocenie oraz na niektórych powierzchniach technicznych.",
          "Wybór technologii zależy od przeznaczenia pomieszczenia, oczekiwanego efektu i budżetu. Podczas wyceny doradzamy, które rozwiązanie będzie lepsze dla konkretnego wnętrza, i wskazujemy, gdzie tynk gipsowy ze szlichtą da najlepszy stosunek jakości do ceny.",
        ],
      },
      {
        heading: "Tynki gipsowe we Wrocławiu",
        paragraphs: [
          "Tynki gipsowe wykonujemy we Wrocławiu i okolicach — w domach jednorodzinnych, mieszkaniach oraz lokalach. Przed rozpoczęciem prac oceniamy stan podłoża i dobieramy sposób jego przygotowania, aby tynk dobrze się związał i równomiernie wysychał.",
          "Efektem jest gładka, estetyczna ściana gotowa do malowania. Wycenę tynków gipsowych przygotowujemy bezpłatnie na podstawie powierzchni, stanu budowy i lokalizacji inwestycji.",
        ],
      },
    ],
    faq: [
      {
        question: "Gdzie sprawdzają się tynki gipsowe?",
        answer: "Tynki gipsowe stosuje się głównie wewnątrz budynków: w domach, mieszkaniach, lokalach i obiektach użytkowych, gdzie ważna jest gładka powierzchnia ścian.",
      },
      {
        question: "Czy po tynku gipsowym trzeba nakładać gładź?",
        answer: "Przy standardowym tynku często jest to konieczne. Nasze tynki wykańczamy szlichtą wygładzającą, co pozwala przygotować ścianę bezpośrednio pod malowanie.",
      },
      {
        question: "Czy tynk gipsowy nadaje się do łazienki i kuchni?",
        answer: "W pomieszczeniach okresowo wilgotnych tynk gipsowy bywa stosowany, ale w strefach narażonych na bezpośredni kontakt z wodą oraz w pomieszczeniach mokrych lepiej sprawdzają się tynki bardziej odporne na wilgoć. Dobór rozwiązania ustalamy dla konkretnego wnętrza.",
      },
      {
        question: "Czym różni się tynk gipsowy od gładzi gipsowej?",
        answer: "Tynk gipsowy to warstwa wyrównująca nakładana na surową ścianę, a gładź to cienka warstwa wykończeniowa. Dzięki wykończeniu szlichtą wygładzającą nasz tynk gipsowy w wielu przypadkach pełni obie role i ścianę można malować bez osobnej gładzi.",
      },
      {
        question: "Od czego zależy cena tynków gipsowych?",
        answer: "Cena zależy od powierzchni, stanu podłoża, zakresu zabezpieczeń, lokalizacji i szczegółów inwestycji. Dlatego przygotowujemy indywidualną wycenę.",
      },
    ],
  },
  {
    slug: "firma-tynkarska-wroclaw",
    title: "Firma tynkarska Wrocław",
    h1: "Firma tynkarska Wrocław",
    description: "Firma tynkarska Wrocław M-TYNK ★ tynki maszynowe i gipsowe ze szlichtą pod malowanie. Od 1999 roku — bezpłatna wycena. ☎ 535 157 036.",
    cardTitle: "Firma tynkarska M-TYNK",
    cardSummary: "Doświadczona ekipa tynkarska z Wrocławia działająca od 1999 roku — od tynku aż po malowanie.",
    intro: "M-TYNK to firma tynkarska z Wrocławia działająca od 1999 roku. Pomagamy inwestorom uzyskać równe, estetyczne ściany przygotowane pod malowanie, dbając o dokładność, zabezpieczenie budowy i jasną komunikację przed rozpoczęciem prac.",
    points: [
      "specjalizacja w tynkach gipsowych ze szlichtą wygładzającą",
      "realizacje w nowych domach, mieszkaniach i obiektach usługowych",
      "możliwość obejrzenia aktualnej budowy po wcześniejszym kontakcie",
      "bezpłatna wycena i doradztwo technologiczne",
    ],
    sections: [
      {
        heading: "Firma tynkarska M-TYNK — od 1999 roku",
        paragraphs: [
          "M-TYNK to firma tynkarska działająca we Wrocławiu nieprzerwanie od 1999 roku. Przez ten czas wykonaliśmy tynki w wielu domach jednorodzinnych, mieszkaniach i lokalach usługowych — między innymi w Sobótce, Domasławiu, Trzebnicy, Dobrzykowicach i Lutyni. Doświadczenie zebrane na różnych budowach pozwala nam dobrać technologię do konkretnego podłoża i oczekiwań inwestora.",
          "Naszą specjalnością są tynki gipsowe ze szlichtą wygładzającą pod malowanie. Stawiamy na dokładne wykończenie i powtarzalną jakość, a nie na maksymalne tempo kosztem efektu — tak, aby ściany po wyschnięciu były naprawdę gotowe do malowania.",
        ],
      },
      {
        heading: "Jak pracujemy?",
        paragraphs: [
          "Pracę zaczynamy od obejrzenia zakresu robót i zabezpieczenia budowy — okien, drzwi, instalacji i posadzek. Następnie wykonujemy właściwe tynkowanie, najczęściej maszynowo, i wygładzamy powierzchnię szlichtą gładziolitu. Przed rozpoczęciem prac ustalamy zakres, technologię i warunki, aby uniknąć nieporozumień w trakcie realizacji.",
          "Zależy nam na jasnej komunikacji: tłumaczymy, dlaczego proponujemy dane rozwiązanie i czego inwestor może się spodziewać na kolejnych etapach. Na stronie publikujemy realizacje, a po kontakcie telefonicznym możemy też umówić wizytę na aktualnej budowie, jeśli jest taka możliwość.",
        ],
      },
      {
        heading: "Zakres usług i obszar działania",
        paragraphs: [
          "Oprócz tynków gipsowych ze szlichtą oferujemy także tynki maszynowe, gładź natryskową, zabudowy z płyt karton-gipsowych oraz natryskowe malowanie ścian. Dzięki temu na jednej budowie możemy zająć się wykończeniem ścian od tynku aż po malowanie.",
          "Najczęściej pracujemy w nowych domach jednorodzinnych i mieszkaniach, ale realizujemy też tynki w lokalach usługowych i mniejszych obiektach. Zakres prac dopasowujemy do etapu budowy — od surowego stanu deweloperskiego po pojedyncze pomieszczenia wymagające wykończenia.",
          "Działamy we Wrocławiu i powiecie wrocławskim, a w uzasadnionych przypadkach również w dalszych okolicach. Wycena i doradztwo technologiczne są bezpłatne — wystarczy kontakt telefoniczny i kilka informacji o inwestycji.",
        ],
      },
    ],
    faq: [
      {
        question: "Jak wybrać firmę tynkarską we Wrocławiu?",
        answer: "Warto sprawdzić realizacje, opinie klientów, specjalizację wykonawcy oraz to, czy firma jasno opisuje technologię prac i sposób zabezpieczenia budowy.",
      },
      {
        question: "Czy można zobaczyć wcześniejsze realizacje M-TYNK?",
        answer: "Tak. Na stronie publikujemy realizacje, a po kontakcie telefonicznym możemy też umówić wizytę na aktualnej budowie, jeśli jest taka możliwość.",
      },
      {
        question: "Od kiedy działa firma M-TYNK?",
        answer: "M-TYNK działa we Wrocławiu od 1999 roku i przez ten czas zrealizował tynki w wielu domach, mieszkaniach i lokalach w mieście oraz okolicznych miejscowościach.",
      },
      {
        question: "Czy firma M-TYNK wykonuje także gładzie i malowanie?",
        answer: "W ofercie mamy między innymi tynki gipsowe ze szlichtą, gładź natryskową, zabudowy G-K oraz natryskowe malowanie ścian.",
      },
      {
        question: "Jak umówić bezpłatną wycenę?",
        answer: "Wystarczy zadzwonić i podać lokalizację inwestycji, przybliżoną powierzchnię oraz etap budowy. Na tej podstawie przygotowujemy indywidualną, bezpłatną wycenę.",
      },
    ],
  },
  {
    slug: "tynkowanie-wroclaw",
    title: "Tynkowanie Wrocław",
    h1: "Tynkowanie Wrocław",
    description: "Tynkowanie Wrocław ★ tynki gipsowe maszynowe ze szlichtą wygładzającą pod malowanie. Firma M-TYNK od 1999 — bezpłatna wycena. ☎ 535 157 036.",
    cardTitle: "Tynkowanie ścian",
    cardSummary: "Kompleksowe tynkowanie ścian i sufitów we Wrocławiu — od surowego muru po powierzchnię gotową pod malowanie.",
    intro:
      "Zajmujemy się tynkowaniem ścian i sufitów we Wrocławiu i okolicach. Tynkujemy nowe domy jednorodzinne, mieszkania i lokale usługowe, a naszą specjalnością jest tynkowanie ze szlichtą wygładzającą, dzięki której ściany po wyschnięciu są przygotowane bezpośrednio pod malowanie.",
    points: [
      "tynkowanie ścian i sufitów w domach, mieszkaniach i lokalach",
      "tynki gipsowe wykańczane szlichtą wygładzającą pod malowanie",
      "zabezpieczenie okien, drzwi, instalacji i posadzek",
      "obsługa Wrocławia oraz miejscowości w powiecie wrocławskim",
    ],
    sections: [
      {
        heading: "Na czym polega tynkowanie ścian?",
        paragraphs: [
          "Tynkowanie to nałożenie na surową ścianę warstwy zaprawy, która wyrównuje podłoże, kryje nierówności muru i tworzy powierzchnię gotową do dalszego wykończenia. Dobrze wykonany tynk decyduje o tym, jak wyglądają ściany po malowaniu — wszelkie fale, pęknięcia czy zacieki najłatwiej wyeliminować właśnie na tym etapie, a nie później grubymi warstwami gładzi czy farby.",
          "W naszych realizacjach tynkujemy najczęściej maszynowo, agregatem tynkarskim, a następnie wygładzamy powierzchnię ręcznie. Na koniec nakładamy szlichtę gładziolitu, dzięki której ściana jest gładka i równa. Taka metoda łączy wydajność pracy maszynowej z dokładnym, ręcznym wykończeniem detali.",
        ],
      },
      {
        heading: "Tynkowanie ze szlichtą — ściany gotowe pod malowanie",
        paragraphs: [
          "Zamiast standardowego schematu „tynk plus osobna warstwa gładzi” stosujemy tynkowanie wykańczane szlichtą wygładzającą. Po wyschnięciu ściana jest na tyle gładka, że w wielu przypadkach można ją malować bez dodatkowej, kosztownej warstwy gładzi. Ogranicza to liczbę etapów wykończenia i skraca czas oczekiwania na malowanie.",
          "To rozwiązanie sprawdza się szczególnie w domach jednorodzinnych i mieszkaniach, gdzie zależy nam na równych ścianach i estetycznym efekcie. O tym, czy w danym pomieszczeniu wystarczy tynk ze szlichtą, decydujemy po obejrzeniu podłoża i ustaleniu oczekiwań inwestora.",
        ],
      },
      {
        heading: "Tynkowanie we Wrocławiu i powiecie wrocławskim",
        paragraphs: [
          "Tynkujemy głównie we Wrocławiu i okolicznych miejscowościach — realizowaliśmy prace m.in. w Sobótce, Domasławiu, Trzebnicy, Dobrzykowicach i Lutyni. Zakres dojazdu ustalamy indywidualnie, w zależności od lokalizacji i wielkości inwestycji.",
          "Przed rozpoczęciem tynkowania zabezpieczamy budowę, a po zakończeniu prac zostawiamy ściany gotowe do dalszego wykończenia. Wycena tynkowania jest bezpłatna i przygotowywana na podstawie powierzchni, stanu budowy oraz lokalizacji.",
        ],
      },
    ],
    faq: [
      {
        question: "Czym różni się tynkowanie ze szlichtą od zwykłego tynkowania?",
        answer: "Po zwykłym tynkowaniu zwykle trzeba nałożyć osobną warstwę gładzi przed malowaniem. W naszej metodzie tynk wykańczamy szlichtą wygładzającą, dzięki czemu ściana jest gładka i w wielu przypadkach gotowa pod malowanie bez dodatkowej gładzi.",
      },
      {
        question: "Ile trwa tynkowanie domu jednorodzinnego?",
        answer: "Czas zależy od powierzchni, liczby pomieszczeń, stanu podłoża i warunków na budowie. Realny harmonogram szacujemy dla konkretnej inwestycji podczas bezpłatnej wyceny.",
      },
      {
        question: "Kiedy można malować ściany po tynkowaniu?",
        answer: "Dopiero po pełnym wyschnięciu tynku. Czas schnięcia zależy od grubości warstwy, temperatury i wentylacji — orientacyjnie przyjmuje się około jednego dnia na każdy milimetr grubości tynku.",
      },
      {
        question: "Czy zabezpieczacie okna i podłogi przed tynkowaniem?",
        answer: "Tak. Przed rozpoczęciem prac zabezpieczamy okna, drzwi, instalacje i posadzki, aby ograniczyć ryzyko zabrudzeń i uszkodzeń podczas tynkowania.",
      },
      {
        question: "Gdzie wykonujecie tynkowanie?",
        answer: "Pracujemy przede wszystkim we Wrocławiu i powiecie wrocławskim, a zakres dojazdu do dalszych miejscowości ustalamy indywidualnie.",
      },
    ],
  },
  {
    slug: "gladz-natryskowa-wroclaw",
    title: "Gładź natryskowa Wrocław",
    h1: "Gładź natryskowa Wrocław",
    description: "Gładź natryskowa Wrocław ★ szybkie, równe wygładzanie ścian pod malowanie. Firma M-TYNK od 1999 — bezpłatna wycena. ☎ 535 157 036.",
    cardTitle: "Gładź natryskowa",
    cardSummary: "Natryskowe wygładzanie ścian i sufitów — równa powierzchnia pod malowanie, szybciej niż metodą ręczną.",
    intro:
      "Wykonujemy gładź natryskową we Wrocławiu i okolicach. To sprawdzona metoda wygładzania ścian i sufitów, w której masę gładzi nanosi się agregatem, a następnie wygładza ręcznie. Pozwala uzyskać równą powierzchnię gotową pod malowanie, szybciej niż przy tradycyjnym nakładaniu gładzi pacą.",
    points: [
      "natryskowe wygładzanie ścian i sufitów",
      "równa powierzchnia przygotowana pod malowanie",
      "szybsze wykończenie dużych powierzchni niż metodą ręczną",
      "obsługa Wrocławia oraz powiatu wrocławskiego",
    ],
    sections: [
      {
        heading: "Na czym polega gładź natryskowa?",
        paragraphs: [
          "Gładź natryskowa to metoda wykończenia ścian, w której gotową masę nakłada się na powierzchnię za pomocą agregatu, a następnie rozprowadza i wygładza ręcznie. Natrysk pozwala równomiernie pokryć duże powierzchnie w krótkim czasie, a ręczne wygładzenie nadaje im ostateczną gładkość.",
          "Efektem jest równa, gładka ściana lub sufit przygotowany pod malowanie. Metoda natryskowa sprawdza się szczególnie tam, gdzie liczy się tempo prac i powtarzalna jakość na dużym metrażu, na przykład w nowych domach i mieszkaniach na etapie wykończenia.",
        ],
      },
      {
        heading: "Gładź natryskowa a gładź nakładana ręcznie",
        paragraphs: [
          "Przy większych powierzchniach gładź natryskowa jest zwykle szybsza od nakładania ręcznego, a jednocześnie daje bardziej jednolitą warstwę, bo masa jest nanoszona równomiernie. Metoda ręczna pozostaje rozsądnym rozwiązaniem przy małych powierzchniach, poprawkach i detalach, gdzie uruchamianie agregatu nie ma uzasadnienia.",
          "W praktyce często łączymy obie metody: większość ścian i sufitów wygładzamy natryskowo, a naroża, ościeża i miejsca przy instalacjach dopracowujemy ręcznie. O doborze metody decydujemy po obejrzeniu zakresu prac i stanu podłoża.",
        ],
      },
      {
        heading: "Gładź natryskowa we Wrocławiu",
        paragraphs: [
          "Gładź natryskową wykonujemy we Wrocławiu i okolicach, najczęściej jako element wykończenia ścian pod malowanie. Przed rozpoczęciem prac oceniamy stan podłoża i dobieramy sposób jego przygotowania, aby warstwa gładzi dobrze się związała i równomiernie wyschła.",
          "Wycenę gładzi natryskowej przygotowujemy bezpłatnie na podstawie powierzchni, stanu ścian i lokalizacji. Warto pamiętać, że w naszej metodzie tynkowania ze szlichtą wygładzającą wiele ścian jest gotowych pod malowanie bez osobnej warstwy gładzi — podczas wyceny doradzamy, które rozwiązanie będzie korzystniejsze dla konkretnej inwestycji.",
        ],
      },
    ],
    faq: [
      {
        question: "Czym różni się gładź natryskowa od gładzi ręcznej?",
        answer: "Gładź natryskową nanosi się agregatem, a potem wygładza ręcznie, dzięki czemu duże powierzchnie wykańcza się szybciej i bardziej równomiernie. Gładź ręczna lepiej sprawdza się przy małych powierzchniach i poprawkach.",
      },
      {
        question: "Czy po gładzi natryskowej można od razu malować?",
        answer: "Malowanie wykonuje się po pełnym wyschnięciu gładzi i ewentualnym drobnym szlifowaniu. Czas schnięcia zależy od grubości warstwy, temperatury i wentylacji pomieszczeń.",
      },
      {
        question: "Czy zawsze potrzebna jest gładź, jeśli mam tynk ze szlichtą?",
        answer: "Nie zawsze. Nasze tynki gipsowe wykańczane szlichtą wygładzającą w wielu przypadkach są gotowe pod malowanie bez osobnej warstwy gładzi. Podczas wyceny doradzamy, czy w danym pomieszczeniu gładź natryskowa jest potrzebna.",
      },
      {
        question: "Na jakich powierzchniach stosuje się gładź natryskową?",
        answer: "Gładź natryskową stosuje się na ścianach i sufitach we wnętrzach, wszędzie tam, gdzie zależy nam na równej, gładkiej powierzchni przygotowanej pod malowanie.",
      },
      {
        question: "Jak zamówić wycenę gładzi natryskowej?",
        answer: "Wystarczy zadzwonić i podać lokalizację, przybliżoną powierzchnię oraz etap prac. Wycena jest bezpłatna i przygotowywana indywidualnie.",
      },
    ],
  },
  {
    slug: "malowanie-scian-wroclaw",
    title: "Malowanie ścian Wrocław",
    h1: "Malowanie ścian Wrocław",
    description: "Malowanie ścian Wrocław ★ natryskowe malowanie wnętrz na biało i w kolorze. Firma M-TYNK od 1999 — bezpłatna wycena. ☎ 535 157 036.",
    cardTitle: "Malowanie natryskowe ścian",
    cardSummary: "Natryskowe malowanie wnętrz na biało i w kolorze — równe pokrycie, szybciej niż wałkiem.",
    intro:
      "Malujemy ściany i sufity we Wrocławiu i okolicach, najczęściej metodą natryskową. Malowanie natryskowe pozwala uzyskać równe, jednolite pokrycie na dużych powierzchniach, a dzięki temu, że wykonujemy również tynki i gładzie, możemy zająć się wykończeniem wnętrza kompleksowo — od tynku aż po gotową, pomalowaną ścianę.",
    points: [
      "natryskowe malowanie ścian i sufitów na biało i w kolorze",
      "farby akrylowe, lateksowe, winylowe i ceramiczne",
      "malowanie jako uzupełnienie tynków i gładzi w jednej ekipie",
      "obsługa Wrocławia oraz powiatu wrocławskiego",
    ],
    sections: [
      {
        heading: "Na czym polega malowanie natryskowe?",
        paragraphs: [
          "Malowanie natryskowe polega na nanoszeniu farby na ściany i sufity za pomocą agregatu malarskiego zamiast wałka czy pędzla. Farba jest rozpylana równomiernie, dzięki czemu powłoka jest jednolita, bez smug i widocznych łączeń, a duże powierzchnie da się pomalować znacznie szybciej niż metodą tradycyjną.",
          "Przed malowaniem zabezpieczamy powierzchnie, które nie mają być malowane, oraz sprawdzamy stan podłoża. Równe, dobrze przygotowane ściany — na przykład wykończone naszą metodą tynku ze szlichtą — pozwalają uzyskać najlepszy efekt malowania natryskowego.",
        ],
      },
      {
        heading: "Jakich farb używamy?",
        paragraphs: [
          "Do malowania używamy farb akrylowych, lateksowych, winylowych i ceramicznych — dobór zależy od pomieszczenia, oczekiwanej odporności powłoki i efektu, jaki chce uzyskać inwestor. Malujemy zarówno na biało, jak i w kolorze.",
          "Podczas wyceny doradzamy, jaki rodzaj farby sprawdzi się w danym wnętrzu — inne wymagania ma salon czy sypialnia, a inne pomieszczenia bardziej narażone na zabrudzenia i wilgoć. Zwracamy uwagę na to, aby farba dobrze współgrała z rodzajem podłoża i sposobem jego wykończenia.",
        ],
      },
      {
        heading: "Malowanie po tynkach — wykończenie w jednej ekipie",
        paragraphs: [
          "Ponieważ wykonujemy tynki, gładzie i zabudowy G-K, malowanie możemy potraktować jako ostatni etap kompleksowego wykończenia wnętrza. Dzięki temu inwestor nie musi koordynować kilku ekip — tę samą powierzchnię, którą otynkowaliśmy i wygładziliśmy, możemy również pomalować.",
          "Takie podejście ułatwia utrzymanie jakości: znamy stan ścian, wiemy jak zostały przygotowane i jaką farbę na nich zastosować. Malowanie natryskowe wykonujemy we Wrocławiu i okolicach, a wycenę przygotowujemy bezpłatnie na podstawie powierzchni, stanu ścian i lokalizacji.",
        ],
      },
    ],
    faq: [
      {
        question: "Czy malowanie natryskowe jest lepsze od malowania wałkiem?",
        answer: "Przy dużych powierzchniach natrysk jest zwykle szybszy i daje bardziej równomierne pokrycie. Przy małych powierzchniach i detalach malowanie wałkiem lub pędzlem bywa wygodniejsze — metodę dobieramy do konkretnej pracy.",
      },
      {
        question: "Czy malujecie zarówno na biało, jak i w kolorze?",
        answer: "Tak. Malujemy na biało oraz w kolorze, używając farb akrylowych, lateksowych, winylowych i ceramicznych, dobieranych do rodzaju pomieszczenia.",
      },
      {
        question: "Czy trzeba przygotować ściany przed malowaniem?",
        answer: "Tak, dobry efekt malowania zależy od równego i czystego podłoża. Jeśli wcześniej wykonujemy u inwestora tynki lub gładzie, ściany są już przygotowane pod malowanie.",
      },
      {
        question: "Czy malujecie tylko po własnych tynkach?",
        answer: "Nie tylko. Malowanie możemy wykonać zarówno jako uzupełnienie naszych tynków i gładzi, jak i na wcześniej przygotowanych ścianach — po ocenie ich stanu podczas wyceny.",
      },
      {
        question: "Jak zamówić wycenę malowania?",
        answer: "Wystarczy zadzwonić i podać lokalizację, przybliżoną powierzchnię oraz zakres prac. Wycena malowania jest bezpłatna i przygotowywana indywidualnie.",
      },
    ],
  },
];

export const getServicePage = (slug: string) => servicePages.find((page) => page.slug === slug);
