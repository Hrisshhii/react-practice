import { BackHome } from "../BackHome";
import {useState,useEffect} from 'react';
import { pokemons } from "./PokeDexData";
import './PokeDex.css';

export function PokemonSlider(){
  const [index,setIndex]=useState(0);

  const next=()=>setIndex((i)=>(i+1)%pokemons.length);
  const prev=()=>setIndex((i)=>(i-1+pokemons.length)%pokemons.length);

  useEffect(()=>{ 
    const timer=setInterval(next,4000); 
    return ()=>clearInterval(timer); 
  },[]);

  return (
    <div className="testimonials-page">
      <BackHome />
      <div className='slider'>
        {pokemons.map((t,i)=>{
          const position=
          i=== index ? "active" :
          i===(index+1) % pokemons.length ? "next" :
          i===(index-1+pokemons.length) % pokemons.length ? "prev" : "hidden";

          return (
            <div className={`card ${position}`} key={i}>
              <img src={t.image} alt={t.name} />
              <h3>{t.name}</h3>
              <span className="type">{t.role}</span>
              <p>{t.text}</p>
              <div src={t.image} alt={t.name}>
                {"★".repeat(t.rating)}{"☆".repeat(5-t.rating)}
              </div>
            </div>
          );
        })}
      </div>
      <div className='controls'>
        <button onClick={prev}>⟵</button>
        <button onClick={next}>⟶</button>
      </div>
    </div>
  );
};