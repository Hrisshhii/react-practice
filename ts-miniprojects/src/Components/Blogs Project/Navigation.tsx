import { FaSearch,FaUserCircle } from "react-icons/fa"
import { BackHome } from "../BackHome"

type Props={
  search:string;
  setSearch:(value:string)=>void;
}

const Navigation = ({search,setSearch}:Props) => {
  return (
    <nav className=" text-black p-4 flex justify-between items-center bg-[#1A1C1E]">
      <BackHome/>
      <div className="relative w-full max-w-md">
        <div className="absolute left-4 inset-y-0 flex items-center pointer-events-none">
          <FaSearch className="text-[#b1cbe2]" size={18} />
        </div>
        <input type="text" placeholder="Search..." className="w-full bg-transparent text-white text-[1.12rem] pl-12 pr-4 py-4 rounded-full border border-solid border-[#b1cbe2] " value={search} onChange={e=>setSearch(e.target.value)}/> 
      </div>
      <div className="flex items-center justify-between">
        <FaUserCircle className="text-[#788b9c] hover:text-[#788b9c]/50 cursor-pointer" size={30}/>
      </div>
    </nav>
  )
}

export default Navigation