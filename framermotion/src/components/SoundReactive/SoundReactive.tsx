import { useEffect, useRef, useState } from "react";
import { BackHome } from "../BackHome";
import music from "../../assets/sounds/music.mp3";
import {motion} from "framer-motion";
import { PlusCircle } from "lucide-react";

const SoundReactive = () => {
  const [isPlaying,setIsPlaying]=useState(false);
  const [trackName, setTrackName]=useState("Default Track");
  const bassRef=useRef(0);
  const [bassLevel,setBassLevel]=useState(0);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const audioRef=useRef<HTMLAudioElement|null>(null);
  const audioContextRef=useRef<AudioContext|null>(null);
  const analyserRef=useRef<AnalyserNode|null>(null);
  const sourceRef=useRef<MediaElementAudioSourceNode|null>(null);

  useEffect(()=>{
    audioRef.current=new Audio(music);
    audioRef.current.loop=true;
  },[])

  const setupAudioContext=()=>{
    if (!audioRef.current) return;
    if(audioContextRef.current) return;

    audioContextRef.current=new AudioContext();
    analyserRef.current=audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 64;

    sourceRef.current=audioContextRef.current.createMediaElementSource(audioRef.current);

    sourceRef.current.connect(analyserRef.current);
    analyserRef.current.connect(audioContextRef.current.destination);
  };

  const startAudio=async ()=>{
    if (!audioRef.current) return;
    setupAudioContext();
    if(audioContextRef.current?.state==="suspended"){
      await audioContextRef.current?.resume();
    }
    await audioRef.current.play();
    setIsPlaying(true);
    animateBars();
  };

  const animateBars=()=>{
    if(!analyserRef.current) return;
    const bufferLen=analyserRef.current.frequencyBinCount;
    const dataArray=new Uint8Array(bufferLen);
    const update=()=>{
      analyserRef.current?.getByteFrequencyData(dataArray);
      const bass=dataArray.slice(0,5).reduce((a,b)=>a+b,0)/5;
      const normalizedBass=bass/255;

      barsRef.current.forEach((bar,i)=>{
        const value=dataArray[i];
        const scale=value/255;
        if(bar){
          bar.style.transform=`scaleY(${Math.max(scale,0.1)})`;
          bar.style.transition="transform 0.08s ease-out";
        }
      });
      requestAnimationFrame(update);
      bassRef.current = normalizedBass;
    };
    update();
  };

  useEffect(() => {
  const interval = setInterval(() => {
    setBassLevel(bassRef.current);
  }, 50);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <BackHome />
      <motion.div className="absolute inset-0 bg-purple-900 blur-3xl -z-10"
        animate={{opacity: 0.2+bassLevel*0.5}}
      />
      <div className="border-white/10 flex items-center justify-center h-screen">
        <div className="backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.5)] p-6 rounded-2xl flex flex-col items-center gap-4">
          <label>
            <PlusCircle className="text-white cursor-pointer"/>
            <input
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={(e) => {
                const file=e.target.files?.[0];
                if (!file) return;

                if (audioRef.current) {
                  audioRef.current.pause();
                }
                if(audioContextRef.current){
                  audioContextRef.current.close();
                  audioContextRef.current=null;
                  analyserRef.current=null;
                  sourceRef.current=null;
                }
                const url=URL.createObjectURL(file);
                audioRef.current=new Audio(url);
                audioRef.current.loop=true;
                setTrackName(file.name);
                setIsPlaying(false);
              }}
            />
          </label>
          
          <button onClick={async ()=>{
            if(!audioRef.current) return;
            if(isPlaying){
              audioRef.current.pause();
              setIsPlaying(false);
            }else{
              startAudio();
            }
            }} 
            className="px-6 py-3 bg-purple-600 text-white rounded-lg cursor-pointer"
          >
            {isPlaying ? "Pause":"Play"}
          </button>
          <h2 className="text-white/20 text-lg font-semibold tracking-wide">{trackName}</h2>
          <div className="flex items-end gap-2 h-40">
            {Array.from({length:32}).map((_,i)=>(
              <div key={i} className="w-1.5 bg-linear-to-t from-purple-500 to-pink-500 rounded"
              ref={(el)=>{barsRef.current[i]=el!}}
              style={{height:"100%"}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoundReactive