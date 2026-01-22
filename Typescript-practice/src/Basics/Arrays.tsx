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

//Multi-dimensional Array
const matrix: number[][]=[
    [1, 2, 3],
    [10, 11, 12]
];
console.log(matrix[1][2]);
console.log(matrix[0][1]);
console.log(matrix);

//Union:
const stuff: (number | string)[]=[1,5,4,'light'];
console.log(stuff);

export function Arrays(){
    return <>
        <p>{nums}</p>
        <p>{items}</p>
        <p>{components}</p>
        <p>{matrix}</p>
        <p>{stuff}</p>
    </>
};