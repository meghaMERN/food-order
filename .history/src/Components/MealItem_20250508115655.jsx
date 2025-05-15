export function MealItem({meal}) {
return(
    <li className="meal-item">
        <article>
            <img src={meal.img} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{meal.price}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
        </article>
    </li>
)
}