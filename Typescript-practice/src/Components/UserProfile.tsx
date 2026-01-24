import { useState } from "react"

interface UserProfileState{
    name: string,
    age: number,
    email: string
}



const UserProfile = () => {
    const [profile,setProfile]=useState<UserProfileState>({
        name: "",
        age: 0,
        email: ""
    });
    const updateName=(name: string)=>{
        setProfile((prev)=>({...prev,name:name}));
    };
    const updateAge=(age: number)=>{
        setProfile((prev)=>({...prev,age: Number(age)}));
    };
    const updateEmail=(email: string)=>{
        setProfile((prev)=>({...prev,email: email}));
    };
  return (
    <div>
        <h1>User Profile</h1>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Email: {profile.email}</p>

        <input type="text" placeholder="Enter the name..." value={profile.name} onChange={e=>updateName(e.target.value)} />
        <input type="number" placeholder="Enter the age..." value={profile.age>0? profile.age:""} onChange={e=>updateAge(parseInt(e.target.value))} />
        <input type="email" placeholder="Enter the email..." value={profile.email} onChange={e=>updateEmail(e.target.value)} />
    </div>
  )
}

export default UserProfile