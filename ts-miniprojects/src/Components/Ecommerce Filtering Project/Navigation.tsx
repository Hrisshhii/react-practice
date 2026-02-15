import { useEffect, useState } from "react"
import { BackHome } from "../BackHome"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";

interface Products{
  id: number;
  title: string;
  category: string;
};

interface FetchResponse{
  products:Products[];
};

interface Props {
  showNavBar: boolean;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation=({ showNavBar,setShowNavbar}:Props)=>{
  const [categories,setCategories]=useState<string[]>([]);
  const [keyword]=useState<string[]>(
    ["apple","watch","fashion","trend","shoes","shirts"]
  );

  useEffect(()=>{
    const fetchCat=async()=>{
      try{
        const response=await fetch("https://dummyjson.com/products");
        const data:FetchResponse=await response.json();
        const uniqueCat=[
          ...new Set(data.products.map(p=>p.category))
        ];
        setCategories(uniqueCat);
      }catch(error){
        console.error("Error Fetching Products",error);
      }
    };
    fetchCat();
  },[]);

  return (
    <aside className={`fixed top-0 left-0 z-50 h-screen bg-[#1A1C1E] font-mono transition-all duration-500 ${showNavBar ? "translate-x-0 w-64" : "-translate-x-full w-16"}`}>
      <div className="px-3 pb-2 pt-6">
        <BackHome />
        <div className={`text-center pt-4`}>
          {showNavBar?(
            <MdOutlineArrowBackIos onClick={()=>setShowNavbar(!showNavBar)} size={24} 
              className="text-white/80 hover:text-white/40 cursor-pointer transition-all duration-500"
            />
          ):(
            <MdOutlineArrowForwardIos onClick={()=>setShowNavbar(!showNavBar)} size={24} 
              className="text-white/80 hover:text-white/40 cursor-pointer transition-all duration-500"
            />
          )}
        </div>
      </div>
      
      <div className={`flex-1 overflow-y-auto overflow-x-hidden scrollbar-hidden px-3 transition ${showNavBar?"":"hidden"}`}>
        <div className="flex flex-col gap-2 ">
          <input type="text" placeholder="Search Items . . . " className="text-[1.15rem] px-3 py-3 text-[#bbc9ee] bg-transparent border-solid rounded-full focus:outline-none"/>
          <div className="grid grid-cols-2 gap-1.5">
            <input type="text" placeholder="Max" className="text-[1.1rem] px-3 py-1.5 text-[#bbc9ee] bg-transparent border-solid rounded-lg focus:outline-none"/>
            <input type="text" placeholder="Min" className="text-[1.1rem] px-3 py-1.5 text-[#bbc9ee] bg-transparent border-solid rounded-lg focus:outline-none"/>
          </div>
          
          <div  className="relative">
            <div className="h-px bg-[#bbc9ee]/90 w-full absolute top-1/2 -translate-y-1/2"/>
            <h2 className="relative text-center text-[#bbc9ee] bg-[#1A1C1E] px-3 w-fit mx-auto">Categories</h2>
          </div>

          {categories.map(cat => (
            <label key={cat} className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-white/5 transition">
              <span className="text-[1.2rem] text-white/75 capitalize">
                {cat}
              </span>

              <input
                type="radio"
                name="category"
                value={cat}
                className="accent-[#6a8ce9] cursor-pointer"
              />
            </label>
          ))}
          <div  className="relative">
            <div className="h-px bg-[#bbc9ee]/90 w-full absolute top-1/2 -translate-y-1/2"/>
            <h2 className="relative text-center text-[#bbc9ee] bg-[#1A1C1E] px-3 w-fit mx-auto">Keywords</h2>
          </div>
          {keyword.map((word)=>(
            <button key={word} className="font-mono text-xs md:text-sm bg-white/5 hover:bg-white/10 rounded-md py-2 px-3 border-solid border-white/10 transition text-white cursor-pointer">{word}</button>
          ))}

          <div className="relative my-4">
            <div className="h-px bg-[#bbc9ee] w-full absolute top-1/2 -translate-y-1/2"/>
          </div>

          <button className="font-mono mt-1 text-sm text-semibold bg-black/50 hover:bg-black/10 rounded-md py-3 px-3 border-solid border-white/30 transition text-white cursor-pointer">Reset Filters</button>
        </div>
      </div>
      <div className={`px-3 py-4 flex flex-col items-center gap-4`}>
        <IoMdSettings size={24} className="text-white/80 hover:text-white/40 cursor-pointer p-1 "/>
        <FaUser size={24} className="text-white/80 hover:text-white/40 cursor-pointer p-1 "/>
      </div>
    </aside>
  )
}

export default Navigation