import './App.css';
import { useState,useEffect } from 'react';
function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    async function getData() {
      const result=await fetch("https://jsonplaceholder.typicode.com/todos");
      const data=await result.json();
      if (data && data.length) setData(data)
    }
  getData();
  },[]);

  return (
    <>
      <ul>
        {data.map((todo)=>(
          <li key={crypto.randomUUID()}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App