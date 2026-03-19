import { A } from "@solidjs/router";
import styles from "./PostCard.module.css";

interface Post {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  thumbnail: string;
  excerpt: string;
}

interface PostCardProps {
  post: Post;
  categoryLabels: Record<string, string>;
}

export default function PostCard(props: PostCardProps) {
  const firstCategory = () => props.post.categories.find((c) => c !== "wszystkie") || props.post.categories[0];
  const badgeLabel = () => props.categoryLabels[firstCategory()] || firstCategory();

  return (
    <article class={styles.card}>
      <A href={`/realizacje/${props.post.slug}`} class={styles.thumbnail}>
        <img src={props.post.thumbnail} alt={props.post.title} loading="lazy" />
      </A>
      <div class={styles.badge}>{badgeLabel()}</div>
      <div class={styles.body}>
        <h3 class={styles.title}>
          <A href={`/realizacje/${props.post.slug}`}>{props.post.title}</A>
        </h3>
        <p class={styles.excerpt}>{props.post.excerpt}</p>
      </div>
      <div class={styles.meta}>
        <span>{props.post.date}</span>
        <span>Brak komentarzy</span>
      </div>
    </article>
  );
}
