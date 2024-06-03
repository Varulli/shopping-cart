import { useEffect } from "react";
import { useState } from "react";
import ErrorDisplay from "./ErrorDisplay";
import Loading from "./Loading";
import styles from "../styles/HomePage.module.css";

function HomePage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=10",
          { mode: "cors" }
        );
        if (!response.ok) throw new Error("Failed to fetch images");

        const data = await response.json();
        const images = data.map((item) => {
          return { id: item.id, title: item.title, url: item.image };
        });
        setImages(images);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  return (
    <main>
      <h2>Home</h2>
      <p>Come browse our wonderful collection!</p>

      {error ? (
        <ErrorDisplay error={error} />
      ) : loading ? (
        <Loading />
      ) : (
        <div className={styles["wrapper"]}>
          <div className={styles["auto-scroll"]}>
            {images.map((image) => (
              <img key={image.id} src={image.url} alt={image.title}></img>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default HomePage;
