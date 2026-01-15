import { useState } from 'react';
import { Data } from './Context';

const UserProvider=({children})=>{
    const [greet, setGreet] = useState({ greetings: "Hello" });
    const updateGreet=(newGreet)=>{
        setGreet({greetings:newGreet})
    }
    return <Data.Provider value={{greet,updateGreet}}>
        {children}
    </Data.Provider>
}
export {UserProvider};