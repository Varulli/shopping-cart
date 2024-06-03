import { Link, Outlet } from "react-router-dom";
import styles from "../styles/App.module.css";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(new Map());

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "store", label: "Store" },
    { to: "cart", label: `Cart (${cart.size})` },
  ];

  return (
    <>
      <nav>
        <menu>
          {menuItems.map((item) => (
            <li key={item.to} className={styles["menu-item"]}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </menu>
      </nav>
      <Outlet context={[cart, setCart]} />
    </>
  );
}

export default App;
