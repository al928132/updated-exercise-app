import './App.css';
import { useState } from "react";
import RepExercise from "./components/RepExercise";
import DurationExercise from "./components/DurationExercise";

const exercises = [
  { name: "Push-ups", screen: "reps", image: "/push-up-exercises.jpg" },
  { name: "Planks", screen: "timer", image: "/plank.jpg" },
  { name: "Running", screen: "timer", image: "/running.jpg" },
  { name: "Swimming", screen: "timer", image: "/swimming.jpeg" },
  { name: "Pull-ups", screen: "reps", image: "/pull-up.jpg" },
];

function App() {
  let [currentScreen, setCurrentScreen] = useState("menu");
  let [currentExercise, setCurrentExercise] = useState("none");

  const goHome = () => setCurrentScreen("menu");

  if (currentScreen === "timer") {
    return (
      <div className="app-container">
        <DurationExercise name={currentExercise} goHome={goHome} image={exercises.find(e => e.name === currentExercise)?.image} />
      </div>
    );
  }

  if (currentScreen === "reps") {
    return (
      <div className="app-container">
        <RepExercise name={currentExercise} goHome={goHome} image={exercises.find(e => e.name === currentExercise)?.image} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Exercises</h1>
        <button className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="header-divider"></div>
      <ul className="exercise-list">
        {exercises.map(({ name, screen }) => (
          <li
            key={name}
            className="exercise-item"
            onClick={() => { setCurrentExercise(name); setCurrentScreen(screen); }}
          >
            <span>{name}</span>
            <span className="exercise-arrow">&gt;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
