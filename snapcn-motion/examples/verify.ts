import assert from "node:assert/strict";
import {actionProgress, beatAt, TOTAL_FRAMES} from "./timing.ts";

function verifyTiming(): void {
  const counts = {intro: 0, action: 0, result: 0};
  let previous = 0;
  for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
    counts[beatAt(frame)]++;
    const progress = actionProgress(frame);
    assert.ok(progress >= 0 && progress <= 1 && progress >= previous);
    if (frame >= 135) assert.equal(progress, 1);
    previous = progress;
  }
  assert.deepEqual(counts, {intro: 90, action: 180, result: 90});
  assert.equal(beatAt(89), "intro");
  assert.equal(beatAt(90), "action");
  assert.equal(beatAt(269), "action");
  assert.equal(beatAt(270), "result");
  assert.throws(() => beatAt(-1), RangeError);
  assert.throws(() => beatAt(TOTAL_FRAMES), RangeError);
  assert.throws(() => beatAt(1.5), RangeError);
  console.log("360 frames covered; action settles at frame 135; result hold stays still.");
}

verifyTiming();
