import React, {useState} from "react";

function Item({ name, category }) {

  const [addToCart, setAddToCart] = useState(true);

  function handleCart() {
  setAddToCart((addToCart) => !addToCart);
  
}

const liClass = addToCart ? "" : "in-cart"
const btnColor= addToCart ? "add" : "remove"
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnColor} onClick={handleCart}>{addToCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
