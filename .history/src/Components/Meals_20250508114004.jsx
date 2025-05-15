import { useState } from "react";

export function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);

    async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals')

        if(!response.ok){
            res
        }

        const meals = await response.json();
        setLoadedMeals(meals)

    }
    fetchMeals();
}