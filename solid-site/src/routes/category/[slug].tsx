import { useParams } from "@solidjs/router";
import { For, Show, createMemo } from "solid-js";
import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import PostCard from "~/components/PostCard";
import NavLink from "~/components/NavLink";
import posts from "~/data/posts.json";
import navigation from "~/data/navigation.json";
import styles from "../realizacje/index.module.css";

const categoryLabels: Record<string, string> = {};
navigation.categories.forEach((c) => { categoryLabels[c.slug] = c.label; });

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
        canonical={`/category/${params.slug}`}
        description={`Realizacje w kategorii „${categoryLabel()}" — tynki gipsowe ze szlichtą wygładzającą pod malowanie. Firma M-TYNK Wrocław.`}
        breadcrumbs={[
          { name: "HOME", href: "/" },
          { name: "Realizacje", href: "/realizacje" },
          { name: categoryLabel() },
        ]}
      />

      <PageHeader
        title={categoryLabel()}
        breadcrumbs={[
          { label: "HOME", href: "/" },
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
                  href={`/category/${cat.slug}`}
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
