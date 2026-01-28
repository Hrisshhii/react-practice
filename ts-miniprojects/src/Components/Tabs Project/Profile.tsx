import { useEffect, useState } from "react";
import { FaCamera, FaPencilAlt } from "react-icons/fa";
import { items } from "./data/items";

const equippedId=Number(localStorage.getItem("equipped"))
const equippedItem=items.find((i)=>i.id===equippedId);

export const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    localStorage.getItem("banner")||
    "https://images.wallpapersden.com/image/download/starry-landscape-4k-cool-blue-moon_bW5tbG6UmZqaraWkpJRmaWVlrWllZQ.jpg"
  );
  const [profileUrl, setProfileUrl] = useState(
    localStorage.getItem("avatar")||
    "https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
  );
  const [username,setUsername]=useState(
    localStorage.getItem("username")||"Player One"
  );
  const [editing,setEditing]=useState<boolean>(false);
  const [level]=useState<number>(27);
  const [xp]=useState<number>(73);
  const [inspect,setInspect]=useState<boolean>(false);

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
    <div className="relative flex-1 ml-20 bg-[#0e1117] min-h-screen">
      {/* Banner */}
      <div className="relative">
        <img src={bannerUrl} alt="Background" className="w-full h-60 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e1117] via-[#121826] to-[#0b0f1a] opacity-60">
          <label
            htmlFor="banner-upload"
            className="absolute top-2 right-2 z-20 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600 shadow"
          >
            <FaCamera size={20} />
          </label>
        </div>
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
            onClick={()=>setInspect(true)}
            className="w-40 h-40 object-cover rounded-full cursor-pointer hover:scale-105 transition bg-black"
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
      {/* Username */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[14.5rem] flex items-center gap-2 font-sans transform">
        {editing ? (
          <input 
            value={username} 
            onChange={e=>setUsername(e.target.value)}
            onBlur={()=>setEditing(false)}
            className="bg-transparent border-none outline-none text-2xl font-bold text-white" 
            autoFocus
          />
        ) : (
          <h2 className="font-game text-3xl font-extrabold tracking-wide text-blue-400
            drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse">
            {username}
          </h2>
        )}
        <FaPencilAlt
          className="cursor-pointer text-gray-400 hover:text-cyan-400 hover:scale-110 transition"
          onClick={()=>setEditing(true)}
        />
      </div>

      {/*XP and Level*/}
      <div className="ml-6 mt-3 w-80">
        <div className="flex justify-between text-xs text-cyan-300 mb-1">
          <span>LEVEL {level}</span>
          <span>{xp}%</span>
        </div>

        <div className="h-3 bg-black/40 rounded-full overflow-hidden border border-cyan-500/30">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
            animate-pulse transition-all duration-1000"
            style={{ width: `${xp}%` }}
          />
        </div>

        <p className="text-[10px] text-gray-400 mt-1">
          XP to next level: {100 - xp}%
        </p>
      </div>

      {/*Equipped Items */}
      {equippedItem && (
        <div className="relative mt-6 ml-6 max-w-sm">
          <div className="absolute -inset-1 rounded-2xl blur-xl opacity-40
            bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />

          <div className="relative p-5 rounded-2xl 
            bg-[#0b0f1a]/90 backdrop-blur-xl 
            border border-white/20 shadow-2xl font-sans">
            
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
                <p className="text-sm text-cyan-300 mt-1">Power: {equippedItem.power}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*Profile functionality*/}
      {inspect &&(
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center" onClick={()=>setInspect(false)}>
          <div className="relative bg-[#0b0f1a] rounded-2xl p-8 border border-cyan-400/30 shadow-2xl" onClick={(e)=>e.stopPropagation()}>
            <button onClick={()=>setInspect(false)} className="absolute top-3 right-3 text-gray-400 hover:text-white rounded-full border-solid">✕</button>
            <img src={profileUrl} className="w-64 h-64 rounded-xl object-cover mx-auto mb-4" />
            <h2 className="font-game text-2xl text-cyan-400 text-center">{username}</h2>
            <div className="mt-4 text-center text-sm text-gray-300">
              Level {level}
            </div>
            {equippedItem && (
              <div className="mt-4 flrx jsutify-center gap-3">
                <img src={equippedItem.image} className="w-16 h-16 rounded-lg" />
                <div>
                  <p className="text-white">{equippedItem.name}</p>
                  <p className="text-xs text-cyan-400">Power {equippedItem.power}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
