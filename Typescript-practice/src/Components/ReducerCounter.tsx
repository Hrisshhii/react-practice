import { useReducer } from "react"
import { CounterReducer } from "../Reducers/CounterReducer";

const ReducerCounter = () => {
    const [state,dispatch]=useReducer(CounterReducer,{count:0});
  return (
    <div>
        <h1>Reducer Counter: {state.count}</h1>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>INCREMENT</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>DECREMENT</button>
    </div>
  )
}

export default ReducerCounter