import { useState } from "react";
import { BackHome } from "../BackHome";
import { AnimatePresence,motion } from "framer-motion";

interface Particle{
  id:number;
  angle:number;
  distance:number;
  color:string;
  size:number;
  duration:number;
  scaleEnd:number;
  rotation:number;
}

export default function ExplosionButton(){
  const [particles,setParticles]=useState<Particle[]>([]);
  const [exploded,setExploded]=useState(false);

  const handleClick=()=>{
    const newParticles: Particle[]=Array.from({length:150}).map((_,i)=>{
      const hue = Math.random()*60;
      return {
        id: Date.now()+i,
        angle: Math.random()*360,
        distance: 350+Math.random()*700,
        color:`hsl(${hue},90%,${50+Math.random()*20}%)`,
        size:6+Math.random()*18,
        duration:0.6+Math.random()*0.6,
        scaleEnd:Math.random()*0.5,
        rotation:Math.random()*720
      };
    });

    setParticles(newParticles);
    setExploded(true);
    setTimeout(()=>{
      setParticles([]);
      setExploded(false);
    },800)
  };

  return(
    <div className="relative h-screen bg-black overflow-hidden">
      <BackHome/>
  
      <motion.div className="flex justify-center items-center h-screen"
        animate={exploded?{
          x:[0,-15,15,-10,10,-5,5,0],
          y:[0,-15,15,-10,10,-5,5,0],
          rotate:[0,-1,1,-0.5,0.5,0]
        }:{}}
        transition={{duration:0.4}}
      >
        <AnimatePresence>
          {!exploded && (
            <motion.button onClick={handleClick}
              className="relative px-10 py-5 text-xl font-semibold text-white rounded-2xl cursor-pointer overflow-hidden bg-linear-to-r from-red-600 via-orange-500 to-yellow-400 shadow-[0_0_15px_rgba(255,100,0,0.6)]"
              initial={{scale:1}}
              whileTap={{scale:0.85}}
              animate={exploded?{scale:1.6,opacity:0}:{scale:[1,1.05,1]}}
              transition={{duration:0.6,ease:"easeInOut",repeat:exploded?0:Infinity}}
              exit={{scale:0}}
            >
              <span className="relative z-10">EXPLODE</span>
              <motion.div
                className="absolute top-0 -left-full w-full h-full bg-white/20"
                animate={{ left: ["-100%", "120%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {exploded && (
            <motion.div
              className="absolute w-40 h-40 bg-[#ffa194] rounded-full blur-2xl"
              initial={{scale:0,opacity:0.6}}
              animate={{scale: 2,opacity:0}}
              exit={{opacity:0}}
              transition={{duration:0.3}}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {particles.map((p)=>{
            const rad=(p.angle*Math.PI)/180;
            const x=Math.cos(rad)*p.distance;
            const y=Math.sin(rad)*p.distance;
            return(
              <motion.span key={p.id}
                className="absolute rounded-full "
                style={{
                  backgroundColor:p.color,
                  width:p.size,
                  height:p.size
                }}
                initial={{x:0,y:0,opacity:1,scale:1}}
                animate={{
                  x:x+200,y:y+100,
                  opacity:0,
                  scale:p.scaleEnd,
                  rotate:p.rotation
                }}
                transition={{duration:p.duration,ease:"easeOut"}}
              />
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}