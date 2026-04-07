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
  const sectionRef=useRef(null);
  const {scrollY}=useScroll();
  const {scrollYProgress}=useScroll({target:sectionRef});

  const y=useTransform(scrollY,[0,2000],[0,-500]);
  const x=useTransform(scrollYProgress,[0,1],[500,-500]);
  const rotate = useTransform(scrollYProgress,[0,1],[5,-5]);

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

      <section className="h-50 flex items-center justify-center relative overflow-hidden">
        <motion.div style={{y}} className="absolute text-6xl font-bold opacity-20 text-white">PARALLAX</motion.div>
        <h2>Scroll down</h2>
      </section>

      <section ref={sectionRef} className="h-[200vh] flex items-center overflow-hidden">
        <motion.div style={{x,rotate}} className="flex gap-6 mx-auto">
          {[1,2,3,4].map(i=>(
            <div key={i} className="w-60 h-40 bg-purple-500/20 text-white rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:scale-105 transition">
              Card {i}
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default ScrollAnimation