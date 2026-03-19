import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowBigDown } from "lucide-react";

export const DragGame = ({ onBack }: { onBack: () => void }) => {
  const containerRef=useRef<HTMLDivElement>(null);
  const [success,setSuccess]=useState(false);
  const [dragPos,setDragPos]=useState({ x:10, y:10 });
  const [targetPos,setTargetPos]=useState({ x:70, y:70 });

  const randomPosition=()=>({
    x: Math.random()*80,
    y: Math.random()*80,
  });

  const spawnNew=()=>{
    setDragPos(randomPosition());
    setTargetPos(randomPosition());
    setSuccess(false);
  };

  const checkCollision=(dragEl: HTMLDivElement,targetEl: HTMLDivElement)=>{
    const dragRect=dragEl.getBoundingClientRect();
    const targetRect=targetEl.getBoundingClientRect();

    return (
      dragRect.right > targetRect.left &&
      dragRect.left < targetRect.right &&
      dragRect.bottom > targetRect.top &&
      dragRect.top < targetRect.bottom
    );
  };

  const dragRef=useRef<HTMLDivElement>(null);
  const targetRef=useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white">

      <button onClick={onBack} className="text-white/50 hover:text-white hover:scale-140 transition duration-300 cursor-pointer">
        ← Back
      </button>

      <div ref={containerRef} className="relative w-[60%] h-[60%] rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
        <motion.div ref={targetRef} className="absolute w-20 h-20 rounded-xl flex items-center justify-center text-xl"
          style={{top: `${targetPos.y}%`,left: `${targetPos.x}%`,}}
          animate={{
            scale: success?1.3:1,
            backgroundColor:success?"#22c55e":"rgba(34,197,94,0.3)",
          }}
        >
          🎯
        </motion.div>

        <motion.div key={`${dragPos.x}-${dragPos.y}`} ref={dragRef} 
          drag dragConstraints={containerRef} dragElastic={0.4}
          className="p-2 bg-red-400 rounded-full flex items-center justify-center text-black font-bold cursor-grab absolute"
          style={{ top:`${dragPos.y}%`,left:`${dragPos.x}%`}}
          whileDrag={{ scale: 1.2,cursor: "grabbing"}}
          onDragEnd={()=>{
            if(dragRef.current && targetRef.current && checkCollision(dragRef.current,targetRef.current)){
              setSuccess(true);
              setTimeout(spawnNew, 800);
            }
          }}
        >
          <ArrowBigDown/>
        </motion.div>
      </div>

      {success && (
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="text-green-400 font-semibold"
        >
          Perfect Drop 🎯
        </motion.p>
      )}
    </div>
  );
};