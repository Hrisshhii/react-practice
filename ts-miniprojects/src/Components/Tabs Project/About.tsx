import { items } from "./data/items";

const About = () => {

  const equippedId = Number(localStorage.getItem("equipped"));
  const equippedItem = items.find(i => i.id === equippedId);

  return (
    <section className="max-w-3xl mx-auto text-white">

      <div className="bg-[#121826] border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-5xl font-bold mb-3 tracking-wide">
          Player Lore
        </h2>

        <p className="text-gray-300 leading-relaxed text-xl">
          A cyber-enhanced explorer navigating digital realms in search of power,
          rare artifacts, and legendary gear. Known across servers for strategic
          gameplay and unstoppable progression.
        </p>

        <p className="text-gray-400 mt-3 text-lg">
          Specializes in tactical combat, inventory optimization, and boss raids.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">

        {[
          {label:"Rank", value:"Diamond III"},
          {label:"Play Time", value:"742 hrs"},
          {label:"Achievements", value:"128"},
          {label:"Quests Done", value:"312"},
        ].map(stat=>(
          <div
            key={stat.label}
            className="bg-[#1a1c1f] border border-white/10 rounded-xl p-4 text-center hover:scale-105 transition"
          >
            <p className="text-xl font-bold">{stat.value}</p>
            <p className="text-lg text-gray-400">{stat.label}</p>
          </div>
        ))}

      </div>

      {/* Equipped Highlight */}
      {equippedItem && (
        <div className="mt-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl p-5">

          <p className="text-xs uppercase tracking-wider text-cyan-300 mb-2">
            Signature Gear
          </p>

          <div className="flex items-center gap-4">
            <img
              src={equippedItem.image}
              className="w-16 h-16 object-contain rounded-lg bg-black/40"
            />

            <div>
              <p className="font-semibold">{equippedItem.name}</p>
              <p className="text-xs text-gray-400">
                {equippedItem.type.toUpperCase()}
              </p>
              <p className="text-cyan-300 text-sm">
                Power {equippedItem.power}
              </p>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};

export default About;
