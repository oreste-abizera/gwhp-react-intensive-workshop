import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../store/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-info">
              <h4>{item.name}</h4>
              <span>
                ${item.price.toFixed(2)} × {item.quantity}
              </span>
            </div>
            <div className="item-actions">
              <button onClick={() => dispatch(removeItem(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(addItem(item))}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <div className="cart-total">
          <strong>Total:</strong> ${total.toFixed(2)}
        </div>
        <div className="cart-actions">
          <button
            onClick={() => dispatch(clearCart())}
            className="clear-cart-btn"
          >
            Clear Cart
          </button>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}
