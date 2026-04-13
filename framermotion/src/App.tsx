import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import WaterDropButton from './components/PulseButton/WaterDropButton'
import ExplosionButton from './components/ExplodeButton/ExplosionButton'
import SoundReactive from './components/SoundReactive/SoundReactive'
import GlassMorph from './components/Morphing/GlassMorph'
import BouncingLoader from './components/BouncingLoader/BouncingLoader'
import FlippingCards from './components/FlippingCards/FlippingCards'
import Gesture from './components/Gesture/Gesture'
import Stagger from './components/Stagger/Stagger'
import RangeSlider from './components/RangeSlider/RangeSlider'
import DragColor from './components/DragColor/DragColor'
import ScrollAnimation from './components/ScrollAnimations/ScrollAnimation'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/water-drop" element={<WaterDropButton/>}/>
      <Route path="/explosion" element={<ExplosionButton/>} />
      <Route path="/sound-reactive" element={<SoundReactive/>} />
      <Route path="/glass-morphing" element={<GlassMorph/>}/>
      <Route path="/loader-animation" element={<BouncingLoader />}/>
      <Route path="/flipping-card" element={<FlippingCards/>}/>
      <Route path="/gesture" element={<Gesture/>}/>
      <Route path="/stagger" element={<Stagger/>}/>
      <Route path="/range-slider" element={<RangeSlider/>}/>
      <Route path="/drag-color" element={<DragColor/>}/>
      <Route path="/scroll-animation" element={<ScrollAnimation/>}/>
      <Route path="/tinder-movies" element={``}/>
    </Routes>
    </>
  )
}

export default App
