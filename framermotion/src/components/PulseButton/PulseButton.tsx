import { AnimatePresence, motion,useMotionValue,useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BackHome } from "../BackHome";
import { MousePointer2 } from "lucide-react";
import waterDrop from "../../assets/sounds/water-drop.mp3";

interface Ripple{
  id:number;
  x:number;
  y:number;
}

const PulseButton = () => {
  const [clicked, setClicked] = useState(false);
  const [ripples,setRipples]=useState<Ripple[]>([]);
  const [screenRipples,setScreenRipples]=useState<Ripple[]>([]);
  const audioRef=useRef<HTMLAudioElement|null>(null);
  useEffect(()=>{
    audioRef.current=new Audio(waterDrop);
    audioRef.current.volume=0.5;
  },[]);

  const x=useMotionValue(0);
  const y=useMotionValue(0);

  const springX=useSpring(x,{stiffness:150,damping:15});
  const springY=useSpring(y,{stiffness:150,damping:15});

  const handleMouseMove=(e:React.MouseEvent<HTMLButtonElement>)=>{
    const rect=e.currentTarget.getBoundingClientRect();
    const centerX=rect.left+rect.width/2;
    const centerY=rect.top+rect.height/2;

    const deltaX=(e.clientX-centerX)*2;
    const deltaY=(e.clientY-centerY)*2;

    x.set(deltaX);
    y.set(deltaY);
  }
  
  const handleMouseLeave=()=>{
    x.set(0);
    y.set(0);
  }

  const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
    if(audioRef.current){
      audioRef.current.currentTime=0;
      audioRef.current.playbackRate=0.9+Math.random()*0.2;
      audioRef.current.play();
    }
    setClicked(prev=>!prev);

    const rect=e.currentTarget.getBoundingClientRect();
    const newRipple={
      id:Date.now(),
      x:e.clientX-rect.left,
      y:e.clientY-rect.top
    };
    const buttonCenterX=rect.left+rect.width/2;
    const buttonCenterY=rect.top+rect.height/2;

    const screenRipple={
      id:Date.now()+1,
      x:buttonCenterX,
      y:buttonCenterY
    };

    setScreenRipples(prev=>[...prev,screenRipple])
    setRipples(prev=>[...prev,newRipple]);
    setTimeout(()=>{
      setRipples(prev=>prev.filter(r=>r.id!==newRipple.id));
    },600);
    setTimeout(()=>{
      setScreenRipples(prev=>prev.filter(r=>r.id!==screenRipple.id));
    },1500);
  };

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <BackHome />

      <AnimatePresence>
        {screenRipples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none bg-blue-400/20"
            style={{
              top: ripple.y,
              left: ripple.x,
              width: 40,
              height: 40
            }}
            initial={{
              scale: 0,
              opacity: 0.5,
              x: "-50%",
              y: "-50%"
            }}
            animate={{
              scale: 90,
              opacity: 0
            }}
            transition={{
              duration: 5,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>

      <div className="flex justify-center items-center h-screen">
        <motion.button
          onClick={handleClick}
          style={{x:springX,y:springY}}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative text-white bg-blue-500 rounded-full p-4 text-xl cursor-pointer overflow-hidden"
          animate={clicked ? { scale: [1,1.2,1], backgroundColor:"#22c55e"}:{ scale: [1,1.1,1]}}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            repeat: clicked ? 0 : Infinity
          }}
        >
          <AnimatePresence>
            {ripples.map((ripple) => (
              <motion.span
                key={ripple.id}
                className="absolute bg-white/40 rounded-full pointer-events-none"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: 20,
                  height: 20
                }}
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 8, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            ))}
          </AnimatePresence>

          <span className="relative z-10">
            <MousePointer2 />
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default PulseButton;