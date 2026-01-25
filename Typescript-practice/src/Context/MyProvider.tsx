import { useState, type FC, type ReactNode } from "react";
import { MyContext } from "./MyContext";
interface MyProviderProps{
    children: ReactNode
};

const MyProvider: FC<MyProviderProps>=({children})=>{
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    };
    return <MyContext.Provider value={{count,increment,decrement}}>
        {children}
    </MyContext.Provider>
}; 

export default MyProvider