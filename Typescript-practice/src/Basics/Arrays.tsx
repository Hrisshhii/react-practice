//Array type: two types [] or Array<type>
const nums:number[]=[1,2,3,4,5];
console.log(nums);

const items: string[]=[];
console.log(items);
items.push('Chocolate');
console.log(items);

const components: Array<string> =['Monitor'];
console.log(components);
components.push('Mouse');
console.log(components);

export function Arrays(){
    return <>
        <p>{nums}</p>
        <p>{items}</p>
        <p>{components}</p>
    </>
};