import './App.css'
import { Annotations } from './Basics/Annotations'
import { Arrays } from './Basics/Arrays'
import ClassOOP from './Basics/ClassOOP'
import { Interfaces } from './Basics/Interfaces'
import { Objects } from './Basics/Objects'

function App() {
  return (
    <>
      {<Annotations />}
      {<Arrays />}
      {<Objects />}
      {<ClassOOP />}
      {<Interfaces />}
    </>
  )
}

export default App
