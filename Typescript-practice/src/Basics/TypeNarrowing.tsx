// Type Narrowing in TypeScript
type MyType= string | number;

function exampleFun(val: MyType):void{
    if(typeof val==="string"){
        console.log(val.toUpperCase());
    }else{
        console.log(val.toFixed(2));
    }
}

exampleFun("hello");
exampleFun(11);

export const TypeNarrowing = () => {
  return (
    <div>
        <h2>Type Narrowing</h2>
    </div>
  )
}
