import { useEffect, useState } from "react";
import { FaCamera, FaPencilAlt } from "react-icons/fa";
import { items } from "./data/items";

const equippedId=Number(localStorage.getItem("equipped"))
const equippedItem=items.find((i)=>i.id===equippedId);

export const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://images.wallpapersden.com/image/download/starry-landscape-4k-cool-blue-moon_bW5tbG6UmZqaraWkpJRmaWVlrWllZQ.jpg"
  );
  const [profileUrl, setProfileUrl] = useState(
    "https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
  );
  const [username,setUsername]=useState(
    localStorage.getItem("username")||"Player One"
  );
  const [editing,setEditing]=useState<boolean>(false);

  useEffect(()=>{
    localStorage.setItem("banner",bannerUrl);
    localStorage.setItem("avatar",profileUrl);
    localStorage.setItem("username",username);
  },[bannerUrl,profileUrl,username]);

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative flex-1 ml-20">
    {/* Banner */}
      <div className="relative">
        <img src={bannerUrl} alt="Background" className="w-full h-60 object-cover" />
        <label
          htmlFor="banner-upload"
          className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600 shadow"
        >
          <FaCamera size={20} />
        </label>
        <input
          type="file"
          id="banner-upload"
          accept="image/*"
          className="hidden"
          onChange={handleBannerChange}
        />
      </div>

      {/* Profile Image */}
      <div className="relative ml-6 -mt-20 w-fit">
        <img
            src={profileUrl}
            alt="User"
            className="w-40 h-40 object-cover rounded-full border-4 border-white bg-black"
        />
        <label
            htmlFor="profile-upload"
            className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600 shadow"
        >
            <FaCamera size={16} />
        </label>
        <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
        />
      </div>
      {/*Username*/}
      <div className="ml-6 mt-3 flex items-center gap-2">
        {editing ? (
          <input 
            value={username} 
            onChange={e=>setUsername(e.target.value)}
            onBlur={()=>setEditing(false)}
            className="bg-transparent border-none outline-none text-xl font-bold" 
            autoFocus
          />
        ):(
          <h2 className="text-2x1 font-bold tracking-wide animate-pulse">
            {username}
          </h2>
        )}
        <FaPencilAlt className="cursor-pointer text-gray-400 hover:text-white" onClick={()=>setEditing(true)}/>
      </div>

      {/*Equipped Items */}
      {equippedItem && (
        <div className="mt-6 ml-6 p-4 bg-[#0f1117]/80 backdrop-blur-md rounded-xl border border-white/10 max-w-sm shadow-lg font-sans">
          <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Equipped</div>

          <div className="flex items-center gap-4">
            <img
              src={equippedItem.image}
              alt={equippedItem.name}
              className="w-14 h-14 object-contain rounded-lg bg-black/40 p-1"
            />

            <div className="flex-1">
              <p className="text-sm font-semibold text-white">{equippedItem.name}</p>
              <p className="text-xs text-gray-400">{equippedItem.type.toUpperCase()}</p>

              <div className="mt-2">
                <p className="text-[10px] text-gray-400 mt-1">Power: {equippedItem.power}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
