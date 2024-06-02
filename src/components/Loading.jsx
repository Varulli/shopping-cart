import { useEffect, useState } from "react";

const frames = ["|", "/", "-", "\\"];

function Loading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % frames.length);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <p>{frames[index]}</p>;
}

export default Loading;
