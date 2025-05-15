
import { MealItem } from "./MealItem.jsx";

export function Meals() {
    



    return <ul id="meals">
        {loadedMeals.map((meal) => <MealItem key={meal.id} meal={meal}/>)}
    </ul>
}

