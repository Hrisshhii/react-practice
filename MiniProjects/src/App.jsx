import { Counter } from './components/Counter/Counter'
import {Routes,Route} from 'react-router';
import { Home } from './components/Home';
import './App.css';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/counter" element={<Counter />}/>
      </Routes>
    </>
  )
}

export default App
