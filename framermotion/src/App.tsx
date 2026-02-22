import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import WaterDropButton from './components/PulseButton/WaterDropButton'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/water-drop" element={<WaterDropButton/>}/>
    </Routes>
    </>
  )
}

export default App
