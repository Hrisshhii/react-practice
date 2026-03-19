import { BackHome } from "../BackHome"


const Gesture=()=>{
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="relative z-50">
        <BackHome/>
      </div>
      <h1 className="text-center text-5xl font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">Gestures</h1>
    </div>
  )
}

export default Gesture;