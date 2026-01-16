import {useId} from 'react'

export const UniqueId = () => {
    const id=useId();
  return (
    <>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type="email" id={`${id}-email`}/>
        <br />
        <label htmlFor={`${id}-password`}>Password</label>
        <input type="password" id={`${id}-password`}/>
    </>
  )
}
