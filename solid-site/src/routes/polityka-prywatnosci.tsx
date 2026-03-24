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
          2. Serwis jest statyczną stroną internetową i nie posiada formularzy rejestracyjnych, logowania ani panelu użytkownika.<br />
          3. Administrator nie zbiera, nie przetwarza ani nie przekazuje danych osobowych Użytkowników za pośrednictwem Serwisu.</p>

          <p><strong>Informacja o plikach cookies i localStorage.</strong><br />
          1. Serwis nie korzysta z plików cookies.<br />
          2. Serwis wykorzystuje mechanizm localStorage przeglądarki wyłącznie w celu zapamiętania, że Użytkownik zaakceptował komunikat o plikach cookie oraz w celu zapamiętania wybranego motywu kolorystycznego (jasny/ciemny). Są to dane techniczne przechowywane lokalnie w przeglądarce Użytkownika, które nie są przesyłane na serwer.<br />
          3. Serwis nie stosuje żadnych narzędzi analitycznych, reklamowych ani śledzących (np. Google Analytics, Facebook Pixel itp.).<br />
          4. Serwis nie profiluje Użytkowników ani nie wyświetla reklam dopasowanych do ich zachowań.</p>

          <p><strong>Logi serwera.</strong><br />
          1. Informacje o niektórych zachowaniach użytkowników podlegają logowaniu w warstwie serwerowej. Dane te są wykorzystywane wyłącznie w celu administrowania serwisem oraz w celu zapewnienia jak najbardziej sprawnej obsługi świadczonych usług hostingowych.<br />
          2. Przeglądane zasoby identyfikowane są poprzez adresy URL. Ponadto zapisowi mogą podlegać:<br />
          a. czas nadejścia zapytania,<br />
          b. czas wysłania odpowiedzi,<br />
          c. nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,<br />
          d. informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,<br />
          e. adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik,<br />
          f. informacje o przeglądarce użytkownika,<br />
          g. informacje o adresie IP.<br />
          3. Dane powyższe nie są kojarzone z konkretnymi osobami przeglądającymi strony.<br />
          4. Dane powyższe są wykorzystywane jedynie dla celów administrowania serwerem.</p>

          <p><strong>Udostępnienie danych.</strong><br />
          1. Dane podlegają udostępnieniu podmiotom zewnętrznym wyłącznie w granicach prawnie dozwolonych.<br />
          2. Operator może mieć obowiązek udzielania informacji zebranych przez Serwis upoważnionym organom na podstawie zgodnych z prawem żądań w zakresie wynikającym z żądania.</p>

          <p><strong>Zarządzanie danymi przeglądarki.</strong><br />
          1. Użytkownik może w dowolnym momencie wyczyścić dane localStorage swojej przeglądarki, co spowoduje ponowne wyświetlenie komunikatu o plikach cookie oraz zresetowanie preferencji motywu kolorystycznego przy następnej wizycie na stronie.<br />
          2. Szczegółowe informacje na temat zarządzania danymi przeglądarki zawiera pomoc lub dokumentacja danej przeglądarki internetowej.</p>
        </div>
      </section>
    </Layout>
  );
}
