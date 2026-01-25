import { useState,useEffect } from "react"

type Product={
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const UseEffect = () => {
    const [data,setData]=useState<Product | null>(null);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch('https://dummyjson.com/product/6');
                const result: Product=await response.json();
                setData(result);
            }catch(err){
                console.log("Error fetching data: ",err);
            }
        };
        fetchData();
    },[])
  return (
    <div>
        <h1>UseEffect in TS: </h1>
        {data ? (
            <div>
                <p><b>ID:</b> {data.id}</p>
                <p><b>Title:</b> {data.title}</p>
                <p><b>Description:</b> {data.description}</p>
                <p><b>Price:</b> ₹{data.price}</p>
                <p><b>Rating:</b> {data.rating}</p>
                <p><b>Brand:</b> {data.brand}</p>
                <img src={data.thumbnail} alt={data.title} width={200} />
            </div>
        ):(<p>Loading...</p>)}

    </div>
  )
}

export default UseEffect