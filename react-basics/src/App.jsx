import './App.css';
import { useRef } from 'react';

function App() {
  const inputElem=useRef(null);
  function focusInput(){
    inputElem.current.focus();
    inputElem.current.value="Hello";
  };
  return (
    <>
      <input type="text" ref={inputElem}/>
      <button onClick={()=>focusInput()}>Focus Element</button>
    </>
  );
}

export default App
