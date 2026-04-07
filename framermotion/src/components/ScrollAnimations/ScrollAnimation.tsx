import { useRef } from "react";
import { BackHome } from "../BackHome"
import { useInView,motion, useScroll, useTransform } from "framer-motion";

const Reveal=({children}:{children:React.ReactNode}) => {
  const ref=useRef(null);
  const isInView=useInView(ref,{once:true});

  return (
    <motion.div ref={ref} initial={{opacity:0,y:60}} animate={isInView?{opacity:1,y:0}:{}} transition={{duration:0.6}}>
      {children}
    </motion.div>
  );
};


const ScrollAnimation=()=>{
  const {scrollY}=useScroll();
  const y=useTransform(scrollY,[0,2000],[0,-1000])

  return (
    <div className="relative bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome />
      </div>
      <h1 className="text-center text-5xl font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">
        Scroll Animations
      </h1>

      <section className="h-screen flex flex-col items-center justify-center gap-6">
        {[1,2,3].map(i=>(
          <Reveal key={i}>
            <div className="p-6 bg-white/10 rounded-xl text-white">
              Card {i}
            </div>
          </Reveal>
        ))}
      </section>

      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{y}} className="absolute text-6xl font-bold opacity-20 text-white">PARALLAX</motion.div>
        <h2>Scroll down</h2>
      </section>
    </div>
  )
}

export default ScrollAnimation