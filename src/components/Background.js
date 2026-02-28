import React from "react";
import Galaxy from "./Galaxy";

function Background() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0
      }}
    >
      <Galaxy
        mouseRepulsion
        mouseInteraction
        density={1.5}
        glowIntensity={0.2}
        saturation={0}
        hueShift={140}
        twinkleIntensity={0.1}
        rotationSpeed={0.05}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={0.3}
        speed={0.8}
      />
    </div>
  );
}

export default Background;