import { For } from "solid-js";
import reviews from "~/data/reviews.json";
import site from "~/data/site.json";
import { opinieLabel } from "~/utils/plural";
import styles from "./Reviews.module.css";

function ReviewCard(props: { review: typeof reviews[0] }) {
  return (
    <div class={styles.card}>
      <div class={styles.stars} aria-label={`${props.review.stars} na 5 gwiazdek`}>
        <For each={Array(props.review.stars).fill(0)}>
          {() => <span class={styles.star} aria-hidden="true">&#9733;</span>}
        </For>
      </div>
      <p class={styles.text}>{props.review.text}</p>
      <div class={styles.author}>
        <div class={styles.avatar}>{props.review.name.charAt(0).toUpperCase()}</div>
        <div class={styles.info}>
          <div class={styles.name}>{props.review.name}</div>
          <div class={styles.date}>Opinia Google · {props.review.year}</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const third = Math.ceil(reviews.length / 3);
  const col1 = reviews.slice(0, third);
  const col2 = reviews.slice(third, third * 2);
  const col3 = reviews.slice(third * 2);

  return (
    <div>
      <a class={styles.summary} href={site.googleReviewsListUrl} target="_blank" rel="noopener noreferrer">
        <img src="images/google-favicon.ico" alt="" width="20" height="20" loading="lazy" />
        <strong class={styles.summaryScore}>{site.googleRating}</strong>
        <span class={styles.summaryStars} aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span>{site.googleReviewCount} {opinieLabel(site.googleReviewCount)} w Google</span>
      </a>
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
      <p class={styles.disclaimer}>
        Wybrane opinie z naszego profilu w Google, przepisane bez zmian. Nazwiska autorów skróciliśmy do inicjału.
      </p>
      <div class={styles.badgeRow}>
        <a class={styles.googleBadge} href={site.googleReviewsListUrl} target="_blank" rel="noopener noreferrer">
          <img src="images/google-favicon.ico" alt="" width="18" height="18" loading="lazy" />
          Przeczytaj wszystkie opinie w Google
        </a>
        <a class={styles.googleBadge} href={site.googleReviewUrl} target="_blank" rel="noopener noreferrer">
          Wystaw nam opinię
        </a>
      </div>
    </div>
  );
}
