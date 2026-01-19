import { useState } from 'react';
import { BackHome } from '../BackHome';
import './Accordion.css';
import {accordionData} from './accordionData.js';

export function Accordion(){
    const [activeId,setActiveId]=useState(null);
    const toggle =(id)=>{
        setActiveId(prev=>(prev===id? null : id));
    };

    const keyDown=(e,i,id)=>{
        if(e.key==="Enter" || e.key===" " || e.key==="Space"){
            e.preventDefault();
            toggle(id);
        }
        if(e.key==="ArrowDown"){
            e.preventDefault();
            document.querySelectorAll(".accordion-header")[i+1]?.focus();
        }
        if(e.key==="ArrowUp"){
            e.preventDefault();
            document.querySelectorAll(".accordion-header")[i-1]?.focus();
        }
    };

    return (
        <div className='accordion-page'>
            <title>Accordion</title>
            <BackHome />
            <div className='accordion'>
                <h1 className='accordion-title'>📂 Accordion</h1>
                {accordionData.map((item,index)=>{
                    const isActive= activeId===item.id;
                    
                    return (
                        <div key={item.id} className={`accordion-item ${activeId===item.id ? "open":""}`}>
                            <button className='accordion-header' onClick={()=>toggle(item.id)} onKeyDown={(e)=>keyDown(e,index,item.id)}>
                                <span>{item.title}</span>
                                <span className='icon'>{activeId === item.id ? "-": "+"}</span>
                            </button>
                            {isActive &&
                                <div className='accordion-content'>
                                    <p>{item.content}</p>
                                </div>
                            }
                        </div>
                    );
                })}
            </div>
        </div>
    );
};