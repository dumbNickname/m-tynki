import { For } from "solid-js";
import reviews from "~/data/reviews.json";
import site from "~/data/site.json";
import styles from "./Reviews.module.css";

function ReviewCard(props: { review: typeof reviews[0] }) {
  return (
    <div class={styles.card}>
      <div class={styles.stars}>
        <For each={Array(props.review.stars).fill(0)}>
          {() => <span class={styles.star}>&#9733;</span>}
        </For>
      </div>
      <p class={styles.text}>{props.review.text}</p>
      <div class={styles.author}>
        <div class={styles.avatar}>{props.review.name.charAt(0)}</div>
        <div class={styles.info}>
          <div class={styles.name}>{props.review.name}</div>
          <div class={styles.date}>{props.review.date}</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const col1 = reviews.slice(0, 4);
  const col2 = reviews.slice(4, 7);
  const col3 = reviews.slice(7);

  return (
    <div>
      <div class={styles.marqueeWrapper}>
        <div class={styles.marqueeCol}>
          <div class={`${styles.marqueeTrack} ${styles.marqueeUp}`}>
            <For each={col1}>
              {(review) => <ReviewCard review={review} />}
            </For>
            <div class={styles.marqueeClone} aria-hidden="true">
              <For each={col1}>
                {(review) => <ReviewCard review={review} />}
              </For>
            </div>
          </div>
        </div>
        <div class={`${styles.marqueeCol} ${styles.marqueeColSecond}`}>
          <div class={`${styles.marqueeTrack} ${styles.marqueeDown}`}>
            <For each={col2}>
              {(review) => <ReviewCard review={review} />}
            </For>
            <div class={styles.marqueeClone} aria-hidden="true">
              <For each={col2}>
                {(review) => <ReviewCard review={review} />}
              </For>
            </div>
          </div>
        </div>
        <div class={`${styles.marqueeCol} ${styles.marqueeColThird}`}>
          <div class={`${styles.marqueeTrack} ${styles.marqueeUp}`}>
            <For each={col3}>
              {(review) => <ReviewCard review={review} />}
            </For>
            <div class={styles.marqueeClone} aria-hidden="true">
              <For each={col3}>
                {(review) => <ReviewCard review={review} />}
              </For>
            </div>
          </div>
        </div>
        <div class={styles.marqueeFadeTop} />
        <div class={styles.marqueeFadeBottom} />
      </div>
      <div class={styles.googleBadge}>
        <img src="images/google-favicon.ico" alt="Google" width="18" height="18" loading="lazy" />
        <a href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer">
          Zobacz wszystkie opinie na Google
        </a>
      </div>
    </div>
  );
}
