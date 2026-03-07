import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import WaterDropButton from './components/PulseButton/WaterDropButton'
import ExplosionButton from './components/ExplodeButton/ExplosionButton'
import SoundReactive from './components/SoundReactive/SoundReactive'
import GlassMorph from './components/Morphing/GlassMorph'
import BouncingLoader from './components/BouncingLoader/BouncingLoader'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/water-drop" element={<WaterDropButton/>}/>
      <Route path="/explosion" element={<ExplosionButton/>} />
      <Route path="/sound-reactive" element={<SoundReactive/>} />
      <Route path="/glass-morphing" element={<GlassMorph/>}/>
      <Route path="/bouncing-loader" element={<BouncingLoader />}/>
    </Routes>
    </>
  )
}

export default App
