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
import ContextCounter from './Components/ContextCounter'
import ReducerCounter from './Components/ReducerCounter'
import UseEffect from './Components/UseEffect'
import UserList from './Components/UserList'
import HookForm from './React-hook-form/HookForm'
//import FetchTodo from './React-19 features/FetchTodo'
//import { Suspense } from 'react'
import Theme from './React-19 features/Theme/Theme'
import ActionForm from './React-19 features/ActionForm'
import ActionCount from './React-19 features/ActionCount'
import { useState,useTransition } from 'react'
import Home from './React-19 features/UseTransitionHook/Home'
import Posts from './React-19 features/UseTransitionHook/Posts'
import Contact from './React-19 features/UseTransitionHook/Contact'
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

  //react 19 useTransitionHook
  const [activeTab,setActiveTab]=useState('home');
  const [isPending,startTransition]=useTransition();

  const handleTabChange=(tab:string)=>{
    startTransition(()=>{
      setActiveTab(tab);
    })
  };

  const renderContent=()=>{
    switch(activeTab){
      case 'home':
        return <Home />
      case 'posts':
        return <Posts />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  };

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
      <ContextCounter />
      <ReducerCounter />
      <UseEffect />
      <UserList />

      {/* React Hook Form:  */}
      <h1>Reat hook Form</h1>
      <HookForm />

      <h1>React 19 Features</h1>
      {/* <Suspense fallback={<p>Loading todo...</p>}>
        <FetchTodo />
      </Suspense> */}
      <div className='flex justify-center items-center w-full mt-10rem'>
        <Theme />
      </div>
      <br />
      <ActionForm />
      <ActionCount />

      <div>
        <div className="tabs">
          <button className="border-2 p-4" onClick={()=>handleTabChange('home')}>Home</button>
          <button onClick={()=>handleTabChange('contact')}>Contacts</button>
          <button onClick={()=>handleTabChange('posts')}>Posts</button>
        </div>
        {isPending && <p>Loading.....</p>}
        <div className="content">{renderContent()}</div>
      </div>
    </>
  )
}

export default App
