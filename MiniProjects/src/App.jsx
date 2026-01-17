import { Counter } from './components/Counter'
import {Routes,Route} from 'react-router';
function App() {

  return (
    <>
      <Routes>
        <Route index element={<Counter />}/>
      </Routes>
    </>
  )
}

export default App
