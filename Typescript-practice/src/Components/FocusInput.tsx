import { useRef } from "react"

const FocusInput = () => {
    const inputRef=useRef<HTMLInputElement>(null);
    const handleFocus=()=>{
        inputRef.current?.focus();
    };
  return (
    <div>
        <h2>Focus Input Components: </h2>
        <input type="text" ref={inputRef} placeholder="Click to focus me "></input>
        <button onClick={handleFocus} >Focus input</button>
    </div>
  )
}

export default FocusInput