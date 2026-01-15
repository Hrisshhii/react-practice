import React from 'react'
import { Data } from './Context'
import { UseContext } from 'react'
const ComponentB = () => {
    const greetings=UseContext(Data);
  return (
    <h1>{greetings}</h1>
)}

export default ComponentB