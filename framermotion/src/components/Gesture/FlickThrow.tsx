/* eslint-disable @typescript-eslint/no-explicit-any */
import {motion} from "framer-motion";
import { useRef, useState } from "react";

const FlickThrow=({ onBack }: { onBack: () => void })=>{
  const containerRef=useRef<HTMLDivElement>(null);
  const [score,setScore]=useState(0);
  const [result,setResult]=useState("");
  const [key,setKey]=useState(0);

  const handleThrow=(info:any)=>{
    const {x,y}=info.velocity;
    let direction="";

    if(Math.abs(x)>Math.abs(y)){
      direction=x>600?"right":x<-600?"left":"";
    }else{
      direction=y<-600?"up":y>600?"down":"";
    }

    if(direction==="right"){
      setScore(prev=>prev+1);
      setResult("Hit the target");
    }else{
      setResult("Missed!");
    }

    setTimeout(()=>{
      setKey(prev=>prev+1);
      setResult("");
    },1000);
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white">
      <button onClick={onBack} className="text-white/50 hover:text-white hover:scale-140 transition duration-300 cursor-pointer">
        ← Back
      </button>
      <p>{score}</p>
      <div ref={containerRef}
        className="relative w-[80%] h-[60%] border border-white/10 rounded-xl bg-white/5 backdrop-blur-md overflow-hidden"
      >
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-20 h-20 bg-green-500/30 rounded-xl flex items-center justify-center">🎯</div>
        <motion.div
          key={key}
          drag dragMomentum dragConstraints={containerRef} dragElastic={0.3} onDragEnd={(_e,info)=>handleThrow(info)}
          whileDrag={{
            scale:1.2,
            cursor:"grabbing",
          }}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center cursor-grab font-bold"
        >
          Throw Me
        </motion.div>
      </div>
      <p>{result}</p>
      <p className="text-white/50">Drag and release to throw</p>
    </div>
  )
}

export default FlickThrow