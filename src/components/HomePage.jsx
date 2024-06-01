import { useEffect } from "react";
import { useState } from "react";

function HomePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((data) =>
        data.map((item) => {
          return { id: item.id, title: item.title, url: item.image };
        })
      )
      .then((images) => setImages(images));
  }, []);

  return (
    <main>
      <h2>Welcome to the Homepage</h2>
      <p>Come browse our wonderful collection!</p>

      <div className="auto-scroll">
        {images.map((image) => (
          <img key={image.id} src={image.url} alt={image.title}></img>
        ))}
      </div>
    </main>
  );
}

export default HomePage;
