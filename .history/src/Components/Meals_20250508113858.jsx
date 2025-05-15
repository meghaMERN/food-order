import { useState } from "react";

export function Meals() {
    const [first, set] = useState()
    async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals')

        if(!response.ok){

        }


    }
    fetchMeals();
}