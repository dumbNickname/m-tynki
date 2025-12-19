import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";

export default function PolitykaPrywatnosciPage() {
  return (
    <Layout
      title="Polityka Prywatności - M-TYNK Wrocław"
      description="Polityka prywatności serwisu wroclawtynki.pl - informacje o przetwarzaniu danych osobowych."
      canonical="https://wroclawtynki.pl/polityka-prywatnosci"
    >
      <PageHeader
        title="Polityka Prywatności"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "Polityka prywatności" }
        ]}
      />

      <section class="py-16 lg:py-24">
        <div class="container-custom max-w-4xl">
          <div class="prose prose-lg max-w-none">
            <h2 class="text-2xl font-heading font-bold mb-4">1. Informacje ogólne</h2>
            <p class="text-secondary-light mb-6">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług oferowanych przez M-TYNK za pośrednictwem serwisu wroclawtynki.pl.
            </p>

            <h2 class="text-2xl font-heading font-bold mb-4">2. Administrator danych</h2>
            <p class="text-secondary-light mb-6">
              Administratorem danych osobowych jest M-TYNK z siedzibą we Wrocławiu.
            </p>

            <h2 class="text-2xl font-heading font-bold mb-4">3. Rodzaj przetwarzanych danych</h2>
            <p class="text-secondary-light mb-4">
              Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one przez użytkownika przekazane.
            </p>
            <p class="text-secondary-light mb-6">
              Serwis może zapisywać informacje o parametrach połączenia (oznaczenie czasu, adres IP).
            </p>

            <h2 class="text-2xl font-heading font-bold mb-4">4. Cel przetwarzania danych</h2>
            <p class="text-secondary-light mb-4">
              Dane osobowe są przetwarzane w celu:
            </p>
            <ul class="list-disc list-inside space-y-2 text-secondary-light mb-6 ml-4">
              <li>Realizacji usług świadczonych drogą elektroniczną</li>
              <li>Komunikacji z użytkownikami</li>
              <li>Odpowiedzi na zapytania</li>
              <li>Realizacji umów</li>
            </ul>

            <h2 class="text-2xl font-heading font-bold mb-4">5. Prawa użytkownika</h2>
            <p class="text-secondary-light mb-4">
              Użytkownik ma prawo do:
            </p>
            <ul class="list-disc list-inside space-y-2 text-secondary-light mb-6 ml-4">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
            </ul>

            <h2 class="text-2xl font-heading font-bold mb-4">6. Cookies</h2>
            <p class="text-secondary-light mb-6">
              Serwis wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania strony oraz w celach statystycznych. Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce.
            </p>

            <h2 class="text-2xl font-heading font-bold mb-4">7. Kontakt</h2>
            <p class="text-secondary-light mb-4">
              W sprawach dotyczących przetwarzania danych osobowych prosimy o kontakt:
            </p>
            <p class="text-secondary-light">
              Telefon: <a href="tel:+48535157036" class="text-primary hover:text-primary-hover">+48 535 157 036</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
