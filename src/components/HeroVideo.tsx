import { useEffect, useRef } from "react";
import heroVideo from "@/assets/hero-dentist.mp4.asset.json";

/**
 * Real HTML5 <video> background for the hero section.
 * Autoplays, muted, looping, inline — keeps playing while scrolling.
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const play = () => {
      video.play().catch(() => {
        /* autoplay may be blocked until interaction */
      });
    };
    play();
    document.addEventListener("visibilitychange", play);
    window.addEventListener("touchstart", play, { once: true });
    return () => {
      document.removeEventListener("visibilitychange", play);
      window.removeEventListener("touchstart", play);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        ref={ref}
        className="h-full w-full object-cover"
        src={heroVideo.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-background/45" />
    </div>
  );
}
