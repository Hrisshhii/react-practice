import { useEffect, useRef, useState } from "react";
import { BackHome } from "../BackHome";
import music from "../../assets/sounds/music.mp3";

const SoundReactive = () => {
  const [isPlaying,setIsPlaying]=useState(false);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const audioRef=useRef<HTMLAudioElement|null>(null);
  const audioContextRef=useRef<AudioContext|null>(null);
  const analyserRef=useRef<AnalyserNode|null>(null);
  const sourceRef=useRef<MediaElementAudioSourceNode|null>(null);

  useEffect(()=>{
    audioRef.current=new Audio(music);
    audioRef.current.loop=true;
  },[])

  const startAudio=async ()=>{
    if(!audioRef.current) return;
    if(!audioContextRef.current){
      audioContextRef.current=new AudioContext();
      analyserRef.current=audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize=64;

      sourceRef.current=audioContextRef.current.createMediaElementSource(audioRef.current);
      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
    }
    await audioContextRef.current.resume();
    audioRef.current.play();
    setIsPlaying(true);
    animateBars();
  };

  const animateBars=()=>{
    if(!analyserRef.current) return;
    const bufferLen=analyserRef.current.frequencyBinCount;
    const dataArray=new Uint8Array(bufferLen);
    const update=()=>{
      analyserRef.current?.getByteFrequencyData(dataArray);

      barsRef.current.forEach((bar,i)=>{
        const value=dataArray[i];
        const scale=value/255;
        if(bar){
          bar.style.transform=`scaleY(${Math.max(scale,0.1)})`;
        }
      });
      requestAnimationFrame(update);
    };
    update();
  };

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <BackHome />
      <div className="flex flex-cols justify-center items-center h-screen gap-10">
        <input type="file" accept="audio/*" onChange={(e)=>{
          const file=e.target.files?.[0];
          if(file){
            audioRef.current=new Audio(URL.createObjectURL(file));
          }
        }} />
        <button onClick={()=>{startAudio()}} className="px-6 py-3 bg-purple-600 text-white rounded-lg">
          {isPlaying?"Playing...":"Play Music"}
        </button>
        <div className="flex items-end gap-2 h-40">
          {Array.from({length:32}).map((_,i)=>(
            <div key={i} className="w-2 bg-linear-to-t from-purple-500 to-pink-500 rounded"
            ref={(el)=>{barsRef.current[i]=el!}}
            style={{height:"100%"}}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SoundReactive