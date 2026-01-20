import { useState,useRef,useEffect } from 'react';
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

    const prevSong=()=>{
        setCurrentIndex((prev)=>{
            const newIndex=prev===0? songs.length-1 : prev-1;
            return newIndex;
        });
        setIsPlaying(true);
    };

    const nextSong=()=>{
        setCurrentIndex((prev)=>{
            const newIndex=prev===songs.length-1? 0 : prev+1;
            return newIndex;
        });
        setIsPlaying(true);
    };

    useEffect(()=>{
        if(isPlaying){
            audioRef.current.play();
        }
    },[currentIndex,isPlaying]);

    return(
        <div className='music-page'>
            <title>Music Player</title>
            <BackHome />
            <div className='player-card'>
                <img src={songs[currentIndex].cover} className='cover' />
                <h3>{songs[currentIndex].title}</h3>
                <p>{songs[currentIndex].artist}</p>

                <audio ref={audioRef} src={songs[currentIndex].src}></audio>

                <div className='controls'>
                    <button onClick={prevSong}>⏮</button>
                    <button onClick={togglePlay}>{isPlaying ? "⏸" : "▶️"}</button>
                    <button onClick={nextSong}>⏭</button>
                </div>
            </div>
        </div>
    );
};