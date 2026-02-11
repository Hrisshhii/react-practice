import type {Project} from "./data/pt-types";
import {motion} from "framer-motion";

type Props={
  project:Project|null;
  onClose:()=>void;
  onDelete:(id:string)=>void;
  onEdit:(project:Project)=>void;
};


const ViewProjectModal=({project,onClose,onDelete,onEdit}:Props)=>{
  if(!project) return null;
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
      <motion.div onClick={(e) => e.stopPropagation()}
          initial={{scale:0.85,opacity:0}}
          animate={{scale:1,opacity:1}}
          className="bg-[#16181C] w-[95%] max-w-2xl rounded-2xl p-8 border border-white/10 shadow-2xl"
        >
        <h2 className="text-3xl font-semibold text-[#b1cbe2]">{project.title}</h2>
        <p className="text-gray-400 mt-4">{project.description||"No description provided."}</p>

        <div className="flex gap-3 mt-6 flex-wrap">
          <span className={`px-3 py-1 bg-white/5 rounded-lg
            ${project.status==="completed"
                ?"bg-green-500/20 text-green-400":project.status==="in-progress"
                ?"bg-blue-500/20 text-blue-400":"bg-gray-500/20 text-gray-400"
              }
            `}>
            Status: {project.status}
          </span>
          <span className={`px-3 py-1 rounded-lg
            ${project.priority==="high"
                ?"bg-red-500/20 text-red-400":project.priority==="medium"
                ?"bg-yellow-500/20 text-yellow-400":"bg-green-500/20 text-green-400"
              }
            `}>
            Priority: {project.priority}
          </span>
          {project.dueDate && (
            <span className={`px-3 py-1 bg-white/5 rounded-lg text-white/65`}>
              Due: {new Date(project.dueDate).toLocaleDateString()}
            </span>
          )}
        </div>

        <div className="mt-6">
          <div className="w-full h-3 bg-white/10 rounded-full">
            <div style={{ width: `${project.progress}%` }} className="h-full bg-[#b1cbe2] rounded-full"/>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            {project.progress}%
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags?.map(tag => (
            <span key={tag} className="bg-white/10 px-3 py-1 rounded-md text-sm text-white/65">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-10">
          <div className="flex gap-3">
            <button onClick={() => onDelete(project.id)} className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-lg font-semibold cursor-pointer border-none">
              Delete
            </button>
            <button onClick={()=>onEdit(project)} className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold cursor-pointer border-none">Edit</button>
          </div>
          
          <button onClick={onClose} className="px-5 py-2 bg-white/65 hover:bg-white/10 rounded-lg cursor-pointer border-none">
            Close
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ViewProjectModal