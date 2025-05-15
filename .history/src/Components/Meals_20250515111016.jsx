import usehttp from "../Hooks/usehttp.js";
import { MealItem } from "./MealItem.jsx";

const requestConfig = {};

export function Meals() {
    const { data: loadedMeals,
        loading,
        error } = usehttp('http://localhost:3000/meals', requestConfig, []);

    if (loading) {
        return <p className="center">Fetching Meals......</p>
    }
    if (error) {

    }
    // if(!data){
    //     return <p>No meals found</p>
    // }

    return <ul id="meals">
        {loadedMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
}

