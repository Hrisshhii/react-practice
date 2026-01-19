import { useState } from 'react';
import { BackHome } from '../BackHome';
import './FormValidation.css';

export function FormValidation(){
    const [form,setForm]=useState({
        name:"",
        email:"",
        password:"",
        confirm:""
    });
    const [errors,setErrors]=useState({});

    const handleChange=(e)=>{
        const {name,value} =e.target;
        setForm(prev=>({...prev,[name]:value}))
    };

    const validate=()=>{
        let newErrors={};
        if(!form.name.trim()) newErrors.name="Name is required";
        if(!form.email.trim()) newErrors.email="Email is required";
        else if(!/^\S+@\S+\.\S+$/.test(form.email)){
            newErrors.email="Invalid email format";
        }

        if (!form.password){
            newErrors.passward="Password is required";
        }else if(form.password.length<8){
            newErrors.password="Minimum 8 characters";
        }

        if(form.confirm !== form.password){
            newErrors.confirm="Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length===0;
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate()){
            alert("Form Submitted Successfully 🎉")
        }
    };
    return (
        <div className="form-page">
            <BackHome />
            <form className='form-card' onSubmit={handleSubmit}>
                <h2>Form Validation</h2>
                <div className='field'>
                    <input name="name" placeholder='name' onChange={handleChange}/>
                    {errors.name && <span className='error-text'>{errors.name}</span>}
                </div>
                <div className='field'>
                    <input name="email" placeholder='Email' onChange={handleChange}/>
                    {errors.email && <span className='error-text'>{errors.email}</span>}
                </div>
                <div className='field'>
                    <input type="password" name='password' placeholder='Password' onChange={handleChange}/>
                    {errors.password && <span className='error-text'>{errors.password}</span>}
                </div>
                <div className='field'>
                    <input type="password" name='confirm' placeholder='Confirm Password' onChange={handleChange}/>
                    {errors.confirm && <span className='error-text'>{errors.confirm}</span>}
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};