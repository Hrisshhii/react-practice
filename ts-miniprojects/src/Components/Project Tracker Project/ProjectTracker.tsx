import { useEffect, useState } from "react"
import ControlBar from "./ControlBar"
import Navigation from "./Navigation"
import ProjectTable from "./ProjectTable";
import { projectsData } from "./data/data";
import type { Project } from "./data/pt-types";
import CreateProjectModal from "./CreateProjectModal";
import ViewProjectModal from "./ViewProjectModal";

const ProjectTracker = () => {
  const [projects,setProjects]=useState<Project[]>(()=>{
    const saved=localStorage.getItem('projects');
    return saved?JSON.parse(saved):projectsData;
  });
  const [selectedProject,setSeletedProject]=useState<Project|null>(null);
  const [search,setSearch]=useState("");
  const [sort,setSort]=useState<"newest"|"priority"|"progress">("newest");
  const [statusFilter,setStatusFilter]=useState<"all"|"planned"|"in-progress"|"completed">("all");
  const [showCreate,setShowCreate]=useState(false);

  useEffect(()=>{
    localStorage.setItem("projects",JSON.stringify(projects));
  },[projects]);

  const handleCreateProject=(project:Project)=>{
    setProjects(prev=>[project,...prev]);
  };

  const handleDeleteProject=(id:string)=>{
    setProjects(prev=>prev.filter(p=>p.id!==id));
    setSeletedProject(null);
  }

  const processesProjects=[...projects].filter(project=>project.title.toLowerCase().includes(search.toLowerCase())).
    filter(project=>statusFilter==="all"?true:project.status===statusFilter).
    sort((a,b)=>{
      if(sort==="priority"){
        const order={high:3,medium:2,low:1};
        return order[b.priority]-order[a.priority];
      }
      if(sort==="progress"){
        return b.progress-a.progress;
      }
      return new Date(b.createdAt).getTime()-new Date(a.createdAt).getTime();
    })

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation/>
      <ControlBar search={search} setSearch={setSearch} openCreate={()=>setShowCreate(true)} setStatusFilter={setStatusFilter} setSort={setSort}/>
      <ProjectTable projects={processesProjects} onView={setSeletedProject}/>
      {showCreate && (
        <CreateProjectModal onClose={()=>setShowCreate(false)} onCreate={handleCreateProject}/>
      )}
      <ViewProjectModal project={selectedProject} onClose={()=>setSeletedProject(null)} onDelete={handleDeleteProject}/>
    </div>
  )
}

export default ProjectTracker