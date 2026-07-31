import { useParams } from "@solidjs/router";
import { Show } from "solid-js";
import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import Gallery from "~/components/Gallery";
import NavLink from "~/components/NavLink";
import posts from "~/data/posts.json";
import styles from "./post.module.css";

export default function PostPage() {
  const params = useParams();
  const post = () => posts.find((p) => p.slug === params.slug);

  return (
    <Show when={post()} fallback={<Layout><div class="container section"><h1>Nie znaleziono strony</h1></div></Layout>}>
      {(p) => (
        <Layout>
          <SeoHead
            title={p().title}
            canonical={`/realizacje/${p().slug}`}
            description={p().excerpt}
            ogImage={p().thumbnail}
            ogType="article"
            datePublished={`${p().date}T00:00:00+00:00`}
            dateModified={`${p().date}T00:00:00+00:00`}
            breadcrumbs={[
              { name: "Strona Główna", href: "/" },
              { name: "Realizacje", href: "/realizacje" },
              { name: p().title },
            ]}
          />

          <PageHeader
            title={p().title}
            breadcrumbs={[
              { label: "Strona Główna", href: "/" },
              { label: "Realizacje", href: "/realizacje" },
              { label: p().title },
            ]}
          />

          <section class="section">
            <div class="container">
              <div innerHTML={p().description} />

              <div class={styles.workDetails}>
                <h2>Szczegóły przeprowadzonych prac</h2>
                <p>
                  <strong>Wykonawca:</strong> {p().executor}<br />
                  <strong>Data:</strong> {p().date}<br />
                  <strong>Czas trwania prac:</strong> {p().duration}
                  <Show when={p().area}>
                    <br /><strong>Powierzchnia pod tynkowanie:</strong> {p().area}
                  </Show>
                </p>

                <h2>Lokalizacja</h2>
                <p><strong>Lokalizacja – </strong> {p().location}</p>
              </div>
            </div>
          </section>

          <section class="section">
            <div class="container">
              <Gallery images={p().gallery} altPrefix={p().title} />
            </div>
          </section>

          <section class="section">
            <div class="container text-center">
              <p>Dowiedz się więcej o naszej metodzie — <NavLink href="/tynki-ze-szlichta-pod-malowanie">tynki maszynowe gipsowe ze szlichtą wygładzającą pod malowanie</NavLink>.</p>
              <p>Oferujemy Tynki Gipsowe z Gładziolitem Wygładzającym pod Malowanie. Nie potrzebujesz dodatkowej warstwy gładzi! <a class="btn btn-primary btn-sm" href={`tel:535157036`}>Bezpłatna wycena</a></p>
            </div>
          </section>
        </Layout>
      )}
    </Show>
  );
}
