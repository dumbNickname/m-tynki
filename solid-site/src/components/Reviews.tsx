import { For } from "solid-js";
import reviews from "~/data/reviews.json";
import site from "~/data/site.json";
import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <div>
      <div class={styles.grid}>
        <For each={reviews.slice(0, 6)}>
          {(review) => (
            <div class={styles.card}>
              <div class={styles.header}>
                <div class={styles.avatar}>{review.name.charAt(0)}</div>
                <div class={styles.info}>
                  <div class={styles.name}>{review.name}</div>
                  <div class={styles.date}>{review.date}</div>
                </div>
              </div>
              <div class={styles.stars}>
                <For each={Array(review.stars).fill(0)}>
                  {() => <span class={styles.star}>&#9733;</span>}
                </For>
              </div>
              <p class={styles.text}>{review.text}</p>
            </div>
          )}
        </For>
      </div>
      <div class={styles.googleBadge}>
        <img src="https://www.google.com/favicon.ico" alt="Google" />
        <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer">
          Zobacz wszystkie opinie na Google
        </a>
      </div>
    </div>
  );
}
