import { useState } from "react"
import ControlBar from "./ControlBar"
import Navigation from "./Navigation"

const ProjectTracker = () => {
  const [search,setSearch]=useState("");
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navigation/>
      <ControlBar search={search} setSearch={setSearch} openCreate={()=>{}}/>
    </div>
  )
}

export default ProjectTracker