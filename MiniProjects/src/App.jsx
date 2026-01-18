import { Counter } from './components/Counter/Counter'
import { Todo } from './components/Todo/Todo';
import { MealsList } from './components/MealsList/MealsList';
import {Routes,Route} from 'react-router';
import { Home } from './components/Home';
import './App.css';
import { Calculator } from './components/Calculator/Calculator';
import { ToggleBg } from './components/ToggleBg/ToggleBg';
import { Hidden } from './components/HiddenSearchbar/Hidden';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/mealslist" element={<MealsList />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/togglebgcolor" element={<ToggleBg />} />
        <Route path="/hiddensearchbar" element={<Hidden />} />
      </Routes>
    </>
  )
}

export default App
