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

const p2: Person={
    name: "Ryan Reynolds",
    age: 47,
    greet(): string{
        return `Hello ${this.name},age is ${this.age}`;
    }
};

//Interface for function types:
interface mathFunc{
    (x: number,y: number): number;
}

const add: mathFunc=function(x: number,y: number): number{
    return x+y;
}

const sub: mathFunc=(a,b)=>{
    return a-b;
};

console.log(p2.greet());
export const Interfaces = () => {
  return (
    <div>
        <p>{p1.greet()}</p>
        <p>{p2.greet()}</p>
        <p>Addition: 5+3={add(5,3)}</p>
        <p>Subtraction: 5-3={sub(5,3)}</p>
    </div>
  )
}
