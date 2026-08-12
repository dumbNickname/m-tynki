import { For } from "solid-js";
import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import PostCard from "~/components/PostCard";
import NavLink from "~/components/NavLink";
import posts from "~/data/posts.json";
import navigation from "~/data/navigation.json";
import styles from "./index.module.css";

const categoryLabels: Record<string, string> = {};
navigation.categories.forEach((c) => { categoryLabels[c.slug] = c.label; });

export default function Realizacje() {
  return (
    <Layout>
      <SeoHead
        title="Realizacje — Tynki ze Szlichtą pod Malowanie"
        canonical="/realizacje"
        description="Realizacje firmy M-TYNK Wrocław. Zobacz nasze prace tynkarskie — tynki gipsowe ze szlichtą wygładzającą pod malowanie, zabudowy G-K, malowanie ścian."
        dateModified="2024-09-30T08:10:47+00:00"
        breadcrumbs={[
          { name: "Strona Główna", href: "/" },
          { name: "Realizacje" },
        ]}
      />

      <PageHeader
        title="Realizacje"
        breadcrumbs={[{ label: "Strona Główna", href: "/" }, { label: "Realizacje" }]}
      />

      <section class="section">
        <div class="container">
          <p>Zapoznaj się z naszymi realizacjami tynków gipsowych ze szlichtą wygładzającą pod malowanie. Każdy projekt to przykład naszego doświadczenia i dbałości o najwyższą jakość wykończenia ścian we Wrocławiu i okolicach.</p>
          <nav class={styles.categoryNav}>
            <For each={navigation.categories}>
              {(cat) => (
                <NavLink
                  href={cat.href}
                  class={styles.categoryLink}
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
          <div class={styles.postsGrid}>
            <For each={posts}>
              {(post) => <PostCard post={post} categoryLabels={categoryLabels} />}
            </For>
          </div>
        </div>
      </section>
    </Layout>
  );
}
