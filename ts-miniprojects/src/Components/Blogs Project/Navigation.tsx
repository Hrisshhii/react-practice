import { FaSearch,FaUserCircle } from "react-icons/fa"
import { BackHome } from "../BackHome"

type Props={
  search:string;
  setSearch:(value:string)=>void;
}

const Navigation = ({search,setSearch}:Props) => {
  return (
    <nav className="border-2 text-black border-gray-200 p-4 flex justify-between items-center bg-[#1A1C1E]">
      <BackHome/>
      <div className="flex items-center border-2 rounded-full px-4 py-2 max-w-md">
        <FaSearch className="text-[#b1cbe2] hover:text-[#788b9c]/50 cursor-pointer" size={28}/>
        <input type="text" placeholder="Search..." className="bg-transparent text-white text-[1.12rem] p-4 px-6 rounded-full ml-2 border-2 border-solid border-[#b1cbe2] w-[20vw]" value={search} onChange={e=>setSearch(e.target.value)}/> 
      </div>
      <div className="flex items-center justify-between">
        <FaUserCircle className="text-[#788b9c] hover:text-[#788b9c]/50 cursor-pointer" size={30}/>
      </div>
    </nav>
  )
}

export default Navigation