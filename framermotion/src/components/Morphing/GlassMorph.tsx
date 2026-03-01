import {motion} from "framer-motion";
import { BackHome } from "../BackHome";

const GlassMorph=()=>{
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <BackHome/>
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.div className="w-200 h-200 rounded-full blur-[220px]"
          animate={{
            background:["radial-gradient(circle, #9333ea 0%, transparent 60%)","radial-gradient(circle, #ec4899 0%, transparent 60%)","radial-gradient(circle, #6366f1 0%, transparent 60%)"]
          }}
          transition={{duration:8,repeat:Infinity}}
        />
      </div>
      
    </div>
  )
}

export default GlassMorph