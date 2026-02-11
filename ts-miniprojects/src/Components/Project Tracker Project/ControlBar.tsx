
type Props={
  search:string;
  setSearch:(v:string)=>void;
  openCreate:()=>void;
};


const ControlBar = ({search,setSearch,openCreate}:Props) => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-8 py-5 border-b border-white/30">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between w-full gap-4">
          <input type="text" placeholder="Search project . . ."
           value={search}
           onChange={e=>setSearch(e.target.value)}
           className="bg-transparent text-white border border-solid rounded-full border-gray-600 text-[1.12rem] p-5 w-[80%] sm:w-[40%]"
          />
        <div className="relative flex justify-center items-center gap-8 sm:gap-4">
          <button className="text-[0.95rem] sm:text-[1.12rem] rounded bg-transparent text-white hover:bg-white/10 cursor-pointer py-2 px-6 sm:py-3 sm:px-8 border-solid border-gray-800">Filter</button>
          <button className="text-[0.95rem] sm:text-[1.12rem] rounded bg-transparent text-white hover:bg-white/10 cursor-pointer py-2 px-6 sm:py-3 sm:px-8 border-solid border-gray-800">Sort</button>
          <button onClick={openCreate} 
           className="bg-[#b1cbe2] text-black text-xl sm:text-3xl w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow-lg hover:scale-110 transition cursor-pointer hover:bg-[#b1cbe2]/50"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default ControlBar