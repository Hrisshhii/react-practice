import { useRef, useState, type FormEvent } from "react";

type FormData={
    name: string;
    email: string;
    password: string;
}

const Form = () => {
    const [submitted,setSubmitted]=useState<FormData>({
        name: "",
        email:"",
        password:""
    });
    const nameRef=useRef<HTMLInputElement>(null);
    const emailRef=useRef<HTMLInputElement>(null);
    const passwordRef=useRef<HTMLInputElement>(null);

    const handleSubmit=(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const name=nameRef.current?.value||"";
        const email=emailRef.current?.value||"";
        const password=passwordRef.current?.value||"";
        setSubmitted({name,email,password});
    };
  return (
    <div>
        <h2>Simple Form: </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Name" ref={nameRef} />
            <input type="email" placeholder="Enter Email" ref={emailRef} />
            <input type="password" placeholder="Enter Password" ref={passwordRef} />  
            <button type="submit">Submit</button> 

            <section>
                <h1>Name: {submitted.name}</h1>
                <h1>Email: {submitted.email}</h1>
                <h1>Password: {submitted.password}</h1>
            </section>    
        </form>
    </div>
  )
}

export default Form