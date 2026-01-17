import { MealCard } from "./MealCard";

export function MealsGrid({ meals, onSelect }) {
  return (
    <div className="grid">
      {meals.map(meal => (
        <MealCard key={meal.idMeal} meal={meal} onClick={onSelect} />
      ))}
    </div>
  );
}