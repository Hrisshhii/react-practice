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
console.log(p2.greet());

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

// Inteface with classes: 
interface Animals{
    species: string;
    sayHello(): string;
}
function animalGreet(animal: Animals): string{
    return `Hello from ${animal.species}`;
    animal.sayHello();
}

const dog: Animals={
    species: "Canine",
    sayHello(): string{
        return "Woof Woof!";
    }
};

const cat: Animals={
    species: "Feline",
    sayHello(): string{
        return "Meow Meow!";
    }
};

// Interface inheritance
interface Shape{
    readonly name: string;
    sides: number;
    area: number | string;
}
interface Rectangle extends Shape{
    length: number;
    breadth: number;
}
const rec: Rectangle={
    name: "Rectangle",
    sides: 4,
    length: 10,
    breadth: 5,
    area: 50
};
console.log(rec);

// Implementing interface in class
interface Vehicle{
    start(): string;
    stop(): string;
};

class Car implements Vehicle{
    start(): string{
        return "Car Started";
    }
    stop(): string{
        return "Car Stopped";
    }
};

const c1=new Car();
console.log(c1.start());
console.log(c1.stop());

//Declaration Merging in interfaces
//TS merges two inteface with same name

//Original interface
interface Book{
    title: string;
    read(): void;
};
//Merged interface
interface Book{
    author: string;
    publish(): void;
};

const myBook: Book={
    title: "Notes from Underground",
    author: "Fyodor Dostoevsky",
    read(): void{
        console.log(`Reading ${this.title}`);
    },
    publish(): void{
        console.log(`Publish by ${this.author}`);
    }
};

myBook.read();
myBook.publish();

//Generics 

export const Interfaces = () => {
  return (
    <div>
        <p>{p1.greet()}</p>
        <p>{p2.greet()}</p>
        <p>Addition: 5+3={add(5,3)}</p>
        <p>Subtraction: 5-3={sub(5,3)}</p>
        <p>Dog: {animalGreet(dog)}--{dog.sayHello()}</p>
        <p>Cat: {animalGreet(cat)}--{cat.sayHello()}</p>
        <p>Shape Name: {rec.name}</p>
    </div>
  )
}
