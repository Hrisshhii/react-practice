import { BackHome } from "../BackHome"
import {motion} from "framer-motion";

const Gesture=()=>{
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome/>
      </div>
      <h1 className="text-center text-5xl font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">Gestures</h1>
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div className="w-[15%] h-[30%] bg-red-300 flex justify-center items-center font-bold text-black"
          whileHover={{scale:1.2,rotate:10}}
          transition={{type:"spring",stiffness:300,duration:0.3}}
          whileTap={{borderRadius:400,scale:0.8,backgroundColor:"crimson"}}
          drag dragConstraints={{
            top:-150,
            left:-150,
            right:150,
            bottom:150,
          }}
          dragElastic={0.4}
          dragTransition={{bounceStiffness:300,bounceDamping:15}}
          whileDrag={{
            scale:1.2,cursor:"grabbing"
          }}
          dragMomentum={true}
        >
          Drag Me
        </motion.div>
      </div>
    </div>
  )
}

export default Gesture;