import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import Gallery from "~/components/Gallery";
import galleryImages from "~/data/gallery.json";

export default function Galeria() {
  return (
    <Layout>
      <SeoHead
        title="Galeria zdjęć z naszych budów"
        canonical="/galeria"
        description="Zdjęcia ścian i sufitów z budów, na których pracowaliśmy — tynk wykończony szlichtą, w stanie gotowym pod malowanie."
        dateModified="2023-09-04T13:54:30+00:00"
        breadcrumbs={[
          { name: "Strona Główna", href: "/" },
          { name: "Galeria" },
        ]}
      />

      <PageHeader
        title="Galeria"
        breadcrumbs={[{ label: "Strona Główna", href: "/" }, { label: "Galeria" }]}
      />

      <section class="section">
        <div class="container">
          <p>Poniżej przedstawiamy galerię zdjęć z naszych realizacji tynków gipsowych ze szlichtą wygładzającą pod malowanie. Każde zdjęcie pokazuje efekt naszej pracy — idealnie gładkie ściany gotowe do malowania, bez konieczności nakładania dodatkowej gładzi.</p>
          <Gallery images={galleryImages} altPrefix="Tynki ze szlichtą pod malowanie M-TYNK Wrocław" />
        </div>
      </section>
    </Layout>
  );
}
