/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { BackHome } from "../BackHome"
import {motion} from "framer-motion";

const BouncingLoader = () => {
  const [variant,setVariant]=useState<"bounce"|"wave"|"pulse">("bounce");
  
  function renderVar(){
    return [...Array(3)].map((_,index)=>{
      if(variant==="bounce"){
        return (
          <motion.div key={index} className="m-1 w-4 h-4 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.8)]"
            animate={{
              y:[0,-30,0],
              scale:[1,1.3,1],
            }}
            transition={{
              duration:0.6,
              ease:"easeInOut",
              repeat:Infinity,
              delay: index * 0.2,
            }}
          />
        )
      }
      return (
        <motion.div key={index} className="m-1 w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]"
          animate={{
            scale:[1,1.6,1],
            opacity:[0.5,1,0.5]
          }}
          transition={{
            duration:0.8,
            repeat:Infinity,
            delay: index * 0.2,
          }}
        />
      )
    })
  }

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome />
      </div>
      <h1 className="text-center text-5xl font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">Loader Animation</h1>
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div className="absolute w-40 h-40 rounded-full bg-teal-500/20 blur-3xl"
          animate={{
            scale:[1,1.5,1],
            opacity:[0.3,0.6,0.3],
          }}
          transition={{duration:2, repeat:Infinity}}
        />
        <div className="absolute inset-0 flex justify-center items-center">
          {renderVar()}
        </div>

        <div className="absolute bottom-12 w-full flex justify-center gap-4">
          {["bounce","wave","pulse"].map((type)=>(
            <button key={type} onClick={()=>setVariant(type as any)}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                variant===type ? "bg-white text-black":"bg-white/10 text-white hover:bg-white/20"
              }`}
            >{type}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BouncingLoader