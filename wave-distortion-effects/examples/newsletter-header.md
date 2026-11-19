# Newsletter header ripple

## Input

"Use a quiet water-like ripple behind the Creators Toolbox newsletter title, Creator tools worth trying this week. Header 1200 by 360. Keep the signup field and headline still. Reference description: a wave spreads from one point, then fades before reaching the edges."

## Expected output

Open `wave-study.html?mode=ripple`. Its original embedded illustration is decorative; the HTML headline stays outside the canvas. Use amplitude 0.012, frequency 5 cycles per radial UV unit, speed 0.3 cycles per second, direction radial from the pointer, falloff 5, and no flag anchor. Keep the color bands broad enough that distortion reads at phone width.

Expected behavior: moving the pointer relocates the ripple center; center math stays finite, source artwork never exposes a blank edge, and Pause freezes movement. Touch can scroll because the canvas does not intercept gestures. Reduced motion shows the static unfiltered artwork. With WebGL disabled, the static SVG noise displacement remains behind the readable HTML headline.

Expected handoff: `newsletter-wave.html`, a screenshot at 1200 by 360 and one at 390px width, parameter values, and a device frame-time observation. These are expected outputs, not screenshots or measurements from the production site.
