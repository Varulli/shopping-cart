import { useEffect, useState } from "react";
import ErrorDisplay from "./ErrorDisplay";
import Loading from "./Loading";
import StoreItem from "./StoreItem";
import styles from "../styles/StorePage.module.css";

function StorePage() {
  const [numProducts, setNumProducts] = useState(10);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=${numProducts}`,
          { mode: "cors" }
        );
        if (!response.ok) throw new Error("Failed to fetch products");

        const products = await response.json();
        setProducts(products);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
      }
    })();
  }, [numProducts]);

  return (
    <main>
      <h2>Store</h2>

      {error ? (
        <ErrorDisplay error={error} />
      ) : loading ? (
        <Loading />
      ) : (
        <div className={styles["wrapper"]}>
          <ul className={styles["store-items"]}>
            {products.map((product) => (
              <StoreItem key={product.id} product={product} />
            ))}
          </ul>

          <button
            className={styles["load-more"]}
            type="button"
            onClick={() => setNumProducts(Math.min(numProducts + 5, 20))}
            disabled={numProducts === 20}
          >
            Load More
          </button>
        </div>
      )}
    </main>
  );
}

export default StorePage;
