import { useEffect, useState } from "react"
import { BackHome } from "../BackHome"
import { MdOutlineArrowBackIos } from "react-icons/md";

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
    <aside className={`w-[10%] p-2 ${showNavBar?"bg-[#1A1C1E]":""}`}>
      <BackHome />
      <MdOutlineArrowBackIos onClick={()=>setShowNavbar(!showNavBar)} size={24} 
        className={`text-white/80 hover:text-white/40 cursor-pointer p-2
        ${showNavBar?"":"rotate-180"}`}
      />
      <div className={`p-2 min-h-screen transition ${showNavBar?"":"hidden"}`}>
        <div className="flex flex-col gap-3 ">
          {categories.map(cat=>(
            <button key={cat} className="text-xs md:text-sm bg-white/5 hover:bg-white/10 rounded-md py-2 px-3 border-solid border-white/10 transition text-white cursor-pointer">{cat}</button>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Navigation