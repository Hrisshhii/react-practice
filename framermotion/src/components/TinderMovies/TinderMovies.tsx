import {motion, useMotionValue, useTransform} from "framer-motion";
import { BackHome } from "../BackHome";
import { useState } from "react";

const movies=[
  { id: 1, title: "Pulp Fiction", image: "https://image.tmdb.org/t/p/original/AmyQTQsNxITitCM0Ya5l5bpYGpn.jpg" },
  { id: 2, title: "Kill Bill Vol. 1", image: "https://image.tmdb.org/t/p/w500/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg" },
  { id: 3, title: "Django Unchained", image: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg" },
  { id: 4, title: "Jurassic Park", image: "https://image.tmdb.org/t/p/w500/9i3plLl89DHMz7mahksDaAo7HIS.jpg" },
  { id: 5, title: "Jaws", image: "https://image.tmdb.org/t/p/original/tjbLSFwi0I3phZwh8zoHWNfbsEp.jpg" },
  { id: 6, title: "E.T.", image: "https://image.tmdb.org/t/p/w500/an0nD6uq6byfxXCfk6lQBzdL2J1.jpg" },
  { id: 7, title: "Pather Panchali", image: "https://image.tmdb.org/t/p/original/frZj5djlU9hFEjMcL21RJZVuG5O.jpg" },
  { id: 8, title: "Aparajito", image: "https://image.tmdb.org/t/p/original/qvR2Qs42WHwCEcuwhQnterU3gVY.jpg" },
  { id: 9, title: "Apur Sansar", image: "https://image.tmdb.org/t/p/w1280/6Tz1Q69o2n3Zwb0ZffzPL0nFt2T.jpg" },
  { id: 10, title: "The Apartment", image: "https://image.tmdb.org/t/p/original/tRkUPRexT0qbBcSczaGJ4fGq6OJ.jpg" },
  { id: 11, title: "Sunset Boulevard", image: "https://image.tmdb.org/t/p/w1280/zt8aQ6ksqK6p1AopC5zVTDS9pKT.jpg" },
  { id: 12, title: "Interstellar", image: "https://image.tmdb.org/t/p/original/iawqQdFKI7yTUoSkDNP8gyV3J3r.jpg" },
  { id: 13, title: "The Dark Knight", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
  { id: 14, title: "Fight Club", image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg" },
  { id: 15, title: "The Shawshank Redemption", image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },
  { id: 16, title: "Forrest Gump", image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg" },
  { id: 17, title: "The Godfather", image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },
  { id: 18, title: "Whiplash", image: "https://image.tmdb.org/t/p/original/iIyUXPMR8F7bPPbPXFFWn9qUinh.jpg" },
  { id: 19, title: "Parasite", image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { id: 20, title: "La La Land", image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg" },
];

export const TinderMovies = () => {
  const [index,setIndex]=useState(0);
  const [feedback,setFeedback]=useState<"like"|"nope"|null>();

  const x=useMotionValue(0);
  const rotate=useTransform(x,[-200,200],[-15,15]);

  const swipe=(dir:"left"|"right")=>{
    setFeedback(dir==="right"?"like":"nope");
    setTimeout(() => {
      setFeedback(null);
      setIndex(prev=>prev+1)
      x.set(0);
    },400);
    
  };

  const handleDragEnd=(_:any,info:any)=>{
    if(info.offset.x>100){
      x.set(500);
      swipe("right");
    }else if(info.offset.x<-100){
      x.set(-500);
      swipe("left")
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative z-50">
        <BackHome />
      </div>
      <h1 className="text-center text-5xl font-bold bg-clip-text bg-linear-to-r from-white to-blue-400 text-transparent tracking-wide">
        Tinder Movies
      </h1>
      <div className="relative h-160 flex justify-center mt-20">
        {feedback && (
          <motion.div initial={{scale:0,opacity:0}} animate={{scale:1.5,opacity:0.8}} exit={{opacity:0}}
            transition={{type:"spring",stiffness:200}} className="absolute text-6xl z-50"
          >
            {feedback==="like"?"❤️":"💔"}
          </motion.div>
        )}

        {movies.slice(index,index+3).map((movie,i)=>{
          const isTop= i === 0;
          return (
            <motion.div key={movie.id} className="absolute w-80 h-125 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                zIndex:10-i,
                scale:1-i*0.05,
                y:i*10,
                x:isTop?x:0,
                rotate:isTop?rotate:0,
              }}
              drag={isTop?"x":false}
              dragConstraints={{left:0,right:0}}
              onDragEnd={isTop?handleDragEnd:undefined}
              whileTap={isTop?{cursor:"grabbing"}:{}}
            >
              <img src={movie.image} className="w-full h-full object-cover pointer-events-none" />

              <div className="absolute bottom-0 w-full bg-linear-to-t from-black/80 to-transparent p-4">
                <h2 className="text-white text-xl font-bold">{movie.title}</h2>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  )
}
