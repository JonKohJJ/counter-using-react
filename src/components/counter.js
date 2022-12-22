import React, { useState } from "react";

export default function Counter(){

    // javascript goes here
    let [counter, setCounter] = useState(0);
    let [alert, setAlert] = useState("~");

    function add(){
        setAlert("~");
        setCounter(counter=counter + 1);
    }

    function subtract(){
        if (counter === 0){
            setAlert("cannot go lower than 0!")
        }else{
            setAlert("~")
            setCounter(counter=counter - 1);
        }
    }

    function reset(){
        setAlert("~");
        setCounter(counter = 0);
    }
    
    return(
        <div className="counter">
            <h2>Counter using React</h2>
            <div className="counterContainer">
                <div className="button subtract" onClick={subtract}>-</div>
                <h1 className="counterValue">{counter}</h1>
                <div className="button add" onClick={add}>+</div>
            </div>
            <p className="reset" onClick={reset}>reset</p>
            <p className="alerts">{alert}</p>
        </div>
    )
}