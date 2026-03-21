/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const directions=["left","right","up","down"] as const;

const getRandomDirection=()=> directions[Math.floor(Math.random()*directions.length)];

const SwipeGame=({onBack}:{onBack:()=>void})=>{
  const [direction,setDirection]=useState<"left"|"right"|"up"|"down">("left");
  const [result,setResult]=useState("");
  const [score,setScore]=useState(0);

  const handleSwipe=(info:any)=>{
    const {offset}=info;
    let detected:typeof direction;

    if(Math.abs(offset.x)>Math.abs(offset.y)){
      detected=offset.x > 0?"right":"left";
    }else{
      detected=offset.y > 0?"down":"up";
    }

    if(detected===direction){
      setResult("Correct");
      setScore((prev)=>prev+1);
    }else{
      setResult(`Wrong! You swiped ${detected}`);
    }

    setTimeout(()=>{
      setDirection(getRandomDirection());
      setResult("");
    },800);
  };


  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white">
      <button onClick={onBack} className="text-white/50 hover:text-white hover:scale-140 transition duration-300 cursor-pointer">
        ← Back
      </button>
      <p className="text-lg text-white/60">Score: {score}</p>

      <p className="text-2xl font-semibold tracking-wide">
        Swipe {" "}
        <span className="text-blue-400 uppercase">{direction}</span>
      </p>
      <div className="w-72 h-72 border border-white/10 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-md">
        <motion.div drag dragConstraints={{top:0,left:0,right:0,bottom:0}}
          dragElastic={0.8} onDragEnd={(e,info)=>handleSwipe(info)}
          whileDrag={{
            scale:1.2,
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          <Circle size={60} className="text-blue-400"/>
        </motion.div>
      </div>
      

      <p className="text-white/60">{result}</p>

    </div>
  )
}

export default SwipeGame