import {AnimatePresence, motion} from "framer-motion";
import { BackHome } from "../BackHome";
import { useEffect, useState } from "react";
import type { Card } from "./data";
import { cards } from "./data";

const GlassMorph=()=>{
  const [selected,setSelected]=useState<Card|null>(null);

  useEffect(()=>{
    const handleKey=(e:KeyboardEvent)=>{
      if(e.key==="Escape") setSelected(null);
    };
    window.addEventListener("keydown",handleKey);
    return()=>window.removeEventListener("keydown",handleKey);
  },[]);

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div className="absolute w-180 h-180 rounded-full blur-[220px]"
          animate={{
            scale:[1,1.2,1],
            opacity:[0.6,0.9,0.6],
            background:["radial-gradient(circle, #9333ea 0%, transparent 60%)","radial-gradient(circle, #ec4899 0%, transparent 60%)","radial-gradient(circle, #6366f1 0%, transparent 60%)"]
          }}
          transition={{duration:8,repeat:Infinity}}
        />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card)=>(
            <motion.div key={card.id} layoutId={`card-${card.id}`} whileHover={{scale:1.05,y:-10,boxShadow:"0px 20px 80px rgba(168,85,247,0.4)"}}
              transition={{type:"spring",stiffness:200,damping:20}}  onClick={()=>setSelected(card)}
              className="cursor-pointer p-6 w-72 h-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.2)] text-white flex justify-center items-center"
            >
              <motion.h2 layoutId={`title-${card.id}`} className="text-xl font-semibold">{card.title}</motion.h2>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selected && (
            <>
              <motion.div className="absolute inset-0 bg-black/50 backdrop-blur-lg" 
                initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)}
              />

              <motion.div layoutId={`card-${selected.id}`}
                className="absolute z-20 p-10 w-150 h-100 max-w-[90%] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_80px_rgba(168,85,247,0.4)] text-white flex flex-col"
              >
                <motion.h2 layoutId={`title-${selected.id}`} className="text-3xl font-bold">{selected.title}</motion.h2>
                <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} layoutId={`desc-${selected.id}`} className="mt-4 text-white/60">{selected.description}</motion.p>
                <button onClick={()=>setSelected(null)} className="mt-auto px-6 py-2 bg-white/10 rounded-xl hover:bg-white/20 transition cursor-pointer">Close</button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      
    </div>
  )
}

export default GlassMorph