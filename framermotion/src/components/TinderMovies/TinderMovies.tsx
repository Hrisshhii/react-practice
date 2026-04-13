import {motion, useMotionValue, useTransform} from "framer-motion";
import { BackHome } from "../BackHome";
import { useState } from "react";

const movies=[
  { id: 1, title: "Inception", image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" },
  { id: 2, title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
  { id: 3, title: "The Dark Knight", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
];

export const TinderMovies = () => {
  const [index,setIndex]=useState(0);

  const x=useMotionValue(0);
  const rotate=useTransform(x,[-200,200],[-15,15]);
  const opacity=useTransform(x,[-200,0,200],[0,1,0]);

  const swipe=(dir:"left"|"right")=>{
    setIndex(prev=>prev+1)
    x.set(0);
  };

  const handleDragEnd=(_:any,info:any)=>{
    if(info.offset.x>100){
      swipe("right");
    }else if(info.offset.x<-100){
      swipe("left")
    }
  };

  const movie=movies[index];
  if(!movie){
    return <div className="text-white text-center mt-20">No more movies 🎬</div>;
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative z-50">
        <BackHome />
      </div>
      <h1 className="text-center text-5xl font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">
        Tinder Movies
      </h1>
      <div className="relative h-screen flex justify-center items-center">
        <motion.div className="absolute w-80 h-125 rounded-2xl overflow-hidden shadow-2xl cursor-grab"
          style={{x,rotate,opacity}}
          drag="x"
          dragConstraints={{left:0,right:0}}
          onDragEnd={handleDragEnd}
          whileTap={{cursor:"grabbing"}}
        >
          <img src={movie.image} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full bg-linear-to-t from-black/80 to-transparent p-4">
            <h2 className="text-white text-xl font-bold">{movie.title}</h2>
          </div>
        </motion.div>
      </div>
      
    </div>
  )
}
