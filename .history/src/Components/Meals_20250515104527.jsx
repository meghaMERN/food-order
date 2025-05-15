import usehttp from "../Hooks/usehttp.js";
import { MealItem } from "./MealItem.jsx";

export function Meals() {
    const { data: loadedMeals,
        loading,
        error } = usehttp('http://localhost:3000/meals', { method: 'GET' },[]);
        if(loading){
            return <p>Fetching Meals......</p>
        }

        if(!data){
            return <p></p>
        }
    return <ul id="meals">
        {loadedMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
}

