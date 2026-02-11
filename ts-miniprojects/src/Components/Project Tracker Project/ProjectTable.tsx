import type { Project } from "./data/pt-types"

type Props={
  projects:Project[];
};

const ProjectTable = ({projects}:Props) => {
  return (
    <div className="w-full overflow-x-auto px-4 sm:px-8 mt-6">
      <div className="w-full border-collapse text-left text-sm sm:text-base">
        <thead className="bodrer-t border-white/10">
          <tr className="border-b border-white/10 text-gray-400">
          <th className="py-4 px-3">ID</th>
            <th className="py-4 px-3">Title</th>
            <th className="py-4 px-3">Priority</th>
            <th className="py-4 px-3">Status</th>
            <th className="py-4 px-3">Due Date</th>
            <th className="py-4 px-3">Tags</th>
            <th className="py-4 px-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project)=>(
            <tr className="border-b-border-white/5 hover:bg-white/5 transition">
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
              <td className="py-4 px-3 text-gray-300">
                {project.dueDate?new Date(project.dueDate).toLocaleDateString():"-"}
              </td>
              <td className="py-4 px-3 flex flex-wrap gap-2">
                {project.tags?.map((tag)=>(
                  <span key={tag} className="bg-white/10 px-2 py-1 rounded-md text-xs">{tag}</span>
                ))}
              </td>
              <td className="py-4 px-3 text-right">
                <button className="text-sm px-3 py-1 rounded-md bg-white/10 hover:bg-white/20">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  )
}

export default ProjectTable