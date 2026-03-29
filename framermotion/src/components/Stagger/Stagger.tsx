import {motion,type Variants} from "framer-motion";
import { BackHome } from "../BackHome";

const parentVariant:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      repeatType: "reverse" as const,
    },
  },
};

const childVariant:Variants={
    hidden:{opacity:0,y:40,scale:0.6},
    visible:{
        opacity:1,
        y:0,
        scale:[1,1.3,1],
        transition:{
            duration:1,
            ease:"easeInOut" as const,
        },
    },
};

const Stagger = () => {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
        <div className="relative z-50">
            <BackHome/>
        </div>
        <h1 className="p-2 text-center text-5xl font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">
            Stagger Animation
        </h1>
      <motion.div variants={parentVariant} whileHover="visible" initial="hidden" className="absolute inset-0 flex justify-center items-center">
        {[...Array(5)].map((_,index)=>(
            <motion.div key={index} className="h-20 w-20 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 m-3" variants={childVariant}/>
        ))}
      </motion.div>
    </div>
  )
}

export default Stagger