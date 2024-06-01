import { Link, Outlet } from "react-router-dom";
import "../styles/App.css";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(new Map());

  return (
    <>
      <nav>
        <menu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="store">Store</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </menu>
      </nav>
      <Outlet context={[cart, setCart]} />
    </>
  );
}

export default App;
