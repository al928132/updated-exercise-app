import { useState } from "react";

export default function RepExercise({ name, goHome, image }) {
  let [repCount, setRepCount] = useState(0);

  return (
    <>
      <div className="app-header">
        <h1>{name}</h1>
        <button className="hamburger" onClick={goHome}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="header-divider"></div>
      <div className="exercise-image"><img src={image} alt={name} /></div>
      <div className="reps-box">
        <div className="reps-label">Reps</div>
        <div className="reps-controls">
          <button className="reps-btn" onClick={() => setRepCount(r => r + 1)}>+</button>
          <span className="reps-count">{repCount}</span>
          <button className="reps-btn" onClick={() => setRepCount(r => Math.max(0, r - 1))}>&#8722;</button>
        </div>
      </div>
    </>
  );
}
