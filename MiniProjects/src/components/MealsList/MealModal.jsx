export function MealModal({ meal, onClose }) {
  if (!meal) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <img src={meal.strMealThumb} />
        <h2>{meal.strMeal}</h2>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
}
