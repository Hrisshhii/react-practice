import {Routes,Route} from 'react-router';
import { Home } from './components/Home';
import { Counter } from './components/Counter/Counter'
import { Todo } from './components/Todo/Todo';
import { MealsList } from './components/MealsList/MealsList';
import { Calculator } from './components/Calculator/Calculator';
import { ToggleBg } from './components/ToggleBg/ToggleBg';
import { Hidden } from './components/HiddenSearchbar/Hidden';
import { PokemonSlider } from './components/PokeDex/Pokedex';
import { Accordion } from './components/Accordion/Accordion';
import { FormValidation } from './components/FormValidation/FormValidation';
import { Ecommerce } from './components/Ecommerce-filtering/Ecommerce';
import { Weather } from './components/Weather/Weather';
import { Music } from './components/Music-Player/Music';
import './App.css';
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
        <Route path="/pokedex" element={<PokemonSlider />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/formvalidation" element={<FormValidation />} />
        <Route path="/ecommercefiltering" element={<Ecommerce />} />
        <Route path='/weather' element={<Weather />}/>
        <Route path='/musicplayer' element={<Music />} />
      </Routes>
    </>
  )
}

export default App
