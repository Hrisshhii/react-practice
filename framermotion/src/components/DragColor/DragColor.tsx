import {motion, useMotionValue} from "framer-motion";
import { BackHome } from "../BackHome"

const DragColor = () => {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome/>
      </div>
      <h1 className="text-center text-5xl p-2 font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">
        Drag Color
      </h1>
      <motion.div className="absolute inset-0 flex justify-center items-center flex-col gap-4"></motion.div>
    </div>
  )
}

export default DragColor