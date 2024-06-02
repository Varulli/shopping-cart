import { Link } from "react-router-dom";

function StoreItem({ product }) {
  return (
    <li className="store-item">
      <img src={product.image} alt={product.title} />

      <div className="info">
        <Link to={`/product/${product.id}`} state={{ product }}>
          {product.title}
        </Link>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <div className="rating">
          <p>{product.rating.rate}</p>
          <p>{product.rating.count}</p>
        </div>
      </div>
    </li>
  );
}

export default StoreItem;
