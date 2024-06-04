import { Link } from "react-router-dom";
import { priceFormatter } from "../utils";
import styles from "../styles/CartItem.module.css";

function CartItem({ product, handleRemove }) {
  return (
    <tr className={styles["cart-item"]}>
      <td>
        <img src={product.image} alt={product.title} />
      </td>
      <td>
        <Link to={`/product/${product.id}`} state={{ product }}>
          {product.title}
        </Link>
      </td>
      <td>{priceFormatter.format(product.price)}</td>
      <td>{product.quantity}</td>
      <td>
        <button className={styles["remove"]} onClick={handleRemove}>
          Remove
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
