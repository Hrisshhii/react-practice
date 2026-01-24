import { type Admin } from "../types"
const AdminInfo = ({admin}: {admin: Admin}) => {
  return (
    <div>
        <h2>Admin Info: </h2>
        <p>Id: {admin.id}</p>
        <p>Name: {admin.name}</p>
        <p>Email: {admin.email}</p>
        <p>Last Login: {admin.lastLogin.toString()}</p>
    </div>
  )
}

export default AdminInfo