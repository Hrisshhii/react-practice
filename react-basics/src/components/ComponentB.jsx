import React from 'react'
import { Data, Data1 } from '../App'
const ComponentB = () => {
  return (
    <Data.Consumer>
        {(greet)=>{
            return (
                <Data1.Consumer>
                    {(time)=>{
                        return <h1>{greet} {time}</h1>
                    }}
                </Data1.Consumer>
            )
        }}
    </Data.Consumer>
)}

export default ComponentB