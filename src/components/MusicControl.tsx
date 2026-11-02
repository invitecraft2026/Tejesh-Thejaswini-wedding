import { useEffect, useRef, useState } from "react";

import { wedding } from "@/config/wedding";

const GESTURES = ["pointerdown", "touchend", "keydown"] as const;

/** Renders only when a music file is configured in src/config/wedding.ts */
export function MusicControl() {
  const src = wedding.musicSrc;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  // Try to autoplay on mount (the envelope tap counts as a user gesture).
  // If the browser blocks it, start on the visitor's next tap or keypress.
  useEffect(() => {
    const a = audioRef.current;
    if (!a || !src) return;

    a.volume = 0.6;

    const stopListening = () => {
      GESTURES.forEach((ev) => window.removeEventListener(ev, onGesture));
    };

    function onGesture(e: Event) {
      // Let the music button handle its own taps
      if ((e.target as Element | null)?.closest?.("[data-music-btn]")) return;

      a!
        .play()
        .then(stopListening)
        .catch(() => {});
    }

    a.play().catch(() => {
      GESTURES.forEach((ev) =>
        window.addEventListener(ev, onGesture, { passive: true })
      );
    });

    return () => {
      stopListening();
      a.pause();
    };
  }, [src]);

  if (!src) return null;

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;

    if (a.paused) {
      void a.play().catch(() => {});
    } else {
      a.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        type="button"
        data-music-btn
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="card-luxe fixed right-4 bottom-4 z-40 grid h-12 w-12 place-items-center rounded-full text-gold"
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path d="M9 5v14M15 5v14" stroke="currentColor" strokeWidth="1.6" fill="none" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
            <path d="M8 5l11 7-11 7V5z" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </svg>
        )}
      </button>
    </>
  );
}