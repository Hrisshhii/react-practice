import { useState } from "react";
import type { Project } from "./data/pt-types";

type Props = {
  onClose:()=>void;
  onCreate:(project:Project)=>void;
};

const CreateProjectModal=({onClose,onCreate}:Props)=>{
  const [title,setTitle]=useState("");
  const [priority,setPriority]=useState<Project["priority"]>("medium");
  const [status,setStatus]=useState<Project["status"]>("planned");
  const [description,setDescription]=useState("");
  const [progress,setProgress]=useState(0);
  const [tags,setTags]=useState("");
  const [dueDate,setDueDate]=useState("");

  const handleCreate=()=>{
    if(!title.trim()) return;
    let computedStatus=status;
    if(progress===100) computedStatus="completed";
    else if (progress>0 && status==="planned") computedStatus="in-progress";
    const newProject:Project={
      id:crypto.randomUUID(),
      title,
      description,
      status:computedStatus,
      priority,
      dueDate: dueDate || undefined,
      tags:tags.split(",").map(tag=>tag.trim()).filter(Boolean),
      createdAt:new Date(),
      progress
    };
    onCreate(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50">
        <div className="bg-[#16181C]/95 w-[95%] max-w-xl rounded-2xl p-8 shadow-xl border border-white/10 backdrop-blur-xl">
          <div className="space-y-4">
            <h2 className="text-3xl text-[#b1cbe2] font-semibold">
              Create Project
            </h2>

            <input placeholder="Project title..." value={title}
              onChange={e=>setTitle(e.target.value)}
              className="w-[95%] bg-transparent border border-white/10 rounded-xl px-4 py-5 text-white focus:outline-none"
            />

            <textarea value={description} placeholder="Project description..."
              onChange={e=>setDescription(e.target.value)}
              rows={4}
              className="w-[95%] bg-transparent border border-white/10 rounded-lg px-4 py-4 text-white resize-none focus:outline-none"
            />

            <select value={priority}
              onChange={e=>setPriority(e.target.value as Project["priority"])}
              className="w-full bg-transparent border border-white/10 rounded-lg py-5 text-white focus:outline-none"
            >
              <option value="low" className="cursor-pointer">Low</option>
              <option value="medium" className="cursor-pointer">Medium</option>
              <option value="high" className="cursor-pointer">High</option>
            </select>

            <select value={status}
              onChange={e=>setStatus(e.target.value as Project["status"])}
              className="w-full bg-transparent border border-white/10 rounded-lg py-5 text-white focus:outline-none"
            >
              <option value="planned" className="cursor-pointer">Planned</option>
              <option value="in-progress" className="cursor-pointer">In Progress</option>
              <option value="completed" className="cursor-pointer">Completed</option>
            </select>

            <input type="date" value={dueDate} 
              onChange={e=>setDueDate(e.target.value)}
              className="w-[95%] bg-transparent border border-white/10 rounded-lg px-4 py-5 text-white focus:outline-none cursor-pointer"
            />

            <div>
              <label className="text-sm text-gray-400">Progress:{progress}%</label>
              <input type="range" min={0} max={100} value={progress} 
                onChange={e=>setProgress(Number(e.target.value))}
                className="w-full accent-[#b1cbe2] cursor-pointer"
              />
            </div>
            
            <input placeholder="tags (comma separated). . ." value={tags} 
              onChange={e=>setTags(e.target.value)}
              className="w-[95%] bg-transparent border border-white/10 rounded-lg px-4 py-5 text-white focus:outline-none"
            />

            <div className="flex justify-end gap-3 mt-5">
              <button onClick={onClose} className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border-none text-white cursor-pointer">
                Cancel
              </button>
              <button onClick={handleCreate} className="px-4 py-2 rounded-lg bg-[#b1cbe2] hover:bg-[#b1cbe2]/50 text-black border-none font-semibold cursor-pointer">
                Create
              </button>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default CreateProjectModal