//let myVar: type=value

let name: string="Old Name";
console.log(name);
name="New Name";
console.log(name);
// Error name=12

let num: number=10;
console.log(num);
num+=2;
console.log(num);

let bool: boolean=false;
console.log(bool);
bool=!bool;
console.log(bool);

const tech ="TypeScript";
const ver=1.0;
const use=true;
console.log(tech,ver,use);
console.log(typeof tech,typeof ver, typeof use);

//Any type
/*
  let val: any="ABC";
  console.log(val ,typeof val);
  val=15;
  console.log(val ,typeof val);
  val=true;
  console.log(val ,typeof val);
*/

function addOne(num: number){
  return num+1;
}
const result=addOne(3);
console.log(result);

const double=(x:number,y:number)=>x*y;
const res=double(2,10);
console.log(res);

// Default parameters
function greet(person="Anonoymous"){
  return `Hello ${person}`
}
let greetRes=greet();
console.log(greetRes);
greetRes=greet('User')
console.log(greetRes);

// Return Annotation
function doubleRet(x:number): number {
  return x*x;
};
let returnRes=doubleRet(2);
console.log(returnRes);

const dubRet=(x:number): number => {
  return x*x;
};
returnRes=dubRet(4);
console.log(returnRes);

export function Annotations(){
    return (
    <>
      <h1>Annotations</h1>
      <div>
        <p>{name}</p>
        <p>{num}</p>
        <p>{bool? "true":"false"}</p>
        <p>{tech} {ver} {use}</p>
        <p>{typeof tech} {typeof ver} {typeof use}</p>
        <p>3+1={result}</p>
        <p>2*10={res}</p>
        <p>{greetRes}</p>
      </div>
    </>
  );
};