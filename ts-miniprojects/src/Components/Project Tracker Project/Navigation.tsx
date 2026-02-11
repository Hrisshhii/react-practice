import { FaHome, FaUserAstronaut } from "react-icons/fa"
import { BackHome } from "../BackHome"
import { IoMdSettings } from "react-icons/io"

const Navigation = () => {
  return (
    <div className="relative flex justify-between items-center bg-[#1A1C1E] p-4">
      <BackHome/>
      <h1 className="hidden md:block h1-title text-center">
        Project Tracker
      </h1>
      <div className="flex items-center gap-5">
        <IoMdSettings className="text-gray-600 hover:text-gray-400 cursor-pointer" size={28}/>
        <FaHome className="text-gray-600 hover:text-gray-400 cursor-pointer" size={28}/>
        <FaUserAstronaut className="text-gray-600 hover:text-gray-400 cursor-pointer" size={28}/>
      </div> 
    </div>
  )
}

export default Navigation