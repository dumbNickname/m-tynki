import styles from "./VideoClip.module.css";

interface VideoClipProps {
  src: string;
  poster: string;
  width: number;
  height: number;
  title: string;
  caption?: string;
}

export default function VideoClip(props: VideoClipProps) {
  return (
    <figure class={styles.figure}>
      <div class={styles.frame}>
        <video
          class={styles.video}
          src={props.src}
          poster={props.poster}
          width={props.width}
          height={props.height}
          controls
          muted
          playsinline
          preload="none"
          title={props.title}
          aria-label={props.title}
        />
      </div>
      {props.caption && <figcaption class={styles.caption}>{props.caption}</figcaption>}
    </figure>
  );
}
