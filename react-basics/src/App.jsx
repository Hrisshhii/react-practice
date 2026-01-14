import './App.css';
import { useState,useEffect } from 'react';
function App() {
  const [value,setValue]=useState(0);
  const [something,setSome]=useState(0);
  useEffect(()=>{
    console.log('Call useEffect');
    document.title=`Increment ${value}`;
  },[value]);
// empty dependency array means only load once
// if none then it load everytime 
// if [value] anytime change in component fire function

  useEffect(()=>{
    console.log('Call useEffect using Something');
    document.title=`Increment ${something}`;
  },[something]);

  return (
    <>
      <h2>value: {value}</h2>
      <button onClick={()=>setValue(value+1)}>Increment</button>
      <h2>Value by something: {something}</h2>
      <button onClick={()=>setSome(something+1)}>Increment by something</button>
    </>
  )
}

export default App
