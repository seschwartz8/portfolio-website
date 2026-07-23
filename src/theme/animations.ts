/**
 * Shared motion primitives.
 *
 * Keyframes are defined once with emotion and referenced from component `sx`
 * props, so every entrance/ambient animation across the site stays consistent.
 * All motion is globally neutralized under `prefers-reduced-motion: reduce`
 * (see index.css), so components can use these freely without guarding.
 */
import { keyframes } from "@emotion/react";
import { motion } from "./tokens";

/** Content rises up and fades in — the signature entrance. */
export const rise = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/** Simple opacity fade — used for imagery so it doesn't shift layout. */
export const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

/** Slow zoom-out, giving hero photos a gentle "settling" feel on load. */
export const zoomIn = keyframes`
  from { transform: scale(1.08); }
  to   { transform: scale(1); }
`;

/** Horizontal slide-in — project content on tab change. */
export const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-14px); }
  to   { opacity: 1; transform: translateX(0); }
`;

/** Continuous rotation — the orbit portrait ring (alternate hero). */
export const ring = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

/** Barely-there breathing scale — the orbit portrait (alternate hero). */
export const breath = keyframes`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.015); }
`;

/**
 * Build the `animation` shorthand for a staggered "rise" entrance.
 *
 * @param delay      Seconds to wait before the element animates in.
 * @param duration   Animation duration (defaults to the shared rise duration).
 */
export const riseIn = (delay = 0, duration: string = motion.duration.rise) =>
  `${rise} ${duration} ${motion.easing} both ${delay}s`;

/** Build the `animation` shorthand for an opacity fade-in (used for imagery). */
export const fadeInAnim = (delay = 0, duration: string = motion.duration.fade) =>
  `${fadeIn} ${duration} ease both ${delay}s`;

/** The `animation` shorthand for the project tab-change slide-in. */
export const slideInAnim = (delay = 0) =>
  `${slideIn} ${motion.duration.slide} ${motion.easing} both ${delay}s`;
