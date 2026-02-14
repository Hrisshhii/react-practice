import { useEffect, useState } from "react"
import { BackHome } from "../BackHome"
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

interface Products{
  id: number;
  title: string;
  category: string;
};

interface FetchResponse{
  products:Products[];
};

const Navigation = () => {
  const [categories,setCategories]=useState<string[]>([]);
  const [showNavBar,setShowNavbar]=useState<boolean>(true);
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
    <aside className={`flex flex-col justify-between p-3 min-h-screen ${showNavBar?"bg-[#1A1C1E] w-[10vw]":"w-[2vw] bg-[#1A1C1E]"}`}>
      <BackHome />
      <div className={`${showNavBar?"text-center":""}`}>
        <MdOutlineArrowBackIos onClick={()=>setShowNavbar(!showNavBar)} size={24} 
          className={`text-white/80 hover:text-white/40 cursor-pointer p-1 
          ${showNavBar?"":"rotate-180"}`}
        />
      </div>
      
      <div className={`p-2 min-h-screen transition ${showNavBar?"":"hidden"}`}>
        <div className="flex flex-col gap-3 ">
          <input type="text" placeholder="Search Items" className="text-[1.2rem] px-3 py-2 text-white/65 bg-transparent border-solid rounded-full focus:outline-none"/>
          <div className="grid grid-cols-2 gap-1.5">
            <input type="text" placeholder="Max" className="text-[1.2rem] px-3 py-2 text-white/65 bg-transparent border-solid rounded-md focus:outline-none"/>
            <input type="text" placeholder="Min" className="text-[1.2rem] px-3 py-2 text-white/65 bg-transparent border-solid rounded-md focus:outline-none"/>
          </div>
          <div className="border-x-2 border-white/25">
            <h2 className="text-center text-white/75">Categories</h2>
          </div>
          {categories.map(cat=>(
            <button key={cat} className="text-xs md:text-sm bg-white/5 hover:bg-white/10 rounded-md py-2 px-3 border-solid border-white/10 transition text-white cursor-pointer">{cat}</button>
          ))}
          <div className="border-x-2 border-white/25">
            <h2 className="text-center text-white/75">Keywords</h2>
          </div>
          {keyword.map((word)=>(
            <button key={word} className="text-xs md:text-sm bg-white/5 hover:bg-white/10 rounded-md py-2 px-3 border-solid border-white/10 transition text-white cursor-pointer">{word}</button>
          ))}
          <button className="mt-3 text-s md:text-sm bg-black/50 hover:bg-black/10 rounded-md py-3 px-3 border-solid border-white/30 transition text-white cursor-pointer">Reset Filters</button>
        </div>
      </div>
      <div  className="text-center">
        <IoMdSettings size={24} className="text-white/80 hover:text-white/40 cursor-pointer p-1 "/>
      </div>
    </aside>
  )
}

export default Navigation