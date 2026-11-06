import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import Gallery from "~/components/Gallery";
import galleryImages from "~/data/gallery.json";
import { galleryAlts } from "~/utils/images";

export default function Galeria() {
  return (
    <Layout>
      <SeoHead
        title="Galeria zdjęć z naszych budów"
        canonical="/galeria"
        description="Zdjęcia ścian i sufitów z budów, na których pracowaliśmy — tynk wykończony szlichtą, w stanie gotowym pod malowanie."
        dateModified="2026-11-06T08:00:00+00:00"
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
          <p>Poniżej przedstawiamy galerię zdjęć z naszych realizacji tynków gipsowych ze szlichtą wygładzającą pod malowanie. Każde zdjęcie pokazuje efekt naszej pracy — gładkie ściany przygotowane pod malowanie, w typowych pomieszczeniach bez osobnej warstwy gładzi.</p>
          <Gallery images={galleryImages} altPrefix="Tynki ze szlichtą pod malowanie M-TYNK Wrocław" alts={galleryImages.map((src) => galleryAlts[src])} />
        </div>
      </section>
    </Layout>
  );
}
