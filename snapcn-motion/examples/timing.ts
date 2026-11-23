export const FPS = 30;
export const TOTAL_FRAMES = 12 * FPS;
export type Beat = "intro" | "action" | "result";

export function beatAt(frame: number): Beat {
  if (!Number.isInteger(frame) || frame < 0 || frame >= TOTAL_FRAMES) {
    throw new RangeError("Frame must be an integer inside the composition.");
  }
  if (frame < 3 * FPS) return "intro";
  if (frame < 9 * FPS) return "action";
  return "result";
}

// Input is composition-global, including when called from a Sequence.
export function actionProgress(frame: number): number {
  const linear = Math.max(0, Math.min(1, (frame - 3 * FPS) / (1.5 * FPS)));
  return linear * linear * (3 - 2 * linear);
}
