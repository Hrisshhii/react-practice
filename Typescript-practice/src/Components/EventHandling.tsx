import React from "react";


const EventHandling = () => {

    const handleClick=(e: React.MouseEvent<HTMLButtonElement>)=>{
        console.log("Button Click",e.currentTarget);
    };
    const handleMouseEnter=(e: React.MouseEvent<HTMLDivElement>)=>{
        console.log("Mouse Entered Div: ",e.currentTarget);
    };
  return (
    <div onMouseEnter={handleMouseEnter}>
        <h2>Event handling: </h2>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default EventHandling