/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";

interface FilterContextType{
  searchQuery:string;
  setSearchQuery:(query:string)=>void;
  selectedCategory:string;
  setSelectedCategory:(category:string)=>void;
  minPrice:number|undefined;
  setMinPrice:(price:number|undefined)=>void;
  maxPrice:number|undefined;
  setMaxPrice:(price:number|undefined)=>void;
  keyword:string;
  setKeyword:(keyword:string)=>void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const FilterContext=createContext<FilterContextType|undefined>(undefined)

export const FilterProvider: React.FC<{children:ReactNode}>=({children,})=>{
  const [searchQuery,setSearchQuery]=useState("");
  const [selectedCategory,setSelectedCategory]=useState("");
  const [minPrice,setMinPrice]=useState<number|undefined>(undefined);
  const [maxPrice,setMaxPrice]=useState<number|undefined>(undefined);
  const [keyword,setKeyword]=useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return <FilterContext.Provider value={{
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    keyword,
    setKeyword,
    currentPage,
    setCurrentPage,
  }}>
    {children}
  </FilterContext.Provider>
};

export const useFilter=()=>{
  const context=useContext(FilterContext);
  if(context===undefined){
    throw new Error("useFilter must be used within a FilterProvider")
  }
  return context;
}