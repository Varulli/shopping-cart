import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
// import ProductPage from "../src/components/ProductPage";
import { Link, RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../src/routes";
import ProductPage from "../src/components/ProductPage";
import userEvent from "@testing-library/user-event";

const product = {
  id: 1,
  title: "Test Product",
  price: 9.99,
  rating: { rate: 4, count: 10 },
  category: "Test Category",
  description: "Test Description",
  image: "test_image.jpg",
};

beforeEach(() => {
  const router = createMemoryRouter(routes, {
    initialEntries: [`/product/${product.id}`],
  });
  render(<RouterProvider router={router} />);
});

describe("ProductPage", () => {
  it("renders the product title", () => {
    waitFor(() => {
      const title = screen.getByText(product.title, { exact: false });

      expect(title).toBeInTheDocument();
    });
  });

  it("renders the product price", () => {
    waitFor(() => {
      const price = screen.getByText(product.price, { exact: false });

      expect(price).toBeInTheDocument();
    });
  });

  it("renders the product category", () => {
    waitFor(() => {
      const category = screen.getByText(product.category, { exact: false });

      expect(category).toBeInTheDocument();
    });
  });

  it("renders the product description", () => {
    waitFor(() => {
      const description = screen.getByText(product.description, {
        exact: false,
      });

      expect(description).toBeInTheDocument();
    });
  });

  it("renders the product image", () => {
    waitFor(() => {
      const image = screen.getByAltText(product.title, { exact: false });

      expect(image).toBeInTheDocument();
    });
  });

  it("renders the product rating", () => {
    waitFor(() => {
      const rating = screen.getByText(product.rating.rate, { exact: false });

      expect(rating).toBeInTheDocument();
    });
  });

  it("renders the product rating count", () => {
    waitFor(() => {
      const ratingCount = screen.getByText(product.rating.count, {
        exact: false,
      });

      expect(ratingCount).toBeInTheDocument();
    });
  });

  it("renders the add to cart button", () => {
    waitFor(() => {
      const addToCartButton = screen.getByText("Add to Cart", { exact: false });

      expect(addToCartButton).toBeInTheDocument();
    });
  });

  it("renders the quantity input", () => {
    waitFor(() => {
      const quantityInput = screen.getByRole("spinbutton");

      expect(quantityInput).toBeInTheDocument();
    });
  });

  it("renders the quantity label", () => {
    waitFor(() => {
      const quantityLabel = screen.getByText("Quantity", { exact: false });

      expect(quantityLabel).toBeInTheDocument();
    });
  });

  it("renders using a product passed through a Link", async () => {
    cleanup();
    const router = createMemoryRouter(
      [
        {
          path: "/product/:id",
          element: <ProductPage />,
        },
        {
          path: "/other",
          element: <Link to={`/product/${product.id}`} state={{ product }} />,
        },
      ],
      { initialEntries: ["/other"] }
    );
    render(<RouterProvider router={router} />);

    const user = userEvent.setup();
    const link = screen.getByRole("link");

    await user.click(link);

    waitFor(() => {
      const title = screen.getByText(product.title, { exact: false });

      expect(title).toBeInTheDocument();
    });
  });
});
