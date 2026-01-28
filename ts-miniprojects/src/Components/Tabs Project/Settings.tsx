
const Settings = () => {
  return (
    <div className="flex-1 ml-20 p-6 text-white bg-[#0e1117] min-h-screen font-sans">
      <h2 className="flex align-middle justify-center text-5xl font-bold mb-6">Settings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/*Profile*/}
        <div className="bg-[#1a1f2e] p-5 rounded-xl border border-white/10">
          <h3 className="font-semibold mb-2">Profile</h3>
          <button className="text-sm text-blue-400">Change Username</button>
          <button className="block text-sm text-blue-400 mt-2">Reset Avatar</button>
          <button className="block text-sm text-red-400 mt-2">Reset Banner</button>
        </div>
        {/* Theme */}
        <div className="bg-[#1a1f2e] p-5 rounded-xl border border-white/10">
          <h3 className="font-semibold mb-2">Theme</h3>
          <button className="px-3 py-1 bg-blue-500 rounded text-xs mr-2">Blue</button>
          <button className="px-3 py-1 bg-purple-500 rounded text-xs mr-2">Purple</button>
          <button className="px-3 py-1 bg-green-500 rounded text-xs">Green</button>
        </div>

        {/* Gameplay UI */}
        <div className="bg-[#1a1f2e] p-5 rounded-xl border border-white/10">
          <h3 className="font-semibold mb-2">UI Effects</h3>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked /> Enable Animations
          </label>
        </div>

        {/* Danger Zone */}
        <div className="bg-[#2a1212] p-5 rounded-xl border border-red-500/30">
          <h3 className="font-semibold mb-2 text-red-400">Danger Zone</h3>
          <button className="text-sm text-red-400">Clear All Data</button>
        </div>
      </div>
    </div>
  )
}

export default Settings