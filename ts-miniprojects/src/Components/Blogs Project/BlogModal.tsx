import { useEffect, useRef } from "react";
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
  const textareaRef=useRef<HTMLTextAreaElement|null>(null);
  useEffect(()=>{
    const textarea=textareaRef.current;
    if(textarea){
      textarea.style.height="auto";
      const maxHeight=420;
      if(textarea.scrollHeight>maxHeight){
        textarea.style.height=maxHeight+"px";
        textarea.style.overflowY="auto";
      }else{
        textarea.style.height=textarea.scrollHeight+"px";
        textarea.style.overflowY="hidden";
      }
      
    }
  },[description]);

  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-[#1A1C1E] text-white p-8 rounded-2xl w-full max-w-lg max-h-[85vh] relative animate-fadeIn" onClick={e=>e.stopPropagation()}>
        <button className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border-solid bg-white/10 hover:bg-white/20 text-white transition rounded-full cursor-pointer" onClick={onClose}>✕</button>
        <h2 className="text-4xl tracking-tight mb-6 font-sans text-[#b1cbe2]">{editingBlog?"Editing Blog":"Creating Blog"}</h2>
        <div className="px-5 space-y-3">
          <input
            onChange={e=>setTitle(e.target.value)}
            placeholder="Blog title"
            value={title}
            className="w-full p-3 text-[1.25rem] font-semibold rounded bg-[#121212] mb-4 outline-none focus:ring-2 focus:ring-[#b1cbe2] border-none text-[#b1cbe2]"
          />
          <textarea
            ref={textareaRef}
            value={description}
            onChange={e=>setDescription(e.target.value)}
            placeholder="Blog Description"
            rows={4}
            className="w-full p-3 rounded-lg text-[1.2rem] bg-[#121212] outline-none focus:ring-2 focus:ring-[#b1cbe2] border-none text-[#b1cbe2] resize-none" 
          />
        </div>
        <div className="flex justify-end pt-6">
          <button onClick={()=>onSave(title,description)} 
          className="text-black text-[1.25rem] px-6 py-2 mt-3 border-solid rounded-full hover:text-black/50 transition bg-[#b1cbe2] cursor-pointer"
          >
            Save
          </button>
        </div>
        
      </div>
    </div>
  );
};