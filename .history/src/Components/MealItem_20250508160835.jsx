import { CurrencyFormatter } from "../Util/formatting.js";
import Button from "./UI/Button.jsx";
import CartContext from "../Store/CartContext.jsx";
import { useContext } from "react";

export function MealItem({meal}) {
    const CartCtx = useContext(CartContext);

    function handleaddMeal(){
        CartCtx
    }

return(
    <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{CurrencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button >Add to Cart</Button>
            </p>
        </article>
    </li>
)
}