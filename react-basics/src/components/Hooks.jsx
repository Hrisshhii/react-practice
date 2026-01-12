/*
- state is a way to store and manage data that can change over time and affect how component renders. Defined using useState Hook having initial value and a updator function.
--const [data,changeData]=useState()


*/

import React,{useState} from 'react'

const Hooks = () => {
  const [count,setCount]=useState(0);
  const increment=()=>setCount(count+1);
  const decrement=()=>setCount(count-1);

  const [names,setNames]=useState(['Peter','Bruce']);
  const addName=()=>setNames([...names,'Clark']);
  const removeName=()=>setNames(names.filter(f=>f!='Clark'));
  const updateName=()=>{setNames(names.map(f=>f==='Peter'?'Peter Parker':f))};

  const [movie,setMovie]=useState({
    title:'Whiplash',
    rating: 10
  });

  const changeRat=()=>{
    //const copyMovie={...movie,rating:11};
    //setMovie({copyMovie});
    setMovie({...movie,rating:11});
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>

      {names.map(fr=>(
        <li key={crypto.randomUUID}>{fr}</li>
      ))}
      <button onClick={addName}>ADD NEW NAME</button>
      <button onClick={removeName}>REMOVE NAME</button>
      <button onClick={updateName}>UPDATE NAME</button>

      <h1>{movie.title}</h1>
      <p>rating: {movie.rating}</p>
      <button onClick={changeRat}>Change rating</button>
    </>
  );
}

export default Hooks