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


export const TypeNarrowing = () => {
  return (
    <div>
        <h2>Type Narrowing</h2>
        <p>{exampleFun("hello")}</p>
        <p>{exampleFun(11)}</p>
    </div>
  )
}
