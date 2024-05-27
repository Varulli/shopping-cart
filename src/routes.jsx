import App from "./components/App";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import StorePage from "./components/StorePage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "store", element: <StorePage /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
    ],
  },
];

export default routes;
