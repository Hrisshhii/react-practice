import type { Project } from "./data/pt-types"
import ProjectStatusChart from "./ProjectStatusChart";
import { motion } from "framer-motion";

type Props={
  projects:Project[];
  onView:(project:Project)=>void;
};

const ProjectTable = ({projects,onView}:Props) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5 items-center px-5 mt-6">
      <div className="md:hidden flex flex-col gap-4 w-full">
        {projects.map(project=>(
          <motion.div key={project.id}
            drag="x" dragConstraints={{left:0,right:0}}
            whileDrag={{scale:0.95}}
            dragElastic={0.2}
            className="bg-[#16181C] rounded-2xl p-5 border border-white/5 active:cursor-grabbing cursor-grab"
            >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-[#b1cbe2]">{project.title}</h2>
              <span className={`px-2 py-2 rounded-full text-xs
                ${project.priority==="high"
                  ?"bg-red-500/20 text-red-400"
                  :project.priority==="medium"
                  ?"bg-yellow-500/20 text-yellow-400"
                  :"bg-green-500/20 text-green-400"
                }
              `}>{project.priority}</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">Status: {project.status}</p>
            <p className="text-gray-400 text-sm mt-2">
              Due:{project.dueDate?new Date(project.dueDate).toLocaleDateString():"-"}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags?.map(tag=>(
                <span key={tag} className="bg-white/10 px-2 py-1 rounded text-xs text-white/70">{tag}</span>
              ))}
            </div>
            <button onClick={()=>onView(project)} className="mt-4 w-full py-2 rounded-lg bg-[#b1cbe2] text-black font-semibold">View</button>
          </motion.div>
        ))}
      </div>
      <div className="hidden md:block flex-1 overflow-x-auto">
        <table className="w-[90%] border-collapse text-left text-sm sm:text-base">
          <thead className="bg-white/[0.03] backdrop-blur-md">
            <tr className="text-gray-300">
              <th className="py-4 px-3"></th>
                <th className="py-4 px-3">Title</th>
                <th className="py-4 px-3">Priority</th>
                <th className="py-4 px-3">Status</th>
                <th className="py-4 px-3">Progress</th>
                <th className="py-4 px-3">Due Date</th>
                <th className="py-4 px-3">Tags</th>
                <th className="py-4 px-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project)=>(
              <tr className="border-b border-white/5 odd:bg-white/[0.01] hover:bg-white/[0.03] transition">
                <td className="py-4 px-3 font-medium text-[#b1cbe2] text-[1.2rem]">-</td>
                <td className="py-4 px-3 font-medium text-[#b1cbe2]">{project.title}</td>
                <td className="py-4 px-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${project.priority==="high"
                        ?"bg-red-500/20 text-red-400":project.priority==="medium"
                        ?"bg-yellow-500/20 text-yellow-400":"bg-green-500/20 text-green-400"
                      }
                    `}>
                    {project.priority}
                  </span>
                </td>
                <td className="py-4 px-3">
                  <span className={`px-3 py-1 rounded-full text-xs
                      ${project.status==="completed"
                        ?"bg-green-500/20 text-green-400":project.status==="in-progress"
                        ?"bg-blue-500/20 text-blue-400":"bg-gray-500/20 text-gray-400"
                      }
                    `}>
                    {project.status}
                  </span>
                </td>
                <td className="py-4 px-3 w-[180px]">
                  <div className="w-full h-2 rounded-full overflow-hidden bg-white/10">
                    <div style={{ width: `${project.progress}%` }}
                      className={`h-full rounded-full transition-all duration-500
                      ${
                        project.progress === 100
                          ? "bg-green-400"
                          : project.progress > 60
                          ? "bg-blue-400"
                          : project.progress > 30
                          ? "bg-yellow-400"
                          : "bg-red-400"
                      }
                    `}
                    />
                  </div>
                  <span className="text-xs text-gray-400 mt-1 block">{project.progress}%</span>
                </td>
                <td className="py-4 px-3 text-gray-300">
                  {project.dueDate?new Date(project.dueDate).toLocaleDateString():"-"}
                </td>
                <td className="py-4 px-3 flex flex-wrap gap-2">
                  {project.tags?.map((tag)=>(
                    <span key={tag} className="bg-white/10 px-2 py-1 text-white/50 rounded-md text-xs">{tag}</span>
                  ))}
                </td>
                <td className="py-4 px-3 text-right">
                  <button onClick={()=>onView(project)}
                  className="text-[1rem] px-4 py-2 font-semibold text-[#000000] rounded-md bg-[#b1cbe2] hover:bg-[#b1cbe2]/50 border-none cursor-pointer">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="shrink-0 sm:mr-12">
        <ProjectStatusChart projects={projects}/>
      </div>
    </div>
  )
}

export default ProjectTable