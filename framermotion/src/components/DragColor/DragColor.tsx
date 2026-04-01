import {motion, useMotionValue, useMotionValueEvent, useTransform} from "framer-motion";
import { BackHome } from "../BackHome"
import { Copy } from "lucide-react";
import { useState } from "react";

const DragColor = () => {
  const [color,setColor]=useState("");

  const x=useMotionValue(0);
  const y=useMotionValue(0);
  const hue=useTransform(x,[-400,400],[0,360]);
  const lightness=useTransform(y,[-300,300],[30,70]);

  const backgroundColor=useTransform([hue,lightness],([h,l])=>`hsl(${h},80%,${l}%)`);
  useMotionValueEvent(backgroundColor,"change",(latest)=>setColor(latest));

  const copyColor=async()=>{
    try{
      await navigator.clipboard.writeText(color);
      alert("Color: "+color);
    }catch(err){
      alert("Failed to copy!!"+err)
    };
  };

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome/>
      </div>
      <h1 className="text-center text-5xl p-2 font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">
        Drag Color
      </h1>
      <motion.div className="absolute inset-0 flex justify-center items-center flex-col gap-4">
        <motion.div className="w-24 h-24 flex items-center justify-center rounded-full cursor-grab"
          drag
          dragConstraints={{
            left:-400, right:400, top:-300, bottom:300,
          }}
          style={{x,y,backgroundColor}}
        >
          <Copy className="cursor-pointer text-white/50" onClick={copyColor}/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DragColor