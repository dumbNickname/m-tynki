import { For } from "solid-js";
import { A } from "@solidjs/router";
import Layout from "~/components/Layout";
import SeoHead from "~/components/SeoHead";
import PageHeader from "~/components/PageHeader";
import PostCard from "~/components/PostCard";
import posts from "~/data/posts.json";
import navigation from "~/data/navigation.json";
import styles from "./index.module.css";

const categoryLabels: Record<string, string> = {};
navigation.categories.forEach((c) => { categoryLabels[c.slug] = c.label; });

export default function Realizacje() {
  return (
    <Layout>
      <SeoHead
        title="Realizacje"
        canonical="/realizacje"
        description="Realizacje firmy M-TYNK Wrocław. Zobacz nasze prace tynkarskie — tynki gipsowe ze szlichtą wygładzającą pod malowanie, zabudowy G-K, malowanie ścian."
        dateModified="2024-09-30T08:10:47+00:00"
        breadcrumbs={[
          { name: "HOME", href: "/" },
          { name: "Realizacje" },
        ]}
      />

      <PageHeader
        title="REALIZACJE"
        breadcrumbs={[{ label: "HOME", href: "/" }, { label: "Realizacje" }]}
      />

      <section class="section">
        <div class="container">
          <nav class={styles.categoryNav}>
            <For each={navigation.categories}>
              {(cat) => (
                <A href={`/category/${cat.slug}`} class={styles.categoryLink}>
                  {cat.label}
                </A>
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
