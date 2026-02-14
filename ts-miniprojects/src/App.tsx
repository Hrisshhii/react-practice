import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Tabs from './Components/Tabs Project/Tabs'
import Blogs from './Components/Blogs Project/Blogs'
import ProjectTracker from './Components/Project Tracker Project/ProjectTracker'
import EcomFiltering from './Components/Ecommerce Filtering Project/EcomFiltering'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs" element={<Tabs />} />
      <Route path="/blogs" element={<Blogs />}/>
      <Route path="/project-tracker" element={<ProjectTracker/>}/>
      <Route path="/ecommerce-filtering" element={<EcomFiltering/>}></Route>
    </Routes>
  )
}

export default App
