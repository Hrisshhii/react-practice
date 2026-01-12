import { useState } from "react";

export function Counter(){
  const [count,setCount]=useState(0);
  function increment(){setCount(count+1)};
  function decrement(){setCount(count-1)};

  return (
    <>
      <h1>Current Value {count} </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
    </>
  );
}


export function ToDoList(){
  const [todos,setToDos]=useState([]);
  const [inputVal,setInputVal]=useState("");

  const handleSubmit=e=>{
    e.preventDefault();
    if (inputVal.trim()){
      setToDos([
        ...todos,
        inputVal
      ]);
      setInputVal("");
    }
  };

  const handleChange=e=>{
    setInputVal(e.target.value);
  };

  return (
    <>
      <h1>To do List: </h1>
      <form onSubmit={handleSubmit} >
        <input type="text" value={inputVal} onChange={handleChange} placeholder="Add a task"></input>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map((to)=>{
          return <li key={crypto.randomUUID()}>{to}</li>
        })}
      </ul>
    </>
  );
}