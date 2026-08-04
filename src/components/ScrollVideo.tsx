import { useEffect, useRef } from "react";
import videoAsset from "@/../public/clinic-hero.mp4.asset.json";

/**
 * Full-page fixed background video whose playback position is driven by
 * the scroll offset (scrubbing). Falls back to normal looping playback
 * if the browser cannot seek smoothly.
 */
export function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let duration = 0;

    const onMeta = () => {
      duration = video.duration || 0;
    };
    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) onMeta();

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      targetRef.current = progress * (duration || 0);
    };

    const tick = () => {
      // ease toward the target time so scrubbing feels fluid
      currentRef.current += (targetRef.current - currentRef.current) * 0.12;
      if (duration > 0 && Number.isFinite(currentRef.current)) {
        try {
          video.currentTime = Math.min(duration - 0.05, Math.max(0, currentRef.current));
        } catch {
          /* ignore seek errors */
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <video
        ref={videoRef}
        className="h-full w-full object-cover opacity-70"
        src={videoAsset.url}
        muted
        playsInline
        preload="auto"
        autoPlay
        loop
      />
      <div className="absolute inset-0 bg-background/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, transparent 0%, var(--color-background) 85%)",
        }}
      />
    </div>
  );
}
