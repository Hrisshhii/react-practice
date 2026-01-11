import React from 'react'

const occ='Student';

const JSXProps = () => {
  return (
    <User name='Hrishi' age='21' occ={occ}/>
  )
}

const User=({name,age,occ})=>{
    return <section>{name}:{age} is a {occ}</section>
};

export default JSXProps