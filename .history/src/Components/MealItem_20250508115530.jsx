export function MealItem({meal}) {
return(
    <li className="meal-item">
        <article>
            <img src={meal.img} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
            </div>
        </article>
    </li>
)
}