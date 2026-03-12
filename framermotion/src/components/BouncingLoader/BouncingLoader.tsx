import { BackHome } from "../BackHome"
import {motion} from "framer-motion";
const BouncingLoader = () => {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        {[...Array(3)].map((_,index)=>(
          <motion.div key={index} className="m-1 w-4 h-4 bg-teal-500 rounded-full"
            animate={{y:[0,-30,0]}}
            transition={{
              duration:0.6,
              ease:"easeInOut",
              repeat:Infinity,
              repeatDelay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default BouncingLoader