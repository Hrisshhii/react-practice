import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import WaterDropButton from './components/PulseButton/WaterDropButton'
import ExplosionButton from './components/ExplodeButton/ExplosionButton'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/water-drop" element={<WaterDropButton/>}/>
      <Route path="/explosion" element={<ExplosionButton/>} />
    </Routes>
    </>
  )
}

export default App
