import './App.css';
import Conditional, { Cart, UseTernery } from './components/conditional';
import JSXProps from './components/JSXProps';
function App() {
  return (
    <>
      <Conditional isValid={true}/>
      <Conditional isValid={false}/>
      <UseTernery isValid={true}/>
      <UseTernery isValid={false}/>

      <Cart />
    </>
  )
}

export default App
