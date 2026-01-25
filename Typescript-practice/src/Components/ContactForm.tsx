import { useState, type ChangeEvent, type FormEvent } from "react"

interface FormState{
    name: string;
    email: string;
};

const ContactForm = () => {
    const [formData,setFormData]=useState<FormState>({
        name:"",
        email:""
    });

    const handleChange= (e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setFormData(prev=>({...prev,[name]:value}));

    };
    const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("Form Submitted: ",formData);
    };
  return (
    <form onSubmit={handleSubmit}>
        <h2>Contact Form : </h2>
        <div>
            <label>Name:
                <input type="text" value={formData.name} name="name" onChange={handleChange} />
            </label>
        </div>
        <div>
            <label>Email: 
                <input type="email" value={formData.email} name="email" onChange={handleChange} />
            </label>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm