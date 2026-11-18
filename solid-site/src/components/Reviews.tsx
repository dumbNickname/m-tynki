import { For, createSignal, onCleanup, onMount } from "solid-js";
import reviews from "~/data/reviews.json";
import site from "~/data/site.json";
import { opinieLabel } from "~/utils/plural";
import styles from "./Reviews.module.css";

function ReviewCard(props: { review: typeof reviews[0] }) {
  return (
    <div class={styles.card}>
      <div class={styles.stars} role="img" aria-label={`${props.review.stars} na 5 gwiazdek`}>
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

  // Prerendered in the playing layout (so most visitors see no jump on hydration); CSS
  // only animates it without reduced motion. Paused, each column is a scrollable list.
  // `userStarted` lets someone with reduced motion still opt in via the button.
  const [playing, setPlaying] = createSignal(true);
  const [userStarted, setUserStarted] = createSignal(false);
  onMount(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (reduce.matches) {
        setPlaying(false);
        setUserStarted(false);
      }
    };
    sync();
    reduce.addEventListener("change", sync);
    onCleanup(() => reduce.removeEventListener("change", sync));
  });

  const togglePlaying = () => {
    const next = !playing();
    setPlaying(next);
    setUserStarted(next);
  };

  const columns = [
    { items: col1, class: styles.marqueeUp },
    { items: col2, class: styles.marqueeDown, colClass: styles.marqueeColSecond },
    { items: col3, class: styles.marqueeUp, colClass: styles.marqueeColThird },
  ];

  return (
    <div>
      <div class={styles.topRow}>
        <a class={styles.summary} href={site.googleReviewsListUrl} target="_blank" rel="noopener noreferrer">
          <img src="images/google-favicon.ico" alt="" width="20" height="20" loading="lazy" />
          <strong class={styles.summaryScore}>{site.googleRating}</strong>
          <span class={styles.summaryStars} aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span>{site.googleReviewCount} {opinieLabel(site.googleReviewCount)} w Google</span>
        </a>
        <button type="button" class={styles.playToggle} onClick={togglePlaying}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            {playing() ? <path d="M6 5h4v14H6zM14 5h4v14h-4z" /> : <path d="M7 4.5v15l12-7.5z" />}
          </svg>
          {playing() ? "Zatrzymaj przewijanie opinii" : "Przewijaj opinie automatycznie"}
        </button>
      </div>
      <div
        class={styles.marqueeWrapper}
        classList={{ [styles.playing]: playing(), [styles.userStarted]: userStarted() }}
      >
        <For each={columns}>
          {(col, i) => (
            <div
              class={col.colClass ? `${styles.marqueeCol} ${col.colClass}` : styles.marqueeCol}
              role={playing() ? undefined : "region"}
              aria-label={playing() ? undefined : `Opinie klientów, kolumna ${i() + 1}`}
              tabindex={playing() ? undefined : 0}
            >
              <div class={`${styles.marqueeTrack} ${col.class}`}>
                <For each={col.items}>
                  {(review) => <ReviewCard review={review} />}
                </For>
                <div class={styles.marqueeClone} aria-hidden="true">
                  <For each={col.items}>
                    {(review) => <ReviewCard review={review} />}
                  </For>
                </div>
              </div>
            </div>
          )}
        </For>
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
