import React from 'react'

const Valid=()=><h1>Valid</h1>
const Invalid=()=><h1>Invalid</h1>

const Conditional = ({isValid}) => {
  if (isValid){
    return <Valid />
  }
  return <Invalid />
}

export function UseTernery({isValid}){
    return isValid? <Valid /> :<Invalid />
}



export function Cart(){
    const items=["Apple","Banana","Chocolate"]
    return (
        <>
            <h1>Cart: 🛒</h1>
            {items.length>0 && <h2>You have {items.length} items in your cart</h2>}
            <ul>
                <h4>Products: </h4>
                {items.map((item)=>{
                    return <li key={crypto.randomUUID}>{item}</li>
                })}
            </ul>
        </>
    );
}

export default Conditional