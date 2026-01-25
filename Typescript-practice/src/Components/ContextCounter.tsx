import { useContext, type FC } from "react"
import { MyContext } from "../Context/MyContext"

const ContextCounter: FC = () => {
    const {count,increment,decrement}=useContext(MyContext);
  return (
    <div>
        <h2>Context Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default ContextCounter