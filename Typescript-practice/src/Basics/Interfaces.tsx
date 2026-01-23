//interfaces are used to define the structure of an object for property types and method types

interface Person{
    name: string;
    age: number;
    greet():string;
}
class P1 implements Person{
    name: string="Hugh Jackman";
    age: number=52;
    greet(): string{
        return `Hello ${this.name},age is ${this.age}`;
    }
};
const p1=new P1();
console.log(p1.greet());

export const Interfaces = () => {
  return (
    <div>{p1.greet()}</div>
  )
}
