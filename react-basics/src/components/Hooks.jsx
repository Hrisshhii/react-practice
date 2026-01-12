/*
- state is a way to store and manage data that can change over time and affect how component renders. Defined using useState Hook having initial value and a updator function.
--const [data,changeData]=useState()


*/

import React,{useState} from 'react'

const Hooks = () => {
  const [count,setCount]=useState(0);
  const increment=()=>setCount(count+1);
  const decrement=()=>setCount(count-1);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </>
  );
}

export default Hooks