import { useState,useRef,useEffect } from 'react';
import './Hidden.css';
import { BackHome } from '../BackHome';

export function Hidden(){
    const [open,setOpen]=useState(false);
    const inputRef=useRef(null);

    const boxRef=useRef();

    useEffect(()=>{
        const close=(e)=>{
            if(boxRef.current && !boxRef.current.contains(e.target)){
                setOpen(false);
            }
        };
        document.addEventListener("mousedown",close);
        return ()=>document.removeEventListener("mousedown",close);
    },[]);

    useEffect(()=>{
        if(open) inputRef.current.focus();
    },[open]);
    useEffect(()=>{
        const handleKey=(e)=>{
            if(e.key==="Escape") setOpen(false);
        };
        window.addEventListener("keydown",handleKey);
        return ()=>window.removeEventListener("keydown",handleKey)
    },[]);

    return(
        <div className='hidden-search'>
            <BackHome />
            <div ref={boxRef} className={`search-container ${open ? "open" : ""}`}>
                <input 
                    ref={inputRef}
                    type='text'
                    placeholder='Search...'
                />
                <button className="search-button" onClick={()=> setOpen(!open)}>🔍</button>
            </div>
        </div>
    );
};