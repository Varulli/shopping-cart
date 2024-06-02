import { useEffect, useState } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
import ErrorDisplay from "./ErrorDisplay";
import Loading from "./Loading";

function ProductPage() {
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const [cart, setCart] = useOutletContext();

  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    if (location.state) {
      setProduct(location.state.product);
      setLoading(false);
      setError(null);
    } else {
      (async () => {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`,
            { mode: "cors" }
          );
          if (!response.ok) throw new Error("Failed to fetch product");

          const product = await response.json();
          setProduct(product);
          setLoading(false);
          setError(null);
        } catch (error) {
          setError(error);
        }
      })();
    }
  }, [id, location.state]);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) || value < 0 ? 0 : value > 20 ? 20 : value);
  };

  const handleClick = () => {
    setCart(new Map([...cart, [product.id, { ...product, quantity }]]));
  };

  return (
    <main>
      <h2>Product Page</h2>

      {error ? (
        <ErrorDisplay error={error} />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="product">
          <img src={product.image} alt={product.title} />

          <div className="info">
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>

            <div className="rating">
              <p>{product.rating.rate}</p>
              <p>{product.rating.count}</p>
            </div>

            <label>
              Quantity:
              <input
                type="number"
                value={quantity}
                min={0}
                max={20}
                step={1}
                onChange={handleInputChange}
                onKeyDown={(e) =>
                  ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                }
              />
            </label>

            <button
              type="button"
              disabled={quantity === 0}
              onClick={handleClick}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProductPage;
