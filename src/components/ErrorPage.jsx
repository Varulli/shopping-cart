import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/">Go back to the main page</Link>
    </>
  );
}

export default ErrorPage;
