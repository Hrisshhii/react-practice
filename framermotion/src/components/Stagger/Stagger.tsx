import {motion} from "framer-motion";
import { BackHome } from "../BackHome";

const Stagger = () => {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
        <div className="relative z-50">
            <BackHome/>
        </div>
        <h1 className="text-center text-5xl font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">
            Stagger Animation
        </h1>
    </div>
  )
}

export default Stagger