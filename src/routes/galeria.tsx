import { For } from "solid-js";
import Layout from "~/components/Layout";
import PageHeader from "~/components/PageHeader";

export default function GaleriaPage() {
  const images = [
    { src: "/images/gallery/img-20230904-wa0001.jpg", alt: "Realizacja tynków - zdjęcie 1" },
    { src: "/images/gallery/img-20230904-wa0002.jpg", alt: "Realizacja tynków - zdjęcie 2" },
    { src: "/images/gallery/img-20230904-wa0003.jpg", alt: "Realizacja tynków - zdjęcie 3" },
    { src: "/images/gallery/img-20230904-wa0004.jpg", alt: "Realizacja tynków - zdjęcie 4" },
    { src: "/images/gallery/img-20230904-wa0005.jpg", alt: "Realizacja tynków - zdjęcie 5" },
    { src: "/images/gallery/img-20230904-wa0006.jpg", alt: "Realizacja tynków - zdjęcie 6" },
    { src: "/images/gallery/img-20230904-wa0007.jpg", alt: "Realizacja tynków - zdjęcie 7" },
    { src: "/images/gallery/img-20230904-wa0008.jpg", alt: "Realizacja tynków - zdjęcie 8" },
    { src: "/images/gallery/img-20230904-wa0009.jpg", alt: "Realizacja tynków - zdjęcie 9" },
    { src: "/images/gallery/img-20230904-wa0010.jpg", alt: "Realizacja tynków - zdjęcie 10" },
    { src: "/images/gallery/img-20230904-wa0011.jpg", alt: "Realizacja tynków - zdjęcie 11" },
    { src: "/images/gallery/img-20230904-wa0012.jpg", alt: "Realizacja tynków - zdjęcie 12" },
    { src: "/images/gallery/img-20230904-wa0013.jpg", alt: "Realizacja tynków - zdjęcie 13" },
    { src: "/images/gallery/img-20230904-wa0014.jpg", alt: "Realizacja tynków - zdjęcie 14" },
    { src: "/images/gallery/img-20230904-wa0015.jpg", alt: "Realizacja tynków - zdjęcie 15" },
    { src: "/images/gallery/img-20230904-wa0016.jpg", alt: "Realizacja tynków - zdjęcie 16" },
    { src: "/images/gallery/img-20230904-wa0017.jpg", alt: "Realizacja tynków - zdjęcie 17" },
    { src: "/images/gallery/img-20230904-wa0018.jpg", alt: "Realizacja tynków - zdjęcie 18" },
    { src: "/images/gallery/img-20230904-wa0019.jpg", alt: "Realizacja tynków - zdjęcie 19" },
    { src: "/images/gallery/img-20230904-wa0020.jpg", alt: "Realizacja tynków - zdjęcie 20" },
  ];

  return (
    <Layout
      title="Galeria - Tynki ze Szlichtą pod Malowanie - M-TYNK Wrocław"
      description="Zobacz galerię naszych realizacji. Profesjonalne tynki gipsowe ze szlichtą gładziolitu - zdjęcia wykonanych prac w okolicach Wrocławia."
      canonical="https://wroclawtynki.pl/galeria"
    >
      <PageHeader
        title="GALERIA"
        breadcrumbs={[
          { label: "HOME", href: "/" },
          { label: "Galeria" }
        ]}
      />

      <section class="py-16 lg:py-24">
        <div class="container-custom">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <For each={images}>
              {(image) => (
                <a
                  href={image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <svg class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </a>
              )}
            </For>
          </div>
        </div>
      </section>
    </Layout>
  );
}
