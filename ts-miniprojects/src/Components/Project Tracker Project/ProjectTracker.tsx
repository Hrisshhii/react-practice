import { useEffect, useState } from "react"
import ControlBar from "./ControlBar"
import Navigation from "./Navigation"
import ProjectTable from "./ProjectTable";
import { projectsData } from "./data/data";
import type { Project } from "./data/pt-types";
import CreateProjectModal from "./CreateProjectModal";
import ViewProjectModal from "./ViewProjectModal";
import ProjectStatusChart from "./ProjectStatusChart";

const ProjectTracker = () => {
  const [projects,setProjects]=useState<Project[]>(()=>{
    const saved=localStorage.getItem('projects');
    if(!saved) return projectsData;
    return JSON.parse(saved).map((p:Project)=>({
      ...p,
      createdAt:new Date(p.createdAt)
    }));
  });
  const [selectedProject,setSeletedProject]=useState<Project|null>(null);
  const [search,setSearch]=useState("");
  const [sort,setSort]=useState<"newest"|"priority"|"progress">("newest");
  const [statusFilter,setStatusFilter]=useState<"all"|"planned"|"in-progress"|"completed">("all");
  const [showCreate,setShowCreate]=useState(false);
  const [editingProject,setEditingProject]=useState<Project|null>(null);

  const [currentPage,setCurrentPage]=useState(1);
  const projectPerPage=5;

  useEffect(()=>{
    localStorage.setItem("projects",JSON.stringify(projects));
  },[projects]);

  const handleSaveProject=(project:Project)=>{
    setProjects(prev=>{
      const exists = prev.find(p=>p.id===project.id);
      if(exists){
        return prev.map(p=>p.id===project.id ? project : p);
      }
      return [project,...prev];
    });
    setEditingProject(null);
  }

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

  const totalPages=Math.ceil(processesProjects.length/projectPerPage);

  const safePage=totalPages===0?1:Math.min(currentPage,totalPages)

  const paginatedProjects=processesProjects.slice(
    (safePage-1)*projectPerPage,
    safePage*projectPerPage
  );

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation/>
      <ControlBar search={search} setSearch={setSearch}
        openCreate={()=>{
          setEditingProject(null);
          setShowCreate(true);
        }}
        setStatusFilter={setStatusFilter} setSort={setSort}
      />
      
      <div className="flex flex-col-reverse lg:flex-row gap-5 items-center px-5 mt-6">
        <div className="flex-1 w-full">
          <ProjectTable projects={paginatedProjects} onView={setSeletedProject}/>
        </div>
        
        <div className="shrink-0">
          <ProjectStatusChart projects={processesProjects} />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-6 pb-10">
        <button onClick={()=>setCurrentPage(prev=>Math.max(prev-1,1))}
            disabled={safePage===1}
            className={`px-4 py-2 rounded-md font-semibold cursor-pointer
                ${currentPage===1?"hidden":"bg-[#b1cbe2] text-black hover:bg-[#b1cbe2]/70"}
              `}
          >Prev</button>
        <span className="text-gray-300 text-sm">
          Page {safePage} of {totalPages || 1}
        </span>
        <button onClick={()=>setCurrentPage(prev=>Math.min(prev+1,totalPages))}
            disabled={safePage===totalPages || totalPages===0}
            className={`px-4 py-2 rounded-md font-semibold cursor-pointer
                ${currentPage===totalPages?"hidden":"bg-[#b1cbe2] text-black hover:bg-[#b1cbe2]/70"}
              `}
        >Next</button>
      </div>
      {showCreate && (
        <CreateProjectModal project={editingProject??undefined} onClose={()=>{setShowCreate(false);setEditingProject(null);}} onSave={handleSaveProject}/>
      )}
      <ViewProjectModal project={selectedProject} 
        onClose={()=>setSeletedProject(null)} 
        onDelete={handleDeleteProject}
        onEdit={(project)=>{
          setSeletedProject(null);
          setEditingProject(project);
          setShowCreate(true);
        }}
      />
    </div>
  )
}

export default ProjectTracker