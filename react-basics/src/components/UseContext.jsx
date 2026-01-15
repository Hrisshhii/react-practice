import { createContext, useState } from 'react';

export const Data=createContext({greet:{greetings:""},updateGreet:()=>{}});

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