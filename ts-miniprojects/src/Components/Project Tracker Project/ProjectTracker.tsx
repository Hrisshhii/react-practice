import { useState } from "react"
import ControlBar from "./ControlBar"
import Navigation from "./Navigation"
import ProjectTable from "./ProjectTable";

const ProjectTracker = () => {
  const [search,setSearch]=useState("");
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation/>
      <ControlBar search={search} setSearch={setSearch} openCreate={()=>{}}/>
      <ProjectTable/>
    </div>
  )
}

export default ProjectTracker