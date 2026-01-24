import './App.css'
import { Annotations } from './Basics/Annotations'
import { Arrays } from './Basics/Arrays'
import ClassOOP from './Basics/ClassOOP'
import { Interfaces } from './Basics/Interfaces'
import { Objects } from './Basics/Objects'
import { TypeNarrowing } from './Basics/TypeNarrowing'

function App() {
  return (
    <>
      {<Annotations />}
      {<Arrays />}
      {<Objects />}
      {<ClassOOP />}
      {<Interfaces />}
      {<TypeNarrowing />}
    </>
  )
}

export default App
