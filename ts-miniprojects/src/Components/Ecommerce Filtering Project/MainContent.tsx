import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext"
import { Tally3 } from "lucide-react";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
}

const MainContent = () => {
  const {searchQuery,selectedCategory,minPrice,maxPrice,keyword,setCurrentPage,currentPage}=useFilter();
  const [products,setProducts]=useState<Product[]>([]);
  const [filter,setFilter]=useState("all");
  const [dropDown,setDropDown]=useState(false);
  const [pageRange,setPageRange]=useState(2);
  const itemsPerPage=12;

  useEffect(()=>{
    let url="";

    if (selectedCategory) {
      url=`https://dummyjson.com/products/category/${selectedCategory}?limit=${itemsPerPage}&skip=${(currentPage-1)*itemsPerPage}`;
    } 
    else if (keyword) {
      url=`https://dummyjson.com/products/search?q=${keyword}&limit=${itemsPerPage}&skip=${(currentPage-1)*itemsPerPage}`;
    } 
    else if (searchQuery) {
      url=`https://dummyjson.com/products/search?q=${searchQuery}&limit=${itemsPerPage}&skip=${(currentPage-1)*itemsPerPage}`;
    }
    else {
      url=`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage-1)*itemsPerPage}`;
    }
    axios.get(url).then(response=>{
      setProducts(response.data.products);
    }).catch(error=>{
      console.error("Error Fetching Data",error)
    });
  },[currentPage,keyword,selectedCategory,searchQuery,minPrice,maxPrice]);

  const getFilterProducts=()=>{
    let filteredProducts=[...products]
    if(selectedCategory){
      filteredProducts=filteredProducts.filter(product=>product.category===selectedCategory);
    }
    if(minPrice!==undefined){
      filteredProducts=filteredProducts.filter(product=>product.price>=minPrice);
    }
    if(maxPrice!==undefined){
      filteredProducts=filteredProducts.filter(product=>product.price<=maxPrice);
    }
    if(searchQuery){
      filteredProducts=filteredProducts.filter(product=>product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    switch(filter){
      case "Low-to-high":
        return filteredProducts.sort((a,b)=>a.price-b.price);
      case "High-to-low":
        return filteredProducts.sort((a,b)=>b.price-a.price);
      case "Popular":
        return filteredProducts.sort((a,b)=>b.rating-a.rating);
      default:
        return filteredProducts;
    }
  };

  const filteredProducts=getFilterProducts();

  const totalproducts=100;
  const totalPages=Math.ceil(totalproducts/itemsPerPage);
  const handlePageChange=(page:number)=>{
    if(page>0 && page<=totalPages){
      setCurrentPage(page)
    }
  };

  useEffect(()=>{
    const handleResize=()=>{
      if(window.innerWidth<640){
        setPageRange(1);
      }else{
        setPageRange(2);
      }
    };
    handleResize();
    window.addEventListener("resize",handleResize);
    return()=>window.removeEventListener("resize",handleResize);
  },[])

  const getPage=()=>{
    const buttons:number[]=[]
    let startPage=Math.max(1,currentPage-pageRange)
    let endPage=Math.min(totalPages,currentPage+pageRange)

    if(currentPage-2<1){
      endPage=Math.min(totalPages,endPage+(2-currentPage-1));
    }
    if(currentPage+2<1){
      startPage=Math.min(1,startPage-(2-totalPages-currentPage));
    }

    for(let page=startPage;page<=endPage;page++){
      buttons.push(page);
    }
    return buttons;
  };

  return (
    <section className="p-2 w-[18rem] lg:w-[55rem] sm:w-[40rem] md:w-[45rem] font-mono">
      <div className="mb-3">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="relative mb-3 mt-3">
            <button onClick={()=>setDropDown(prev=>!prev)} className="items-center flex rounded-full bg-transparent border-none text-[#bbc9ee]">
              <Tally3 className="cursor-pointer mr-5"/>
              <div className="text-[1.2rem] font-mono cursor-pointer">
                {filter==="all"?"Filter":filter.charAt(0)+filter.slice(1)}
              </div>
            </button>
            {dropDown && (
              <div className="absolute rounded mt-2 w-full">
                <button onClick={()=>{setFilter("Low-to-high");setDropDown(false)}} 
                  className="cursor-pointer block px-4 py-2 w-full text-[1rem] text-[#bbc9ee]/60 bg-[#1A1C1E] hover:bg-[#616f7c] border border-solid border-[#bbc9ee]"
                >
                  Low to High
                </button>
                <button onClick={()=>{setFilter("High-to-low");setDropDown(false)}} 
                  className="cursor-pointer block px-4 py-2 w-full text-[1rem] text-[#bbc9ee]/60 bg-[#1A1C1E] hover:bg-[#616f7c] border border-solid border-[#bbc9ee]"
                >
                  High to Low
                </button>
                <button onClick={()=>{setFilter("Popular");setDropDown(false)}} 
                  className="cursor-pointer block px-4 py-2 w-full text-[1rem] text-[#bbc9ee]/60 bg-[#1A1C1E] hover:bg-[#616f7c] border border-solid border-[#bbc9ee]"
                >
                  Popular
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-[#1A1C1E] p-3 rounded-lg">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="text-white mt-2">{product.title}</h3>
              <p className="text-[#bbc9ee]">${product.price}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center gap-2 md:gap-6 mt-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-white border border-white/20 bg-black disabled:text-white/10 disabled:border-white/5 cursor-pointer rounded-md"
          >
            Prev
          </button>

          <div className="flex gap-1 md:gap-2">
            {getPage().map(page => (
              <button
                key={page}
                onClick={()=>handlePageChange(page)}
                className={`p-3 px-4 rounded-full cursor-pointer border-none ${
                  currentPage===page?"bg-[#6a8ce9] text-white":"text-white/50 bg-transparent"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={()=>handlePageChange(currentPage + 1)}
            disabled={currentPage===totalPages}
            className="px-4 py-2 text-white border border-white/20 bg-black disabled:text-white/10 disabled:border-white/5 cursor-pointer rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default MainContent