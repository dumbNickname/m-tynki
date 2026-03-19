import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import styles from "./polityka-prywatnosci.module.css";

export default function PolitykaPrywatnosci() {
  return (
    <Layout>
      <SeoHead
        title="Polityka prywatności"
        canonical="/polityka-prywatnosci"
        description="Polityka prywatności serwisu M-TYNK Wrocław. Informacje o plikach cookies, logach serwera i udostępnianiu danych."
        dateModified="2023-08-25T13:09:32+00:00"
        breadcrumbs={[
          { name: "HOME", href: "/" },
          { name: "Polityka prywatności" },
        ]}
      />

      <PageHeader
        title="Polityka prywatności"
        breadcrumbs={[{ label: "HOME", href: "/" }, { label: "Polityka prywatności" }]}
      />

      <section class="section">
        <div class={`container ${styles.contentText}`}>
          <p><strong>Informacje ogólne.</strong><br />
          1. Operatorem Serwisu jest Tynki gipsowe z gładziolitem pod malowanie – M – Tynk Obornicka 77D/4A, 51-114 Wrocław, zwana dalej ADMINISTRATOREM.<br />
          2. Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:<br />
          a. Poprzez dobrowolnie wprowadzone w formularzach informacje.<br />
          b. Poprzez zapisywanie w urządzeniach końcowych pliki cookie (tzw. „ciasteczka").<br />
          c. Poprzez gromadzenie logów serwera www</p>

          <p><strong>Informacja o plikach cookies.</strong><br />
          1. Serwis korzysta z plików cookies.<br />
          2. Pliki cookies (tzw. „ciasteczka") stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.<br />
          3. Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest Operator Serwisu.<br />
          4. Pliki cookies wykorzystywane są w następujących celach:<br />
          a. tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;<br />
          b. utrzymanie sesji Użytkownika Serwisu (po zalogowaniu), dzięki której Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;<br />
          c. określania profilu użytkownika w celu wyświetlania mu dopasowanych materiałów w sieciach reklamowych, w szczególności sieci Google.<br />
          5. W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne" (session cookies) oraz „stałe" (persistent cookies). Cookies „sesyjne" są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe" pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.<br />
          6. Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.<br />
          7. Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.<br />
          8. Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu i wykorzystywane mogą być również przez współpracujących z operatorem Serwisu reklamodawców oraz partnerów.<br />
          9. Zalecamy przeczytanie polityki ochrony prywatności tych firm, aby poznać zasady korzystania z plików cookies wykorzystywane w statystykach: Polityka ochrony prywatności Google Analytics<br />
          10. Pliki cookies mogą być wykorzystane przez sieci reklamowe, w szczególności sieć Google, do wyświetlenia reklam dopasowanych do sposobu, w jaki użytkownik korzysta z Serwisu. W tym celu mogą zachować informację o ścieżce nawigacji użytkownika lub czasie pozostawania na danej stronie.</p>

          <p><strong>Logi serwera.</strong><br />
          1. Informacje o niektórych zachowaniach użytkowników podlegają logowaniu w warstwie serwerowej. Dane te są wykorzystywane wyłącznie w celu administrowania serwisem oraz w celu zapewnienia jak najbardziej sprawnej obsługi świadczonych usług hostingowych.<br />
          2. Przeglądane zasoby identyfikowane są poprzez adresy URL. Ponadto zapisowi mogą podlegać:<br />
          a. czas nadejścia zapytania,<br />
          b. czas wysłania odpowiedzi,<br />
          c. nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,<br />
          d. informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,<br />
          e. adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik,<br />
          f. informacje o przeglądarce użytkownika,<br />
          g. Informacje o adresie IP.<br />
          3. Dane powyższe nie są kojarzone z konkretnymi osobami przeglądającymi strony.<br />
          4. Dane powyższe są wykorzystywane jedynie dla celów administrowania serwerem.</p>

          <p><strong>Udostępnienie danych.</strong><br />
          1. Dane podlegają udostępnieniu podmiotom zewnętrznym wyłącznie w granicach prawnie dozwolonych.<br />
          2. Dane umożliwiające identyfikację osoby fizycznej są udostępniane wyłączenie za zgodą tej osoby.<br />
          3. Operator może mieć obowiązek udzielania informacji zebranych przez Serwis upoważnionym organom na podstawie zgodnych z prawem żądań w zakresie wynikającym z żądania.</p>

          <p><strong>Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</strong><br />
          1. Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www<br />
          2. W celu zarządzania ustawieniami cookies wybierz z listy poniżej przeglądarkę internetową/ system i postępuj zgodnie z instrukcjami: Internet Explorer, Chrome, Safari, Firefox, Opera, Android, Safari (iOS), Windows Phone, Blackberry</p>
        </div>
      </section>
    </Layout>
  );
}
