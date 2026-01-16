import React, { useEffect, useState,useRef } from 'react';


export function Timer(){
    const [count,setCount]=useState(0);
    const intervalRef=useRef(null);
    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setCount(prevCount=>prevCount+1)
        },1000)
        return ()=>{
            clearInterval(intervalRef.current);
        };
    })

    return (
        <>
            <h1>Timer: {count} seconds</h1>
            <button onClick={()=>clearInterval(intervalRef.current)}>Stop Timer</button>
        </>
    );
};


const FocusInput = () => {
    const inputElem=useRef(null);
    function focusInput(){
    inputElem.current.focus();
    inputElem.current.value="Hello";
  };
  return (
    <div>
        <input type="text" ref={inputElem} placeholder='Click the button to focus'/>
        <button onClick={()=>focusInput()}>Focus Element</button>
    </div>
  )
}

export default FocusInput