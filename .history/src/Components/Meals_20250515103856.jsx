import usehttp from "../Hooks/usehttp.js";
import { MealItem } from "./MealItem.jsx";

export function Meals() {
   const {data,loading,error}= usehttp('http://localhost:3000/meals', { method: 'GET' });
    return <ul id="meals">
        {loadedMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
}

