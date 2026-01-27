import { useActionState } from "react"

async function increment(prevState: number,formData:FormData) {
    console.log(formData.get('name'));
    return prevState+1;
}

const ActionCount = () => {
    const [state,formAction]=useActionState(increment,0);
  return (
    <div>
        <h2>Action Counter</h2>
        <form>
            <h3>{state}</h3>
            <button className="bg-teal-300 p-2" formAction={formAction}>INCREMENT</button>
            <br />
            <input type="text" placeholder="Please enter your name" className="border-2" name="name"/>
        </form>
    </div>
  )
}

export default ActionCount