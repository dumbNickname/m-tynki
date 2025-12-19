import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";

export default function RealizacjePage() {
  return (
    <Layout
      title="Realizacje - M-TYNK Wrocław | Nasze Projekty"
      description="Zobacz nasze realizacje tynków gipsowych ze szlichtą gładziolitu. Profesjonalne wykonanie we Wrocławiu i okolicach."
      canonical="https://wroclawtynki.pl/realizacje"
    >
      <PageHeader
        title="Realizacje"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "Realizacje" }
        ]}
      />

      <section class="py-16 lg:py-24">
        <div class="container-custom">
          <div class="text-center max-w-3xl mx-auto">
            <h2 class="text-3xl font-heading font-bold mb-6">Nasze Projekty</h2>
            <p class="text-secondary-light text-lg leading-relaxed mb-8">
              Zapraszamy do zapoznania się z naszymi realizacjami. Każdy projekt wykonujemy z najwyższą starannością i dbałością o detale.
            </p>
            <a href="/galeria" class="btn-primary">
              Zobacz galerię zdjęć
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
