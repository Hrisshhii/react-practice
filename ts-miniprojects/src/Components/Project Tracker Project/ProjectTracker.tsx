import { useState } from "react"
import ControlBar from "./ControlBar"
import Navigation from "./Navigation"
import ProjectTable from "./ProjectTable";
import { projectsData } from "./data/data";

const ProjectTracker = () => {
  const [search,setSearch]=useState("");
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation/>
      <ControlBar search={search} setSearch={setSearch} openCreate={()=>{}}/>
      <ProjectTable projects={projectsData}/>
    </div>
  )
}

export default ProjectTracker