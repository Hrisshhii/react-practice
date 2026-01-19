import { useState,useEffect } from 'react';
import { BackHome } from '../BackHome';
import './ToggleBg.css';

export function ToggleBg(){
    const [dark,setDark]=useState(()=>{
        const saved=localStorage.getItem("theme");
        if(saved) return saved==="dark";
        const hour=new Date().getHours();
        return hour>=18 || hour<6;
    });

    const toggleTheme=()=>{
        setDark(prev=>!prev);
    };

    useEffect(()=>{
        localStorage.setItem("theme",dark ? "dark" : "light");
    },[dark]);

    useEffect(()=>{
        const handleKey=(e)=>{
            if(e.key.toLowerCase()==="t") toggleTheme();
        };
        window.addEventListener("keydown",handleKey);
        return ()=>window.removeEventListener("keydown",handleKey);
    },[]);

    return(
        <div className={`toggle-bg ${dark ? "dark" : "light"}`}>
            <title>Toggle Background Theme</title>
            <BackHome />
            <div className="toggle-card">
                <h1>{dark ? "Dark Mode":"Light Mode"}</h1>
                <div className={`switch ${dark ? "on" : ""}`} onClick={toggleTheme}>
                    <div className="thumb">{dark ? "🌙":"☀️"}</div>
                </div>
                <p className="keyhint">Press "T" to toggle</p>
            </div>
        </div>
    );
};