import { Link } from "react-router-dom";

function StoreItem({ product }) {
  return (
    <li className="store-item">
      <img src={product.image} alt={product.title} />

      <div className="info">
        <Link to={`/product/${product.id}`}>{product.title}</Link>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <p>{product.rating.rate}</p>
      </div>
    </li>
  );
}

export default StoreItem;
