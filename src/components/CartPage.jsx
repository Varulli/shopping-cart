import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import styles from "../styles/CartPage.module.css";
import { priceFormatter } from "../utils";

function CartPage() {
  const [cart, setCart] = useOutletContext();

  return (
    <main>
      <h2>Cart</h2>

      <table className={styles["cart-items"]}>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from(cart.values()).map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleRemove={() =>
                setCart(new Map([...cart].filter(([id]) => id !== product.id)))
              }
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan="2">
              Total
            </th>
            <td colSpan="3">
              {priceFormatter.format(
                Array.from(cart.values()).reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )
              )}
            </td>
          </tr>
        </tfoot>
      </table>

      <button type="button" disabled={cart.size === 0}>
        Checkout
      </button>
    </main>
  );
}

export default CartPage;
