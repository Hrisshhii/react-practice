import { Counter } from './components/Counter/Counter'
import { Todo } from './components/Todo/Todo';
import { MealsList } from './components/MealsList/MealsList';
import {Routes,Route} from 'react-router';
import { Home } from './components/Home';
import './App.css';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/mealslist" element={<MealsList />} />
      </Routes>
    </>
  )
}

export default App
