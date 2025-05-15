import { useEffect } from "react";
import { useState } from "react";

export function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
    
    }, [])
    
   

    return <ul id="meals">
        {loadedMeals.map((meal) => <li key={meal.id}>{meal.name}</li>)}
    </ul>
}

