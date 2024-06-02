import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";

function CartPage() {
  const [cart, setCart] = useOutletContext();

  return (
    <main>
      <h2>Cart</h2>

      <ul>
        {Array.from(cart.values()).map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleRemove={() =>
              setCart(new Map([...cart].filter(([id]) => id !== product.id)))
            }
          />
        ))}
      </ul>

      <button type="button" disabled={cart.size === 0}>
        Checkout
      </button>
    </main>
  );
}

export default CartPage;
