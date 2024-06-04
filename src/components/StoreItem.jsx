import { Link } from "react-router-dom";
import styles from "../styles/StoreItem.module.css";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function StoreItem({ product }) {
  return (
    <li className={styles["store-item"]}>
      <img src={product.image} alt={product.title} />

      <div className={styles["info"]}>
        <Link to={`/product/${product.id}`} state={{ product }}>
          {product.title}
        </Link>
        <p>{product.category}</p>
        <p>{priceFormatter.format(product.price)}</p>
        <p>
          <span className={styles["star"]}>★</span> {product.rating.rate} (
          {product.rating.count})
        </p>
      </div>
    </li>
  );
}

export default StoreItem;
