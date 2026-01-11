import React from 'react';
const JsxLists = () => {
    const nums=[1,2,3,4,5];
    const users=[
        {
            username: 'Hrishi',
            age: 21
        },{
            username: 'Arth',
            age: 20
        },{
            username: 'Sanjay',
            age: 22
        }
    ];
  return (
    <>
        {nums.map((num)=>{
            return <li key={num}>{num}</li>
        })}
        {users.map(({username,age})=>(
            <ul key={crypto.randomUUID()}>
                <li>{username}</li>
                <li>{age}</li>
            </ul>
        ))}
    </>
  )
}

export default JsxLists