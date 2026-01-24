type Props={
  name: string;
  age: number;
}


const Users = ({name,age}: Props) => {
  return (
    <>
      <h1>user: {name}</h1>
      <h2>age: {age}</h2>
    </>
  )
}

export default Users