import { Link } from "react-router-dom";

function CartItem({ product, handleRemove }) {
  return (
    <li className="cart-item">
      <img src={product.image} alt={product.title} />
      <Link to={`/product/${product.id}`} state={{ product }}>
        {product.title}
      </Link>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
}

export default CartItem;
