import { useParams } from "@solidjs/router";
import { For, Show } from "solid-js";
import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import Gallery from "~/components/Gallery";
import NavLink from "~/components/NavLink";
import PostCard from "~/components/PostCard";
import posts from "~/data/posts.json";
import site from "~/data/site.json";
import navigation from "~/data/navigation.json";
import { galleryAlts } from "~/utils/images";
import { formatDatePl } from "~/utils/date";
import { opinieLabel } from "~/utils/plural";
import styles from "./post.module.css";
import listStyles from "./index.module.css";

const base = import.meta.env.SERVER_BASE_URL || "";
const withBase = (html: string) => html.replace(/href="\/(?!\/)/g, `href="${base}/`);

const categoryLabels: Record<string, string> = {};
navigation.categories.forEach((c) => { categoryLabels[c.slug] = c.label; });

export default function PostPage() {
  const params = useParams();
  const post = () => posts.find((p) => p.slug === params.slug);
  const related = () => posts.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <Show when={post()} fallback={<Layout><div class="container section"><h1>Nie znaleziono strony</h1></div></Layout>}>
      {(p) => {
        // Old WordPress excerpts are a truncated copy of the first paragraph — don't repeat them in the hero.
        const showLead = () => !p().description.replace(/<[^>]+>/g, "").startsWith(p().excerpt.slice(0, 40));
        const categories = () => p().categories.filter((c) => c !== "wszystkie");
        const details = () => [
          { label: "Lokalizacja", value: p().location },
          { label: "Data", value: formatDatePl(p().date) },
          { label: "Powierzchnia", value: p().area },
          { label: "Czas prac", value: p().duration },
          { label: "Wykonawca", value: p().executor },
        ].filter((d) => d.value);

        return (
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

            <section class={styles.hero}>
              <img class={styles.heroImage} src={p().thumbnail} alt="" fetchpriority="high" />
              <div class={styles.heroShade} />
              <div class={`container ${styles.heroInner}`}>
                <nav class={styles.breadcrumbs} aria-label="Ścieżka nawigacji">
                  <NavLink href="/">Strona Główna</NavLink>
                  <span aria-hidden="true">/</span>
                  <NavLink href="/realizacje">Realizacje</NavLink>
                </nav>
                <div class={styles.tags}>
                  <For each={categories()}>
                    {(c) => <NavLink class={styles.tag} href={`/realizacje/kategoria/${c}`}>{categoryLabels[c] || c}</NavLink>}
                  </For>
                </div>
                <h1 class={styles.title}>{p().title}</h1>
                <Show when={showLead()}>
                  <p class={styles.lead}>{p().excerpt}</p>
                </Show>
                <ul class={styles.chips}>
                  <li>{p().location}</li>
                  <li><time datetime={p().date}>{formatDatePl(p().date)}</time></li>
                  <Show when={p().area}><li>{p().area}</li></Show>
                  <Show when={p().gallery.length}>
                    <li><a href="#zdjecia">{p().gallery.length} zdjęć ↓</a></li>
                  </Show>
                </ul>
              </div>
            </section>

            <section class="section">
              <div class={`container ${styles.layout}`}>
                <article class={styles.prose} innerHTML={withBase(p().description)} />

                <aside class={styles.aside}>
                  <div class={styles.card}>
                    <h2 class={styles.cardTitle}>Szczegóły realizacji</h2>
                    <dl class={styles.details}>
                      <For each={details()}>
                        {(d) => (
                          <div>
                            <dt>{d.label}</dt>
                            <dd>{d.value}</dd>
                          </div>
                        )}
                      </For>
                    </dl>
                  </div>
                  <div class={`${styles.card} ${styles.ctaCard}`}>
                    <p class={styles.ctaTitle}>Chcesz takie ściany u siebie?</p>
                    <p class={styles.ctaText}>
                      Tynk gipsowy ze szlichtą — po wyschnięciu malujesz, bez gładzi. {site.googleRating}★ w {site.googleReviewCount} {opinieLabel(site.googleReviewCount)} Google.
                    </p>
                    <a class="btn btn-primary" href={`tel:${site.phoneRaw}`}>Zadzwoń: {site.phone}</a>
                    <NavLink class={styles.ctaLink} href="/tynki-ze-szlichta-pod-malowanie">Jak pracujemy →</NavLink>
                  </div>
                </aside>
              </div>
            </section>

            <Show when={p().gallery.length}>
              <section class={`section ${styles.gallerySection}`} id="zdjecia">
                <div class="container">
                  <div class={styles.sectionHead}>
                    <h2>Zdjęcia z budowy</h2>
                    <p>Kliknij zdjęcie, aby je powiększyć.</p>
                  </div>
                  <Gallery
                    images={p().gallery}
                    altPrefix={p().title}
                    alts={p().gallery.map((src) => galleryAlts[src])}
                    variant="mosaic"
                  />
                </div>
              </section>
            </Show>

            <section class="section">
              <div class="container">
                <div class={styles.sectionHead}>
                  <h2>Zobacz inne realizacje</h2>
                  <NavLink href="/realizacje">Wszystkie realizacje →</NavLink>
                </div>
                <div class={listStyles.postsGrid}>
                  <For each={related()}>
                    {(r) => <PostCard post={r} categoryLabels={categoryLabels} />}
                  </For>
                </div>
              </div>
            </section>
          </Layout>
        );
      }}
    </Show>
  );
}
