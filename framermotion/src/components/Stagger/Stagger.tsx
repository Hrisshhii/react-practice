import {motion} from "framer-motion";
import { BackHome } from "../BackHome";

const parentVariant={
    hidden:{opacity:0},
    visible:{
        opacity:1,
        transition:{
            staggerChildren:0.8,
        },
    },
};

const childVariant={
    hidden:{opacity:0,y:20},
    visible:{opacity:1,y:0},
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
      <motion.div variants={parentVariant} initial="hidden" animate="visible" className="absolute inset-0 flex justify-center items-center">
        {[...Array(5)].map((_,index)=>(
            <motion.div key={index} className="h-20 w-20 rounded-full bg-white m-2" variants={childVariant}/>
        ))}
      </motion.div>
    </div>
  )
}

export default Stagger