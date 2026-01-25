import { createContext } from "react";

interface ContextProps{
    count: number;
    increment: ()=>void;
    decrement:()=>void;
};

export const MyContext=createContext<ContextProps>({
    count: 0,
    increment: ()=>{},
    decrement: ()=>{}
});

