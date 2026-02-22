import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import PulseButton from './components/PulseButton/PulseButton'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/pulse-button" element={<PulseButton/>}/>
    </Routes>
    </>
  )
}

export default App
