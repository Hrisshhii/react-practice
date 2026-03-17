import {motion, useMotionValue, useTransform} from "framer-motion";
import { BackHome } from "../BackHome";
import { useState } from "react";
import cardFront from "../../assets/card-front.png";
import cardBack from "../../assets/card-back.png";

const FlippingCards = () => {
  const [isFlipped,setIsFlipped]=useState(false);
  const x=useMotionValue(0);
  const y=useMotionValue(0);
  const rotateX=useTransform(y,[-100,100],[15,-15]);
  const rotateY=useTransform(x,[-100,100],[-15,15]);

  const handleMouseMove=(e:React.MouseEvent<HTMLDivElement>)=>{
    const rect=e.currentTarget.getBoundingClientRect();
    const centerX=rect.left+rect.width/2;
    const centerY=rect.top+rect.height/2;
    x.set(e.clientX-centerX);
    y.set(e.clientY-centerY);
  };
  const handleMouseLeave=()=>{
    x.set(0);
    y.set(0);
  };
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome/>
      </div>
      <h1 className="text-center text-5xl font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">Flip Card</h1>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="perspective-[1000px]">
          <motion.div onClick={()=>setIsFlipped(!isFlipped)} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="relative w-60 h-90 cursor-pointer transition"
            style={{
              transformStyle:"preserve-3d",
              rotateX,
              rotateY:isFlipped?180:rotateY,
            }}
            animate={{ y:[0,-10,0] }}
            transition={{
              y:{
                duration:2,
                repeat:Infinity,
                ease:"easeInOut",
              },
              rotateY:{duration:0.6},
            }}
          >
            <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
              <img src={cardFront} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden">
              <img src={cardBack} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  )
}

export default FlippingCards