import {type ReactNode} from "react";

type Props={
  name: string;
  age: number;
  children: ReactNode;
}


const Users = ({name,age,children}: Props) => {
  return (
    <>
      <h1>{children}</h1>
      <h2>User: {name}</h2>
      <h2>age: {age}</h2>
    </>
  )
}

export default Users