import './App.css';
import UseFetch from './components/useFetch';

function App() {
  const [data]=UseFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
        {data && data.map((item)=>{
            return (
                <h3 key={item.id}>{item.title}</h3>
            );
        })}
    </>
  );
}

export default App
