
const Hologram = () => {
  return (
    <div>
      {/* Center Hologram Character */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-72 h-96 flex items-center justify-center animate-float">
          
          {/* Glow Aura */}
          <div className="absolute inset-0 rounded-full blur-3xl 
            bg-cyan-400/20 animate-pulse opacity-20" />

            {/* Character Image */}
            <img
              src="pngwing.com.png"
              className="absolute bottom-0 w-full h-full object-contain 
              drop-shadow-[0_0_30px_rgba(34,211,238,0.8)] 
              animate-holo-flicker"
            />
          </div>
        </div>
      </div>
  )
}

export default Hologram
