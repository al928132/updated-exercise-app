import {useState} from "react";

export default function RepExercise({name}){
    let[repCount, setRepCount] = useState(0);

    function newRep(){
        setRepCount(repCount +1);
    }

    function lessRep(){
        setRepCount(repCount -1);
    }

    function resetReps(){
        setRepCount(0);
    }

    return(
        <>
        <h1>{name}</h1>
        <h2>{repCount} Reps</h2>
        <button onClick={() => {newRep()}}>+</button>
        <button onClick={() => {lessRep()}}>-</button>
        <button onClick={() => {resetReps()}}>Reset</button>
        </>
    )
}