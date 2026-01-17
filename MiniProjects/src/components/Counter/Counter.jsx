import {useState,useEffect} from 'react';
import './Counter.css';
import { BackHome } from '../BackHome';
export const Counter = () => {
    const [count,setCount]=useState(0);
    function increment(){
        return setCount(count+1);
    };
    function decrement(){
        return setCount(count-1);
    };

    useEffect(()=>{
        const handleKey=(e)=>{
            if(e.key==='+') setCount(count=>count+1);
            if(e.key==='-') setCount(count=>count-1);
        };
        window.addEventListener('keydown',handleKey);
        return ()=>window.removeEventListener('keydown',handleKey);
    },[]);
  return (
    <div className='counter'>
        <title>Counter</title>
        <BackHome />
        <div className="counter-card">
            <h1 className="number">{count}</h1>

            <div className='buttons-container'>
                <button onClick={increment} className='increment-but'> + </button>
                <button onClick={decrement} className='decrement-but'> - </button>
                <button onClick={() => setCount(0)} className="reset-but">Reset</button>
            </div>
        </div>
    </div>
  )
}
