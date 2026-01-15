import './App.css';
import { useReducer } from 'react';

const initialState={count:0};
const reducer=(state,action)=>{
  switch(action.type){
    case 'increment':
      return {...state,count:state.count+1};
    case 'decrement':
      return {...state,count:state.count-1};
    case 'reset':
      return {...state,count:0};
    default:
      return state;
  }
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <>
      <button onClick={()=>dispatch({type:"increment"})} style={{padding:'10px',fontSize:'25px'}}> + </button>
      <button onClick={()=>dispatch({type:"decrement"})} style={{padding:'10px',fontSize:'25px'}}> - </button>
      <button onClick={()=>dispatch({type:"reset"})} style={{padding:'10px',fontSize:'25px'}}> Reset </button>
      <h1>Count: {state.count}</h1>
    </>
  );
}

export default App
