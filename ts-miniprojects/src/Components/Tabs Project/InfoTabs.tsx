import { FaHome } from "react-icons/fa";
import Card from "./Card";
import Contacts from "./Contacts";
import About from "./About";
import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import type { Theme } from "./data/useSettings";
import { cards } from "./data/cards";

type Tab = {
  id: string;
  icon: React.ReactNode;
  label: string;
  Component: React.ComponentType<{ theme: Theme }>;
};

const tabs: Tab[] = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    Component: () => (
      <div className="flex flex-wrap gap-4 justify-center">
        {cards.map(card=>(
          <Card key={card.title} title={card.title} image={card.image}/>
        ))}
      </div>
    ),
  },
  {
    id: "contacts",
    icon: <FaUserFriends />,
    label: "Contacts",
    Component: Contacts,
  },
  {
    id: "about",
    icon: <FaBookDead />,
    label: "About",
    Component: About,
  },
];



type Props = {
  theme: Theme;
};


const InfoTabs = ({theme}:Props) => {
  const [activeTab,setActiveTab]=useState(tabs[0].id);

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.Component;


  return (
    <div className="p-4 mt-[3rem]">
      <div className="flex bg-[#0b0f1a]/70 backdrop-blur-xl border border-cyan-400/10 rounded-xl overflow-hidden">
        {tabs.map(tab=>(
          <button
            key={tab.id}
            className={`flex-1 text-center py-2 px-4 font-medium text-sm transition cursor-pointer border-solid
            ${activeTab===tab.id
              ? 'text-white bg-[#111827] border-[#232936]'
              : 'text-gray-400 hover:text-white bg-[#0e1117] border-[#222325]'
            }`}
            onClick={()=>setActiveTab(tab.id)}
          >
            <div className="flex items-center justify-center space-x-2">
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6">
        {ActiveComponent && <ActiveComponent theme={theme}/>}
      </div>

    </div>
  );
};

export default InfoTabs;
