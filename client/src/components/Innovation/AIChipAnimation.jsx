import React from "react";
import "./AIChipAnimation.css";

export default function AIChipAnimation() {
  return (
    <div className="chip-container">
      <div className="chip-base">
        <div className="chip-lines"></div>
        <div className="chip-lines delay"></div>
        <div className="chip-lines slow"></div>
      </div>

      <div className="cloud-glow">
        <span className="ai-text">AI</span>
      </div>

      <div className="light-beam"></div>
      <div className="pulse-circle"></div>
    </div>
  );
}
