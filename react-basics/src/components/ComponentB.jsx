import React from 'react'
import { Data, Data1 } from '../App'
import { useContext } from 'react'
const ComponentB = () => {
    const greetings=useContext(Data);
    const time=useContext(Data1);
  return (
    <h1>{greetings} {time}</h1>
)}

export default ComponentB