import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../../../hooks/useIsMobile";
import { colors, fonts, motion, radii, shadows } from "../../../theme/tokens";
import type { ProjectSection } from "../data";
import { ImageZoomModal } from "./ImageZoomModal";

/**
 * Autoplays a muted, looping clip only while it is on screen, pausing when
 * scrolled away. This keeps the page calm and light rather than running every
 * clip at once. Muting is set imperatively because React's `muted` prop does
 * not reliably reflect to the DOM property that autoplay policies check.
 */
function ProjectVideo({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="video"
      ref={ref}
      src={src}
      aria-label={label}
      loop
      muted
      playsInline
      controls
      preload="metadata"
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "center",
        display: "block",
      }}
    />
  );
}

/**
 * A project media tile. Images fill the tile and open a full-frame zoom on
 * click; videos autoplay muted/looped while visible and are letterboxed so
 * their controls stay usable. A small pill badge marks the media type.
 */
export function MediaTile({ section }: { section: ProjectSection }) {
  const [zoomed, setZoomed] = useState(false);
  const isMobile = useIsMobile();
  const isImage = section.mediaType === "IMAGE";
  const canZoom = isImage && !isMobile;

  return (
    <Box
      onClick={canZoom ? () => setZoomed(true) : undefined}
      sx={{
        position: "relative",
        height: { xs: 210, md: 300 },
        borderRadius: radii.media,
        overflow: "hidden",
        backgroundColor: colors.surface,
        boxShadow: shadows.media,
        cursor: canZoom ? "zoom-in" : "default",
        transition: `transform ${motion.duration.hover} ease, box-shadow ${motion.duration.hover} ease`,
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: shadows.card,
        },
      }}
    >
      <Box
        component="span"
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          zIndex: 3,
          fontFamily: fonts.mono,
          fontSize: 10,
          letterSpacing: "0.12em",
          color: colors.onDark,
          backgroundColor: "rgba(43,40,36,0.72)",
          borderRadius: radii.pill,
          padding: "5px 10px",
          pointerEvents: "none",
        }}
      >
        {section.mediaType}
      </Box>

      {isImage ? (
        <Box
          component="img"
          src={section.media}
          alt={section.alt}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      ) : (
        <ProjectVideo src={section.media} label={section.alt} />
      )}

      {isImage && (
        <ImageZoomModal
          imageUrl={zoomed ? section.media : null}
          alt={section.alt}
          onClose={() => setZoomed(false)}
        />
      )}
    </Box>
  );
}
