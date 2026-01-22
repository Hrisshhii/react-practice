const person: {firstName: string,lastName: string,age: number}={
    firstName: "John",
    lastName: "Doe",
    age: 30
};
console.log(person);

//As function: 
function printUser(): {name: string,age: number}{
    return {
        name: "Alex",
        age: 12
    };
}
const n=printUser();
console.log(n.name,n.age);

//type alias: 
type Person={
    name: string,
    age: number
};

function printPerson(user: Person){
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}
const myPerson: Person={ name: "Marty", age: 25 };
printPerson(myPerson);


export function Objects(){
    return <>
        <p>Name: {person.firstName} {person.lastName}</p>
        <p>Age: {person.age}</p>
        <p>User: {n.name}, Age: {n.age}</p>
    </>
};