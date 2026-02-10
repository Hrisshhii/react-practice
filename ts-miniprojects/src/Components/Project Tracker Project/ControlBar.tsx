
type Props={
  search:string;
  setSearch:(v:string)=>void;
  openCreate:()=>void;
};


const ControlBar = ({search,setSearch,openCreate}:Props) => {
  return (
    <div className="flex items-center justify-between px-8 py-5 border-b border-white/30">
      <div className="flex items-center justify-between w-full">
          <input type="text" placeholder="Search project..."
           value={search}
           onChange={e=>setSearch(e.target.value)}
           className="bg-transparent text-white border border-solid rounded-full border-gray-600 text-[1.12rem] p-5 w-[40%]"
          />
        <div className="relative flex justify-center items-center gap-4">
          <button className="text-[1.12rem] rounded bg-transparent text-white hover:bg-white/10 cursor-pointer py-3 px-8 border-solid border-gray-800">Filter</button>
          <button className="text-[1.12rem] rounded bg-transparent text-white hover:bg-white/10 cursor-pointer py-3 px-8 border-solid border-gray-800">Sort</button>
          <button onClick={openCreate} 
           className="bg-[#b1cbe2] text-black text-3xl w-14 h-14 rounded-full shadow-lg hover:scale-110 transition cursor-pointer hover:bg-[#b1cbe2]/50"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default ControlBar