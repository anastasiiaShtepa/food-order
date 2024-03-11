import React from "react";
import { currenceFormatter } from "../../util/formatting";

const CartItem = ({ name, quantity, price, onIncreas, onDecreas }) => {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currenceFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecreas}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncreas}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
