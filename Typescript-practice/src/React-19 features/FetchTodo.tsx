import {use} from 'react';

const fetchData=async ()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return res.json();
};


const FetchTodo = () => {
  const data=use(fetchData());
  return (
    <div>
      <h2>React 19 fetch</h2>
      {data.title}
    </div>
  )
}

export default FetchTodo



// Works better in a next project
/*
Command for Next project: 

  npx create-next-app@latest react19-use-demo
  cd react19-use-demo
  npm install react@19 react-dom@19
  npm run dev
*/