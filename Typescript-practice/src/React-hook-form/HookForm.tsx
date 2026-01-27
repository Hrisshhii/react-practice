import {useForm,type SubmitHandler} from 'react-hook-form';
// Register is used to connect input fields to the form.
// handleSubmit is function to handle form submission.
// errors contains validation errors for the form.
//isSubmitting is a flag.

interface FormData{
  name: string;
  email: string;
  password: string;
};

const HookForm = () => {
  const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm<FormData>();

  const onSubmit: SubmitHandler<FormData>=data=>{
    console.log(data);
  };
  return (
    <div>
      <h3>React Hook Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id='name' placeholder='Name' {...register('name',{required:"Name is Required"})} />
          {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}
          <br/>

          <label htmlFor="email">Email: </label>
            <input type="email" 
            id="email" placeholder='Email'
            {...register(
              'email',
              {required:"Email is Required",
                pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                  message: "Invalid format"}
              })}
          />
          {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
          <br/>
          
          <label htmlFor="password">Password: </label>
            <input 
              type="password" id='password' placeholder='Password' 
              {...register('password',
                {
                  minLength:{
                    value: 8,
                    message:"Password must be at least 8 characters"
                  }
                }
              )} 
            />
          {errors.password && <p style={{color: "red"}}>{errors.password.message}</p>}
          <br />
          <button disabled={isSubmitting}>{isSubmitting?"Loading...":"Submit"}</button>
        </div>
      </form>
    </div>
  )
}

export default HookForm