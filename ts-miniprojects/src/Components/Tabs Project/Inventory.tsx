import { useState } from "react";
import { items,type Rarity } from "./data/items"

const rarityColors: Record<Rarity,string>={
  common: "border-gray-500 shadow-gray-500/20",
  rare: "border-blue-500 shadow-blue-500/30",
  epic: "border-purple-500 shadow-purple-500/30",
  legendary:"border-yellow-400 shadow-yellow-400/40",
};

const Inventory = () => {
  const [filter,setFilter]=useState<Rarity | "all">("all");
  const [search,setSearch]=useState("");
  const [equipped,setEquipped]=useState<number | null>(Number(localStorage.getItem("equipped")) || null);

  const filteredItems= items.filter((item)=>{
    const matchesRarity=filter==="all" || item.rarity===filter;
    const matchsearch=item.name.toLowerCase().includes(search.toLowerCase());
    return matchesRarity && matchsearch;
  })


  return (
    <div className="flex-1 ml-20 p-6 text-white bg-[#141821] min-h-screen font-sans">
      <h2 className="flex text-2x1 font-bold mb-6 tracking-wide align-middle justify-center">
        Inventory
      </h2>

      <div className="mb-8 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-72 px-4 py-2 rounded-lg bg-[#1a1c1f] border border-gray-600 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {(["all","common","rare","epic","legendary"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border-solid text-white uppercase tracking-wide transition
              ${
                filter === r
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-[#1a1c1f] border border-gray-600 hover:border-white/40"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/*Grid*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredItems.map((item)=>(
          <div key={item.id} className={`relative rounded-xl p-4 bg-gradient-to-br from-[#1a1c1f] to-[#0f1113]
            border ${rarityColors[item.rarity]} shadow-lg backdrop-blur-md
            hover:-translate-y-1 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:rotate-[0.2deg]`}>
            <span
              className={`absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider
              ${
                item.rarity === "legendary"
                  ? "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-yellow-300/20 before:to-transparent before:animate-[shine_2s_infinite]"
                  : item.rarity === "epic"
                  ? "bg-purple-500/20 text-purple-300 animate-pulse"
                  : item.rarity === "rare"
                  ? "bg-blue-500/20 text-blue-300 animate-pulse"
                  : "bg-gray-500/20 text-gray-300 animate-pulse"
              }`}
            >
              {item.rarity}
            </span>
            <img src={item.image} alt={item.name} className="w-20 h-22 mx-auto mb-3 drop-shadow-lg flex justify-center align-middle"/>
            <h3 className="text-center text-sm font-semibold tracking-wide">{item.name}</h3>
            <p className="text-center text-xs text-gray-400 mt-1" >{item.description}</p>
            <div className="mt-2">
              <div className="text-[11px] text-gray-300 text-center mb-1">
                Power: {item.power}
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 transition-all duration-500"
                  style={{ width: `${item.power}%` }}
                />
              </div>
            </div>

            <button 
              onClick={()=>{
                setEquipped(item.id);
                localStorage.setItem("equipped",item.id.toString());
              }}
              className={`mt-3 w-full py-1 rounded-md text-xs font-semibold transition
                ${
                  equipped===item.id ? "bg-green-600 text-white":"bg-[#1a1c1f] border-gray-600 hover:bg-blue-600"
                }
                `}
              >
              {equipped===item.id?"EQUIPPED":"EQUIP"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Inventory