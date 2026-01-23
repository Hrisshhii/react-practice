//Access Modifiers: public, private and protected

class Person{
    public name: string;
    public age: number;

    constructor(name: string,age: number){
        this.name=name;
        this.age=age;
    }
    getName():string{
        return this.name;
    }
};

//extends for inheritance
//syntax: class ChildClass extends className{}

const person=new Person('Alex',25);
console.log(typeof person);

//Getters and Setters
//getters are ued to get private properties
//setters used to set private properties

class Employee{
  private empName: string="John Doe";

  get myProperty(): string{
    return this.empName;
  }

  set myProperty(value: string){
      this.empName=value;
  }
}

const emp=new Employee();
emp.myProperty="Ryan Gosling";
console.log(emp.myProperty);

const ClassOOP = () => {
  return (
    <div>
        <p>Name: {person.getName()}</p>
        <p>Age: {person.age}</p>
        <p>Employee Name: {emp.myProperty}</p>
    </div>
  )
}

export default ClassOOP