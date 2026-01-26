import { useEffect, useState } from "react";

interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

const UserList = () => {
    const [users,setUsers]=useState<User[]>([]);
    const [loading,setLoading]=useState<boolean>(true);
    const [error,setError]=useState<string | null>(null);

    useEffect(()=>{
        const fetchUsers=async ()=>{
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok) throw new Error("Respose not ok");
                const data: User[]=await response.json();
                setUsers(data);
            }catch (error){
                setError(error instanceof Error ? error.message: 'Error has occured');
            }finally{
                setLoading(false);
            }
        };
        fetchUsers();
    },[]);

    if(loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error}</h1>

  return (
    <div>
        <h1>User List:</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserList