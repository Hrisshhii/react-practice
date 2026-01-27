import { Profile } from "./Profile";
import Sidebar from "./Sidebar";

const Tabs = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Profile />
    </div>
  );
};

export default Tabs;
