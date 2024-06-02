import { useEffect, useState } from "react";

const frames = ["|", "/", "-", "\\"];

function Loading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % frames.length);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return <h3>{frames[index]}</h3>;
}

export default Loading;
