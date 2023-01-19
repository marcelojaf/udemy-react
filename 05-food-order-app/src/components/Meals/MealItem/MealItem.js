import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  function addToCartHandler(_amount) {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: _amount,
      price: props.price,
    });
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
