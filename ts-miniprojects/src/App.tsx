import {Routes,Route} from 'react-router';
import HomePage from './Components/HomePage';
import Tabs from './Components/Tabs Project/Tabs';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/tabs' element={<Tabs />}/>
    </Routes>
    </>
  )
}

export default App
