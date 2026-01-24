// Type Narrowing in TypeScript
type MyType= string | number;

function exampleFun(val: MyType):MyType{
    if(typeof val==="string"){
        console.log(val.toUpperCase());
        return val.toUpperCase();
    }else{
        console.log(val.toFixed(2));
        return val.toFixed(2);
    }
}

// instance of narrowing
class Dog{
    bark(): void{
        console.log("Woof Woof");
    }
};
class Cat{
    meow(): void{
        console.log("Meow Meow");
    }
}

function animalSound(animal: Dog|Cat):void{
    if(animal instanceof Dog){
        animal.bark();
    }else{
        animal.meow();
    }
};

const myDog=new Dog();
const myCat=new Cat();
animalSound(myDog);
animalSound(myCat);

export const TypeNarrowing = () => {
  return (
    <div>
        <h2>Type Narrowing</h2>
        <p>{exampleFun("hello")}</p>
        <p>{exampleFun(11)}</p>
    </div>
  )
}
