import React from 'react';
import { useRef } from 'react';

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