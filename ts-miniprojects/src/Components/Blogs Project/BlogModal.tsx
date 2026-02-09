import type { Blog } from "./blogs-data/data";

type BlogModalProps={
  isOpen:boolean;
  onClose:()=>void;
  onSave:(title:string,description:string)=>void;
  editingBlog:Blog|null;
  title:string;
  setTitle:React.Dispatch<React.SetStateAction<string>>;
  description:string;
  setDescription:React.Dispatch<React.SetStateAction<string>>;
};

export const BlogModal=({isOpen,onClose,onSave,editingBlog,title,setTitle,description,setDescription}:BlogModalProps)=>{
  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1A1C1E] text-white p-8 rounded-2xl w-[500px] relative animate-fadeIn" onClick={e=>e.stopPropagation()}>
        <button className="absolute top-4 right-4 text-2xl hover:text-gray-400" onClick={onClose}>✕</button>
        <h2 className="text-2xl mb-6">{editingBlog?"Editing Blog":"Creating Blog"}</h2>
        <input
          onChange={e=>setTitle(e.target.value)}
          placeholder="Blog title"
          value={title}
          className="w-full p-3 rounded bg-[#121212] mb-4 outline-none focus:ring-2 focus:ring-[#b1cbe2]"
        />
        <textarea
          value={description}
          onChange={e=>setDescription(e.target.value)}
          placeholder="Blog Description"
          rows={4}
          className="w-full p-3 rounded bg-[#121212] mb-6 outline-none focus:ring-2 focus:ring-[#b1cbe2]" 
        />
        <button onClick={()=>onSave(title,description)} className="text-black px-6 py-2 rounded-full hover:scale-105 transition bg-[#b1cbe2]">Save</button>
      </div>
    </div>
  );
};