
type Theme = "default" | "blue" | "purple" | "green";

const holoStyles: Record<Theme, { aura: string; glow: string }> = {
  default: {
    aura: "bg-cyan-400/20",
    glow: "drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]",
  },
  blue: {
    aura: "bg-blue-400/20",
    glow: "drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]",
  },
  purple: {
    aura: "bg-purple-400/20",
    glow: "drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]",
  },
  green: {
    aura: "bg-green-400/20",
    glow: "drop-shadow-[0_0_30px_rgba(34,197,94,0.8)]",
  },
};

type Props={
  theme: "default" | "blue" | "purple" | "green";
  size?:"small" | "normal";
};

const Hologram = ({ theme,size="normal" }:Props) => {
  const styles = holoStyles[theme] || holoStyles.default;
const sizeClass=size==="small"?"w-40 h-56":"w-72 h-96";
  return (
    <div className="pointer-events-none">
      <div className={`${size==="small"?"relative":"absolute right-10 top-[55%] -translate-y-1/2 opacity-80 pointer-events-none"}`}>
        <div className={`relative ${sizeClass} flex items-center justify-center animate-float`}>
          
          {/* Glow Aura */}
          <div
            className={`absolute inset-0 rounded-full blur-3xl animate-pulse opacity-30 ${styles.aura}`}
          />

          {/* Character Image */}
          <img
            src="pngwing.com.png"
            className={`absolute bottom-0 w-full h-full object-contain animate-holo-flicker ${styles.glow}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hologram;

