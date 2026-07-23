/** Career start — May 2020 — used to derive years of experience dynamically. */
const CAREER_START = new Date("2020-05-01");
const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

/**
 * A human-friendly "years of experience" phrase that stays accurate over time,
 * e.g. "6 years", "more than 6 years", "7 years". Preserved from the original
 * site so copy never goes stale.
 */
export function yearsOfExperience(now: Date = new Date()): string {
  const years = (now.getTime() - CAREER_START.getTime()) / MS_PER_YEAR;
  const whole = Math.floor(years);
  const fraction = years - whole;

  if (fraction <= 0.25) return `${whole} years`;
  if (fraction < 0.75) return `more than ${whole} years`;
  return `${whole + 1} years`;
}
