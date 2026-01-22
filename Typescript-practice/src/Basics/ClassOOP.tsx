class Person{
    name: string;
    age: number;

    constructor(name: string,age: number){
        this.name=name;
        this.age=age;
    }
};

const person=new Person('Alex',25);
console.log(typeof person);

const ClassOOP = () => {
  return (
    <div>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
    </div>
  )
}

export default ClassOOP