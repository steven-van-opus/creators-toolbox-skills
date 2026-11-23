import React from "react";
import {AbsoluteFill, Composition, useCurrentFrame} from "remotion";
import {actionProgress, beatAt, FPS, TOTAL_FRAMES} from "./timing";

type Props = {calm: boolean};

export const SeedlingReminder: React.FC<Props> = ({calm}) => {
  const frame = useCurrentFrame();
  const beat = beatAt(frame);
  const progress = calm ? 1 : actionProgress(frame);
  return (
    <AbsoluteFill style={{boxSizing: "border-box", background: "#F4F5ED", color: "#173729", fontFamily: "Arial, sans-serif", padding: 76}}>
      <div style={{fontSize: 22, letterSpacing: 2}}>SEEDLING / ILLUSTRATIVE CONCEPT</div>
      {beat === "intro" ? (
        <div style={{marginTop: 150, fontSize: 72, maxWidth: 900, fontWeight: 700}}>A small reminder for a living thing.</div>
      ) : beat === "result" ? (
        <div style={{marginTop: 180, fontSize: 86, fontWeight: 700}}>Ready for today.</div>
      ) : (
        <>
          <div style={{fontSize: 58, fontWeight: 700, marginTop: 54}}>Today's list</div>
          <div style={{position: "absolute", boxSizing: "border-box", left: 700, top: 285, width: 430, height: 180, border: "3px solid #B8CDBB", borderRadius: 28, background: "#E8EEE2"}} />
          <div style={{position: "absolute", boxSizing: "border-box", left: 130 + progress * 590, top: 320 - progress * 15, width: 390, padding: 30, borderRadius: 20, background: "#357C55", color: "#FFFFFF", boxShadow: "0 12px 20px #17372920"}}>
            <div style={{fontSize: 30, fontWeight: 700}}>Water the basil</div>
            <div style={{fontSize: 22, marginTop: 10}}>Today, after breakfast</div>
          </div>
        </>
      )}
      <div style={{position: "absolute", bottom: 50, left: 76, fontSize: 20}}>Fictional interface. One action, then a readable hold.</div>
    </AbsoluteFill>
  );
};

export const SeedlingRoot: React.FC = () => (
  <Composition id="SeedlingReminder" component={SeedlingReminder} durationInFrames={TOTAL_FRAMES} fps={FPS} width={1280} height={720} defaultProps={{calm: false}} />
);
