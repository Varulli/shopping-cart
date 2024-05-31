import { Link, Outlet } from "react-router-dom";
import "../styles/App.css";

function App() {
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
      <Outlet />
    </>
  );
}

export default App;
