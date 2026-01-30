import { FaSearch, FaUser } from "react-icons/fa";
import { BackHome } from "../BackHome";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineArrowBackIos } from "react-icons/md";

type Props={
  isActive:"profile"|"inventory"|"settings";
  setIsActive:(tab: "profile"|"inventory"|"settings")=>void;
};

const Sidebar = ({isActive,setIsActive}:Props) => {
  const iconClass=(tab:string)=>
    `cursor-pointer transition ${
      isActive===tab?"text-blue-400 scale-110":"opacity-70 hover:opacity-100"
    }`;
  return (
    <aside className="fixed z-40 bg-[#1A1C1E] text-white flex items-center bottom-0 left-0 w-full h-14 md:top-0 md:left-0 md:h-screen md:w-20 md:flex-col">
      
      {/* Top Section */}
      <div className="flex w-full justify-around md:flex-col md:items-center md:gap-6">
        <BackHome />
        <MdOutlineArrowBackIos size={22} className="opacity-80 hover:opacity-100 transition" onClick={()=>setIsActive("profile")}/>
        <FaUser size={22} className={iconClass("profile")} onClick={()=>setIsActive("profile")}/>
        <FaSearch size={22} className={iconClass("inventory")} onClick={()=>setIsActive("inventory")} />
      </div>

      {/* Pushes bottom section down but keeps inside screen */}
      <div className="grow" />

      {/* Bottom Section */}
      <div className="hidden md:flex flex-col items-center gap-6 pb-4 mb-4">
        <IoMdSettings size={22} className={`${iconClass("settings")} hover: rotate-90 transition-transform duration-300`} onClick={()=>setIsActive("settings")} />
      </div>

    </aside>
  );
};

export default Sidebar;
