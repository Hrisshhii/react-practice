import { useState } from "react"
import Navigation from "./Navigation"
import { MyBlogs } from "./MyBlogs";
import { Explore } from "./Explore";

const Blogs = () => {
  const [activeTab,setActiveTab]=useState<"my"|"explore">("my");
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation />
      <div className="flex gap-6 px-8 pt-6 text-white justify-center">
        <button onClick={()=>setActiveTab("my")}
          className={` bg-[#1A1C1E] border-none rounded-full text-[1.2rem] p-4 cursor-pointer ${activeTab==="my"?"text-[#b1cbe2]":"text-gray-300"}`}
        >
          MyBlogs
        </button>
        <button onClick={()=>setActiveTab("explore")}
          className={` bg-[#1A1C1E] border-none rounded-full text-[1.2rem] p-4 cursor-pointer ${activeTab==="explore"?"text-[#b1cbe2]":"text-gray-300"}`}
        >
          Explore
        </button>
      </div>
      {activeTab==="my"?<MyBlogs/>:<Explore/>}
    </div>
  )
}

export default Blogs