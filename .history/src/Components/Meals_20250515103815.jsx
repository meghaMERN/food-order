import usehttp from "../Hooks/usehttp.js";
import { MealItem } from "./MealItem.jsx";

export function Meals() {
    usehttp('http://localhost:3000/meals',{});
    return <ul id="meals">
        {loadedMeals.map((meal) => <MealItem key={meal.id} meal={meal}/>)}
    </ul>
}

