import { FaSearch, FaUser } from "react-icons/fa";
import { BackHome } from "../BackHome";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-16 md:w-20 bg-[#1A1C1E] text-white flex flex-col items-center py-4">
      
      {/* Top Section */}
      <div className="flex flex-col items-center gap-6">
        <BackHome />
        <MdOutlineArrowBackIos size={22} className="opacity-80 hover:opacity-100 transition" />
        <FaUser size={22} className="opacity-80 hover:opacity-100 transition" />
        <FaSearch size={22} className="opacity-80 hover:opacity-100 transition" />
      </div>

      {/* Pushes bottom section down but keeps inside screen */}
      <div className="grow" />

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-6 pb-4">
        <IoMdSettings size={22} className="opacity-80 hover:opacity-100 transition" />
        <FaUser size={22} className="opacity-80 hover:opacity-100 transition mb-2" />
      </div>

    </aside>
  );
};

export default Sidebar;
