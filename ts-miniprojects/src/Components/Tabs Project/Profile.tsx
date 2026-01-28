import { useState } from "react";
import { FaCamera } from "react-icons/fa";
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
      {equippedItem && (
        <div className="mt-4 ml-6 p-3 bg-[#1a1c1f] rounded-lg border border-white/10 max-w-xs font-sans">
          <div className="text-ts text-gray-400 mb-1">Equipped</div>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm text-gray-400 font-semibold">{equippedItem.name}</p>
              <p className="text-xs text-gray-400">Power: {equippedItem.power}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
