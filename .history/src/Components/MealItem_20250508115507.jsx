export function MealItem({meal}) {
return(
    <li className="meal-item">
        <article>
            <img src={meal.img} alt={meal.name} />
        </article>
    </li>
)
}