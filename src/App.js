import './App.css';
import {useState} from "react";
import RepExercise from "./components/RepExercise";
import DurationExercise from "./components/DurationExercise";
import Home from "./components/Home";


function App() {
  let screen;
  let [currentScreen, setCurrentScreen] = useState("menu")
  let [currentExercise, setCurrentExercise] = useState("none")

  if (currentScreen === "menu"){
    screen =
    <>
    <h1>Execises</h1>
    <ul>
    <li><button onClick={() => {setCurrentExercise("Push-ups"); setCurrentScreen("reps")}}>Push-ups</button></li>
      <li><button onClick={() => {setCurrentExercise("Planks"); setCurrentScreen("timer")}}>Planks</button></li>
      <li><button onClick={() => {setCurrentExercise("Running"); setCurrentScreen("timer")}}>Running</button></li>
      <li><button onClick={() => {setCurrentExercise("Swimming"); setCurrentScreen("timer")}}>Swimming</button></li>
      <li><button onClick={() => {setCurrentExercise("Pull-ups"); setCurrentScreen("reps")}}>Pull-ups</button></li>
    </ul>
    </>
  }
  else if(currentScreen === "timer"){
    screen = <DurationExercise name={currentExercise}/>
  }
  else if(currentScreen === "reps"){
    screen = <RepExercise name={currentExercise}/>
  }

  return (
    <div className="App">
      <>{screen}</>
    </div>
  );
}

export default App;
