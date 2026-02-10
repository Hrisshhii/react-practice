import { FaHome, FaUserAstronaut } from "react-icons/fa"
import { BackHome } from "../BackHome"
import { IoMdSettings } from "react-icons/io"

const Navigation = () => {
  return (
    <div className="flex justify-between items-center bg-[#1A1C1E] p-4">
      <BackHome/>
      <div className="relative w-full max-w-md">
        <input type="text" placeholder="Search project..." className="bg-transparent text-white border border-solid rounded-full border-gray-600 w-full text-[1.12rem] p-5"/>
      </div>
      <div className="flex justify-between items-center gap-5">
        <IoMdSettings className="text-gray-600 hover:text-gray-400 cursor-pointer" size={28}/>
        <FaHome className="text-gray-600 hover:text-gray-400 cursor-pointer" size={28}/>
        <FaUserAstronaut className="text-gray-600 hover:text-gray-400 cursor-pointer" size={28}/>
      </div>
      

    </div>
  )
}

export default Navigation