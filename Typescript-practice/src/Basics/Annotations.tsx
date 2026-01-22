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

export function Annotations(){
    return (
    <>
      <h1>Annotations</h1>
      <div>
        <p>{name}</p>
        <p>{num}</p>
        <p>{bool? "true":"false"}</p>
      </div>
    </>
  );
};