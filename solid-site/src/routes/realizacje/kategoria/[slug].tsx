import { useParams } from "@solidjs/router";
import { For, Show, createMemo } from "solid-js";
import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import PostCard from "~/components/PostCard";
import NavLink from "~/components/NavLink";
import posts from "~/data/posts.json";
import navigation from "~/data/navigation.json";
import styles from "../index.module.css";

const categoryLabels: Record<string, string> = {};
navigation.categories.forEach((c) => { categoryLabels[c.slug] = c.label; });

const categoryDescriptions: Record<string, string> = {
  "malowanie-scian": "Budowy, na których po tynkowaniu zostawaliśmy jeszcze na malowanie — natryskiem, na biało lub w kolorze. Zdjęcia, metraż i czas realizacji.",
  "tynk-ze-szlichta-wygladzajaca": "Realizacje wykończone szlichtą wygładzającą, czyli ściany oddane w stanie gotowym pod malowanie. Zobacz zdjęcia z domów we Wrocławiu i okolicach.",
  "zabudowy-z-plyt-gk": "Realizacje z zabudowami z płyt karton-gips: sufity podwieszane, ścianki działowe i obudowy, wykonane razem z tynkiem przez jedną ekipę.",
};

export default function CategoryPage() {
  const params = useParams();

  const categoryLabel = createMemo(() => categoryLabels[params.slug ?? ""] || params.slug || "");

  const filteredPosts = createMemo(() => {
    const slug = params.slug ?? "";
    if (slug === "wszystkie") return posts;
    return posts.filter((p) => p.categories.includes(slug));
  });

  return (
    <Layout>
      <SeoHead
        title={`${categoryLabel()} - Realizacje`}
        canonical={`/realizacje/kategoria/${params.slug}`}
        description={categoryDescriptions[params.slug ?? ""] || `Realizacje w kategorii „${categoryLabel()}" wykonane przez M-TYNK we Wrocławiu i okolicach.`}
        breadcrumbs={[
          { name: "Strona Główna", href: "/" },
          { name: "Realizacje", href: "/realizacje" },
          { name: categoryLabel() },
        ]}
      />

      <PageHeader
        title={categoryLabel()}
        breadcrumbs={[
          { label: "Strona Główna", href: "/" },
          { label: "Realizacje", href: "/realizacje" },
          { label: categoryLabel() },
        ]}
      />

      <section class="section">
        <div class="container">
          <nav class={styles.categoryNav}>
            <For each={navigation.categories}>
              {(cat) => (
                <NavLink
                  href={cat.href}
                  class={`${styles.categoryLink} ${cat.slug === params.slug ? styles.categoryLinkActive : ""}`}
                >
                  {cat.label}
                </NavLink>
              )}
            </For>
          </nav>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <Show when={filteredPosts().length > 0} fallback={<p>Brak realizacji w tej kategorii.</p>}>
            <div class={styles.postsGrid}>
              <For each={filteredPosts()}>
                {(post) => <PostCard post={post} categoryLabels={categoryLabels} />}
              </For>
            </div>
          </Show>
        </div>
      </section>
    </Layout>
  );
}
