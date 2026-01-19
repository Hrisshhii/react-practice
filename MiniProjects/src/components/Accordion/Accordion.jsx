import { useState } from 'react';
import { BackHome } from '../BackHome';
import './Accordion.css';
import {accordionData} from './accordionData.js';

export function Accordion(){
    const [activeId,setActiveId]=useState(null);
    const toggle =(id)=>{
        setActiveId(prev=>(prev===id? null : id));
    };

    return (
        <div className='accordion-page'>
            <BackHome />
            <div className='accordion'>
                <h1 className='accordion-title'>📂 Accordion</h1>
                {accordionData.map(item=>{
                    const isActive= activeId===item.id;
                    
                    return (
                        <div key={item.id} className={`accordion-item ${activeId===item.id ? "open":""}`}>
                            <button className='accordion-header' onClick={()=>toggle(item.id)}>
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