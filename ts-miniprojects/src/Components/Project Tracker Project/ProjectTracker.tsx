import { useState } from "react"
import ControlBar from "./ControlBar"
import Navigation from "./Navigation"
import ProjectTable from "./ProjectTable";
import { projectsData } from "./data/data";

const ProjectTracker = () => {
  const [search,setSearch]=useState("");
  const [sort,setSort]=useState<"newest"|"priority"|"progress">("newest");
  const [statusFilter,setStatusFilter]=useState<"all"|"planned"|"in-progress"|"completed">("all");

  const processesProjects=projectsData.filter(project=>project.title.toLowerCase().includes(search.toLowerCase())).
    filter(project=>statusFilter==="all"?true:project.status===statusFilter).
    sort((a,b)=>{
      if(sort==="priority"){
        const order={high:3,medium:2,low:1};
        return order[b.priority]-order[a.priority];
      }
      if(sort==="progress"){
        return b.progress=a.progress;
      }
      return new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime();
    })

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation/>
      <ControlBar search={search} setSearch={setSearch} openCreate={()=>{}} setStatusFilter={setStatusFilter} setSort={setSort}/>
      <ProjectTable projects={processesProjects}/>
    </div>
  )
}

export default ProjectTracker