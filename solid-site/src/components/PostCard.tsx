import NavLink from "./NavLink";
import { toThumb } from "~/utils/images";
import { formatDatePl } from "~/utils/date";
import styles from "./PostCard.module.css";

interface Post {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  thumbnail: string;
  excerpt: string;
  location: string;
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
      <div class={styles.thumbnail}>
        <img
          src={props.post.thumbnail}
          srcset={`${toThumb(props.post.thumbnail)} 400w, ${props.post.thumbnail} 800w`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 370px"
          alt=""
          loading="lazy"
        />
        <span class={styles.badge}>{badgeLabel()}</span>
      </div>
      <div class={styles.body}>
        <h2 class={styles.title}>
          <NavLink href={`/realizacje/${props.post.slug}`} class={styles.link}>{props.post.title}</NavLink>
        </h2>
        <p class={styles.excerpt}>{props.post.excerpt}</p>
      </div>
      <div class={styles.meta}>
        <span class={styles.location}>{props.post.location}</span>
        <time datetime={props.post.date}>{formatDatePl(props.post.date)}</time>
      </div>
      <span class={styles.more} aria-hidden="true">Zobacz realizację <span class={styles.arrow}>→</span></span>
    </article>
  );
}
