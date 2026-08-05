import { useEffect, useRef } from "react";
import bgVideo from "@/assets/clinic-bg-v2.mp4.asset.json";

/**
 * Fixed, full-page looping background video shown behind every section.
 * Autoplays, muted, looping, inline — keeps playing while scrolling.
 */
export function BackgroundVideo() {
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
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <video
        ref={ref}
        className="h-full w-full object-cover"
        src={bgVideo.url}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
      />
      <div className="absolute inset-0 bg-background/45" />
    </div>
  );
}
