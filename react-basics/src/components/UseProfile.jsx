import React, { useContext } from 'react'
import { Data } from './UseContext'
const UseProfile = () => {
    const {greet,updateGreet}=useContext(Data)
  return (
    <div>
        <h1>{greet.greetings}</h1>
        <button onClick={() => updateGreet("Welcome Hrishi")}>
        Change Greeting
        </button>
    </div>
  )
}

export default UseProfile