import { useCallback, useEffect, useState } from "react";

let currentTimer = 0;
export default function DurationExercise({ name, goHome, image }) {
  let [running, setRunning] = useState(false);
  let [timer, setTimer] = useState(0);

  let updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10);
    }
  }, [running]);

  useEffect(() => {
    currentTimer = setInterval(updateTimer, 10);
    return () => clearInterval(currentTimer);
  }, [running]);

  let startStop = useCallback(() => {
    setRunning(!running);
    clearInterval(currentTimer);
  }, [running]);

  let mins = (Math.floor((timer / (1000 * 60)) % 60)).toString().padStart(2, "0");
  let secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, "0");
  let mills = (timer % 1000).toString().padStart(3, "0");

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
      <div className="timer-box">
        <div className="timer-display">
          <div className="timer-unit">
            <div className="timer-value">{mins}</div>
            <div className="timer-unit-label">mins</div>
          </div>
          <div className="timer-unit">
            <div className="timer-value">{secs}</div>
            <div className="timer-unit-label">sec</div>
          </div>
          <div className="timer-unit">
            <div className="timer-value">{mills}</div>
            <div className="timer-unit-label">ms</div>
          </div>
        </div>
      </div>
      <div className="timer-buttons">
        <button className="btn-circle btn-stop" onClick={() => setTimer(0)}>Reset</button>
        <button className="btn-circle btn-start" onClick={startStop}>
          {running ? "Pause" : "Start"}
        </button>
      </div>
    </>
  );
}
