import React from 'react'

const todaysDate=new Date();
const myName="Hrishi";
const multiply=(a,b)=>a*b;
const classEmbed='MyClass';
const products={
    name: 'Car',
    model: 'A',
    price: 45000
};

const JSXfunctions = () => {
  return (
    <>
        <h1>JSX functions:</h1>
        <ul>
            <li>Name: {myName}</li>
            <li>2 X 2= {multiply(2,2)}</li>
            <p className={classEmbed}> Class via curly brackets</p>
            <p> todays Date: {todaysDate.getDate()}</p>
            <li>Product Name: {products.name}</li>
            <li>Product Model: {products.model}</li>
            <li>Product Price: ${products.price}</li>
        </ul>
    </>
  )
}

export default JSXfunctions