import type { Project } from "./data/pt-types"

type Props={
  projects:Project[];
};

const ProjectTable = ({projects}:Props) => {
  return (
    <div className="w-full overflow-x-auto px-4 sm:px-8 mt-6">
      <table className="w-[50%] border-collapse text-left text-sm sm:text-base">
        <thead className="bg-white/[0.03] backdrop-blur-md">
          <tr className="text-gray-300">
            <th className="py-4 px-3">ID</th>
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
              <td className="py-4 px-3 font-medium text-[#b1cbe2]">{project.id}</td>
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
                <button className="text-[1rem] px-4 py-2 font-semibold text-[#000000] rounded-md bg-[#b1cbe2] hover:bg-[#b1cbe2]/50 border-none cursor-pointer">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectTable