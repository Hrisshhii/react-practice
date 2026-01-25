import {type Admin,type User} from './types'
import AdminInfo from './Components/AdminInfo'
import Buttons from './Components/Buttons'
import UserInfo from './Components/UserInfo'
import Counter from './Components/Counter'
import UserProfile from './Components/UserProfile'
import Todo from './Components/Todo'
import Form from './Components/Form'
import FocusInput from './Components/FocusInput'
import ContactForm from './Components/ContactForm'
import EventHandling from './Components/EventHandling'
//import Users from './Components/Users'



// import { Annotations } from './Basics/Annotations'
// import { Arrays } from './Basics/Arrays'
// import ClassOOP from './Basics/ClassOOP'
// import { Interfaces } from './Basics/Interfaces'
// import { Objects } from './Basics/Objects'
// import { TypeNarrowing } from './Basics/TypeNarrowing'
function App() {
  const user: User={
    id: 1,
    name: "User",
    email: "user@gmail.com"
  }
  const admin: Admin={
    id: 2,
    name: "Admin",
    email:"admin@gmail.com",
    lastLogin: new Date()
  }


  return (
    <>
      {/* {<Annotations />}
      {<Arrays />}
      {<Objects />}
      {<ClassOOP />}
      {<Interfaces />}
      {<TypeNarrowing />} */}

      {/*
        react with typescript
      */}

      {/* <Users name={"Hrishi"} age={21}>
        <p>Hello</p>
      </Users> */}
      <Buttons label="Click me" onClick={()=>console.log("Clicked")} disabled={false} />
      <AdminInfo admin={admin}/>
      <UserInfo user={user}/>
      <Counter />
      <UserProfile />
      <Todo />
      <Form />
      <FocusInput />
      <ContactForm />
      <EventHandling />
    </>
  )
}

export default App
