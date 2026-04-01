import {motion, useSpring} from "framer-motion";
import { BackHome } from "../BackHome";
import type { ChangeEvent } from "react";

const RangeSlider = () => {
  //const scale=useMotionValue(1);
  const scale = useSpring(1);
  const rotate = useSpring(0);
  const radius = useSpring(50);

  const changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    scale.set(+e.target.value);
  };

  const random=(min:number,max:number)=>Math.random()*(max-min)+min;

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome/>
      </div>
      <h1 className="text-center text-5xl p-2 font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">
        Motion Control Panel
      </h1>
      <motion.div className="absolute inset-0 flex justify-center items-center flex-col gap-4">
        <motion.div className="h-28 w-28 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full" style={{scale,rotate,borderRadius:radius}}/>
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col gap-2 backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl">
          <input type="range" min={0.5} max={5} step={0.01} defaultValue={1} onChange={changeHandler}/>
          <input type="range" min={0} max={360} onChange={(e)=>rotate.set(+e.target.value)} />
          <input type="range" min={0} max={100} onChange={(e)=>radius.set(+e.target.value)} />
          <button className="bg-purple-500/60 text-black px-3 py-1 rounded-lg"
            onClick={()=>{
              scale.set(random(0.5,4));
              rotate.set(random(0,360));
              radius.set(random(0,100));
            }}
            
          >
            Crazy
          </button>

          <button className="bg-white/60 px-3 py-1 rounded-lg"
            onClick={()=>{
              scale.set(1);
              rotate.set(0);
              radius.set(50);
            }}
          >
            Reset
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default RangeSlider