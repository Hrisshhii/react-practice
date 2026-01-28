import { useState } from "react";
import { Profile } from "./Profile";
import Sidebar from "./Sidebar";
import Inventory from "./Inventory";
import Settings from "./Settings";

type Tab="profile"|"inventory"|"settings";

const Tabs = () => {
  const  [isActive,setIsActive]=useState<Tab>('profile');
  return (
    <div className="flex">
      <Sidebar isActive={isActive} setIsActive={setIsActive}/>
      {isActive==="profile" && <Profile />}
      {isActive==="inventory" && <Inventory />}
      {isActive==="settings" && <Settings />}
    </div>
  );
};

export default Tabs;
