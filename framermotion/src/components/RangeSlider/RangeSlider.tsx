import {motion, useMotionValue} from "framer-motion";
import { BackHome } from "../BackHome";
const RangeSlider = () => {
  const scale=useMotionValue(1);
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome/>
      </div>
      <h1 className="text-center text-5xl p-2 font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">
        Range Slider
      </h1>
      <motion.div></motion.div>
    </div>
  )
}

export default RangeSlider