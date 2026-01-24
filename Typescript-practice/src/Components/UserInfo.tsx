import {type User} from '../types'
const UserInfo = ({user}: {user: User}) => {
  return (
    <div>
        <h2>User Info: </h2>
        <p>Id: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default UserInfo