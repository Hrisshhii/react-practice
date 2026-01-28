import { useSettings } from "./data/useSettings";

const Settings = () => {
  const {theme,setTheme,resetAll}=useSettings();
  return (
    <div className="flex-1 ml-20 p-6 text-white bg-[#0e1117] min-h-screen font-sans">
      <h2 className="flex align-middle justify-center text-5xl font-bold mb-6">Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/*Profile*/}
        <div className="bg-[#1a1f2e] p-5 rounded-xl border border-white/10">
          <h3 className="font-semibold mb-2">Profile</h3>
          <button className="text-sm text-blue-400"
            onClick={()=>{
              const name=prompt("Enter new username: ");
              if(name) localStorage.setItem("username",name);
              window.location.reload();
            }}
          >
            Change Username
          </button>
          <button className="block text-sm text-blue-400 mt-2"
            onClick={()=>{
              localStorage.removeItem("avatar");
              window.location.reload();
            }}
          >
            Reset Avatar
          </button>
          <button className="block text-sm text-red-400 mt-2"
            onClick={()=>{
              localStorage.removeItem("banner");
              window.location.reload();
            }}
          >
            Reset Banner
            </button>
        </div>
        {/* Theme */}
        <div className="bg-[#1a1f2e] p-5 rounded-xl border border-white/10">
          <h3 className="font-semibold mb-2">Theme</h3>
          {(["default","blue","purple","green"] as const).map((c)=>(
            <button
              key={c}
              onClick={()=>setTheme(c)}
              className={`px-3 py-2 rounded text-xs mr-2 transition
                  ${theme===c?"ring-2 ring-white":"opacity-70"}
                  ${
                    c==="blue"?"bg-blue-500":
                    c==="purple"?"bg-purple-500":
                    c==="green"?"bg-green-500":
                    "bg-gray-500"
                  }
                `}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Danger Zone */}
        <div className="bg-[#2a1212] p-5 rounded-xl border border-red-500/30">
          <h3 className="font-semibold mb-2 text-red-400">Danger Zone</h3>
          <button className="text-sm text-red-400"
            onClick={resetAll}
          >Clear All Data</button>
        </div>
      </div>
    </div>
  )
}

export default Settings