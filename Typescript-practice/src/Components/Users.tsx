import {type FC, type ReactNode} from "react";

type Props={
  name: string;
  age: number;
  children: ReactNode;
}


const Users: FC<Props>= ({name,age,children}) => {
  return (
    <>
      <h1>{children}</h1>
      <h2>User: {name}</h2>
      <h2>age: {age}</h2>
    </>
  )
}

export default Users