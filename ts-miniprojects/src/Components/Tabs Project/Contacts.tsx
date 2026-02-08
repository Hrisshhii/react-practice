import {FaSteam,FaInstagram,FaTwitter,FaTwitch} from "react-icons/fa";
import type { Theme } from "./data/useSettings";

const contacts = [
  {
    label: "Steam",
    icon: <FaSteam size={20} />,
    link: "#"
  },
  {
    label: "Instagram",
    icon: <FaInstagram size={20} />,
    link: "#"
  },
  {
    label: "Twitter",
    icon: <FaTwitter size={20} />,
    link: "#"
  },
  {
    label: "Twitch",
    icon: <FaTwitch size={20} />,
    link: "#"
  }
];

type Props = {
  theme: Theme;
};

const themeHover: Record<Theme, string> = {
  default: "hover:text-cyan-400 hover:border-cyan-400/40",
  blue: "hover:text-blue-400 hover:border-blue-400/40",
  purple: "hover:text-purple-400 hover:border-purple-400/40",
  green: "hover:text-green-400 hover:border-green-400/40",
};


const Contacts = ({theme}:Props) => {
  return (
    <section className="max-w-2xl mx-auto text-white">

      <div className="bg-[#121826] border border-white/10 rounded-2xl p-6 shadow-xl">

        <h2 className="text-5xl font-bold mb-4">
          Comms Terminal
        </h2>

        <p className="text-gray-400 text-xl mb-6">
          Establish a connection across the network.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {contacts.map(contact=>(
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 text-[1.5rem] text-white p-4 no-underline rounded-xl bg-[#1a1c1f]/80 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:scale-[1.02] ${themeHover[theme]}`}
            >
              {contact.icon}
              <span className="font-medium">
                {contact.label}
              </span>
            </a>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Contacts;
