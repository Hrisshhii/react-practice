
const ProjectTable = () => {
  return (
    <div className="w-full overflow-x-auto px-4 sm:px-8 mt-6">
      <div className="w-full border-collapse text-left text-sm sm:text-base">
        <thead>
          <tr className="border-b border-white /10 text-gray-400">
            <th className="py-4 px-3">Title</th>
            <th className="py-4 px-3">Priority</th>
            <th className="py-4 px-3">Status</th>
            <th className="py-4 px-3">Due Date</th>
            <th className="py-4 px-3">Tags</th>
            <th className="py-4 px-3 text-right">Action</th>
          </tr>
        </thead>
      </div>
    </div>
  )
}

export default ProjectTable