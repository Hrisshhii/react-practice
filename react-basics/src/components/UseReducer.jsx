import { useReducer,useState } from "react";
import { initialState,reducer } from "./Counter";

const UseReducer=()=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const [inputVal,setInputVal]=useState(0);
    return (
        <>
            <button onClick={()=>dispatch({type:"increment"})} style={{padding:'10px',fontSize:'25px'}}> + </button>
            <button onClick={()=>dispatch({type:"decrement"})} style={{padding:'10px',fontSize:'25px'}}> - </button>
            <button onClick={()=>dispatch({type:"reset"})} style={{padding:'10px',fontSize:'25px'}}> Reset </button>
            <div>
                <input type="number" value={inputVal} onChange={e=>setInputVal(Number(e.target.value))}></input>
                <button onClick={()=>{
                        dispatch({type:'incrByAmount',payload:inputVal});
                        setInputVal(0);
                    }}>Add</button>
                <button onClick={()=>{
                        dispatch({type:'decrByAmount',payload:inputVal});
                        setInputVal(0);
                    }}>Sub</button>
            </div>
            <h1>Count: {state.count}</h1>
        </>
    );
}

export {UseReducer}