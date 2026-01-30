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
    <aside className="fixed z-50 bg-[#1A1C1E] text-white 
          flex items-center justify-around py-2
          bottom-0 left-0 w-full h-16 md:top-0 md:left-0 md:h-screen md:w-20 md:flex-col md:justify-start md:py-4">
      
      {/* Desktop only */}
      <div className="hidden md:flex flex-col items-center gap-6">
        <BackHome />
        <MdOutlineArrowBackIos
          size={22}
          className="opacity-80 hover:opacity-100 transition"
          onClick={() => setIsActive("profile")}
        />
        <FaUser
          size={22}
          className={iconClass("profile")}
          onClick={() => setIsActive("profile")}
        />
        <FaSearch
          size={22}
          className={iconClass("inventory")}
          onClick={() => setIsActive("inventory")}
        />
      </div>

      {/* Mobile bottom bar */}
      <div className="flex w-full justify-around md:hidden">
        <FaUser
          size={24}
          className={iconClass("profile")}
          onClick={() => setIsActive("profile")}
        />
        <FaSearch
          size={24}
          className={iconClass("inventory")}
          onClick={() => setIsActive("inventory")}
        />
        <IoMdSettings
          size={24}
          className={iconClass("settings")}
          onClick={() => setIsActive("settings")}
        />
      </div>

      {/* Desktop settings */}
      <div className="hidden md:flex mt-auto mb-10">
        <IoMdSettings
          size={22}
          className={`${iconClass("settings")} hover:rotate-90 transition-transform`}
          onClick={() => setIsActive("settings")}
        />
      </div>

    </aside>
  );
};

export default Sidebar;
