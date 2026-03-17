import {motion} from "framer-motion";
import { BackHome } from "../BackHome";
import { useState } from "react";
import cardFront from "../../assets/card-front.png";
import cardBack from "../../assets/card-back.png";

const FlippingCards = () => {
  const [isFlipped,setIsFlipped]=useState(false);
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome/>
      </div>
      <h1 className="text-center text-5xl font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">Flip Card</h1>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="perspective-[1000px]">
          <motion.div onClick={()=>setIsFlipped(!isFlipped)} className="relative w-60 h-90 cursor-pointer"
            style={{transformStyle:"preserve-3d"}}
            animate={{rotateY:isFlipped?180:0}}
            transition={{duration:0.6}}
            whileHover={{
              rotateX:8,
              rotateY:isFlipped?180:8,
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