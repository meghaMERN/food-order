export function MealItem({meal}) {
return(
    <li className="meal-item">
        <article>
            <img src={meal.img} alt="" />
        </article>
    </li>
)
}