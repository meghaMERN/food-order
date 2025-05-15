export function MealItem({meal}) {
return(
    <li className="meal-item">
        <article>
            <img src={meal} alt="" />
        </article>
    </li>
)
}