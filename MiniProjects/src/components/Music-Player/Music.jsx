import { useState,useRef } from 'react';
import { BackHome } from '../BackHome';
import { songs } from './songs';
import './Music.css';

export function Music(){
    const audioRef=useRef(null);
    const [currentIndex,setCurrentIndex]=useState(0);
    const [isPlaying,setIsPlaying] = useState(false);

    const togglePlay=()=>{
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return(
        <div className='Music-page'>
            <title>Music Player</title>
            <BackHome />
            <div className='player-card'>
                <img src={songs[currentIndex].cover} className='cover' />
                <h3>{songs[currentIndex].title}</h3>
                <p>{songs[currentIndex].artist}</p>

                <audio ref={audioRef} src={songs[currentIndex].src}></audio>

                <div className='controls'>
                    <button onClick={()=>setCurrentIndex(currentIndex-1)}>⏮</button>
                    <button onClick={togglePlay}>{isPlaying ? "⏸" : "▶️"}</button>
                    <button onClick={()=>setCurrentIndex(currentIndex+1)}>⏭</button>
                </div>
            </div>
        </div>
    );
};