import { useState } from "react";

export function Meals() {
    const [first, setfirst] = useState()
    async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals')

        if(!response.ok){

        }


    }
    fetchMeals();
}