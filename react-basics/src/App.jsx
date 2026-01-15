import './App.css';
import ComponentA from './components/ComponentA';
import { UserProvider } from './components/UseContext';
import UseProfile from './components/UseProfile';
function App() {
  
  return (
    <UserProvider>
      <UseProfile />
    </UserProvider>
  )
}

export default App
