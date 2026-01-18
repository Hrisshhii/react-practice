import { useState,useEffect } from 'react';
import { BackHome } from '../BackHome';
import {evaluate} from 'mathjs';
import './Calculator.css';


export function Calculator(){
  const [value,setValue]=useState("");
  const clear=()=>setValue("");
  const vibrate=()=>navigator.vibrate?.(10);

  const handleClick=(val)=>{
    setValue(prev=>prev+val);
    vibrate();
  };

  const calculate=()=>{
    if(!value.trim()) return;
    try{
      setValue(evaluate(value).toString());
    }catch{
      setValue("Error")
    }
  };

  useEffect(()=>{
    const handleKey=(e)=>{
      if("0123456789.+-*/".includes(e.key)){setValue(v=>v+e.key)};
      if(e.key==="Enter"){
        if(!value.trim()) return;
        try{
          setValue(evaluate(value).toString());
        }catch{
          setValue("Error");
        }
      };
      if(e.key==="Backspace") setValue(v=>v.slice(0,-1));
      if(e.key==="Escape") clear();
    };
    window.addEventListener("keydown",handleKey);
    return ()=>window.removeEventListener("keydown",handleKey);
  },[value]);

  return(
    <div className="calculator">
      <BackHome />
      <div className='calculator-card'>
        <div className='screen'>{value || "0"}</div>
        <div className='keypad'>
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"]
            .map(btn=>(
              <button 
                key={btn} 
                className={`btn ${btn==="=" ? "equals" : ""}`} 
                onClick={()=>btn==="=" ? calculate() : handleClick(btn)}
              >{btn}</button>
            ))
          }
          <button className='clear-button' onClick={clear}> C </button>
          <button className="backspace-button" onClick={() => setValue(v => v.slice(0,-1))}>⌫</button>
        </div>
      </div>
    </div>
  );
};