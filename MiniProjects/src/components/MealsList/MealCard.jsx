export function MealCard({meal,onClick}){
    return (
        <section className="card" onClick={()=>onClick(meal.idMeal)}>
            <img src={meal.strMealThumb} loading="lazy"/>
            <div className='content'>
                <p>{meal.strMeal}</p>
                <p>#{meal.idMeal}</p>
            </div>
        </section>
    );
}