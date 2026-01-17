import axios from 'axios';
import { useState,useEffect } from 'react';
import './MealsList.css';
import { BackHome } from '../BackHome';
import { SearchBar } from './SearchBar';
import { CategoryChips } from './CategoryChips';
import { SurpriseButton } from './SurpriseButton';
import { MealsGrid } from './MealsGrid';
import { MealModal } from './MealModal';

export function MealsList(){
  const [meals,setMeals]=useState([]);
  const [loading,setLoading]=useState(true);
  const [query,setQuery]=useState("");
  const [activeCategory,setActiveCategory]=useState("Seafood");
  const [selectedMeal,setSelectedMeal]=useState(null);
  const [mealDetails,setMealDetails]=useState(null);

  const categories=["Seafood","Chicken","Vegetarian","Dessert"];

  const filteredMeals=meals.filter(m=>m.strMeal.toLowerCase().includes(query.toLowerCase()))

  useEffect(()=>{
    async function fetchData(){
      setLoading(true);
      try{
        const results = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`);
        setMeals(results.data.meals);
      }catch(err){
        console.error("Failed to load meals", err);
      }finally{
        setLoading(false);
      }
    };
    fetchData();
  },[activeCategory]);

  useEffect(()=>{
    if(!selectedMeal) return;
    async function fetchDetails() {
      const res=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedMeal}`);
      setMealDetails(res.data.meals[0]);
    }
    fetchDetails();
  },[selectedMeal])

  const getRandomMeal=async ()=>{
    const res=await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
    setMealDetails(res.data.meals[0]);
  }


  return (
    <div className='meals'>
      <title>Meals List</title>
      <BackHome />

      <SearchBar value={query} onChange={setQuery} />
      <CategoryChips
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <SurpriseButton onClick={getRandomMeal} />
      {loading ? (
        <div className='loading'>Loading Meals...</div>
      ):(
        <MealsGrid meals={filteredMeals} onSelect={setSelectedMeal} />
      )}
      <MealModal meal={mealDetails} onClose={()=>{setSelectedMeal(null); setMealDetails(null);}} />
    </div>
  );
};