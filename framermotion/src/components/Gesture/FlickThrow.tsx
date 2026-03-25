import {motion} from "framer-motion";

const FlickThrow=({ onBack }: { onBack: () => void })=>{
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white">
      <button onClick={onBack} className="text-white/50 hover:text-white hover:scale-140 transition duration-300 cursor-pointer">
        ← Back
      </button>
      <motion.div
        drag dragMomentum whileDrag={{scale:1.2}}
        className="w-24 h-24 bg-purple-400 rounded-full flex items-center justify-center cursor-grab"
      >
        Throw Me
      </motion.div>
      <p className="text-white/50">Drag and release to throw</p>
    </div>
  )
}

export default FlickThrow