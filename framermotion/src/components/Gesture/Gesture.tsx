import { useState } from "react";
import { BackHome } from "../BackHome"
import { DragGame } from "./DragGame";

type Game="menu" | "drag" | "swipe" | "flick";

const Gesture=()=>{
  const [game,setGame]=useState<Game>("menu");
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome/>
      </div>
      <h1 className="text-center text-5xl font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">Gestures Games</h1>
      {game==="menu" && (
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-6">
          <button onClick={()=>setGame("drag")} 
            className="px-6 py-3 bg-white/10 text-white rounded-lg hover:scale-110 hover:bg-white/20 transition duration-300 cursor-pointer"
          >
            🎯 Drag to Target
          </button>
          <button onClick={()=>setGame("swipe")} 
            className="px-6 py-3 bg-white/10 text-white rounded-lg hover:scale-110 hover:bg-white/20 transition duration-300 cursor-pointer"
          >
            👉 Swipe Challenge
          </button>
          <button onClick={()=>setGame("flick")} 
            className="px-6 py-3 bg-white/10 text-white rounded-lg hover:scale-110 hover:bg-white/20 transition duration-300 cursor-pointer"
          >
            💥 Flick & Throw
          </button>
        </div>
      )}

      {game==="drag" && (
        <DragGame onBack={()=>setGame("menu")}/>
      )}

      {game==="swipe" && (
        <></>
      )}

      {game==="flick" && (
        <></>
      )}

    </div>
  )
}

export default Gesture;