import { useState } from "react";
import { Profile } from "./Profile";
import Sidebar from "./Sidebar";

type Tab="profile"|"inventory"|"settings";

const Tabs = () => {
  const  [isActive,setIsActive]=useState<Tab>('profile');
  return (
    <div className="flex">
      <Sidebar isActive={isActive} setIsActive={setIsActive}/>
      {isActive==="profile" && <Profile />}
    </div>
  );
};

export default Tabs;
