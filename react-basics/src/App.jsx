import './App.css';
import { createContext } from 'react';
import ComponentA from './components/ComponentA';

export const Data=createContext();
export const Data1=createContext();

function App() {
  const greet="Hello";
  const time="Morning";
  return (
    <>
      <Data.Provider value={greet}>
        <Data1.Provider value={time}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </>
  )
}

export default App
