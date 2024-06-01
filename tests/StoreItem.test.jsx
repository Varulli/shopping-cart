import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import StoreItem from "../src/components/StoreItem";
import userEvent from "@testing-library/user-event";
import ProductPage from "../src/components/ProductPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

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
  const router = createMemoryRouter(
    [
      {
        path: "/cart",
        element: <StoreItem product={product} />,
      },
      { path: "/product/:id", element: <ProductPage /> },
    ],
    { initialEntries: ["/cart"] }
  );
  render(<RouterProvider router={router} />);
});

describe("StoreItem", () => {
  it("renders the product title", () => {
    const title = screen.getByText(product.title);

    expect(title).toBeInTheDocument();
  });

  it("renders the product price", () => {
    const price = screen.getByText(product.price, { exact: false });

    expect(price).toBeInTheDocument();
  });

  it("renders the product rating", () => {
    const rating = screen.getByText(product.rating.rate);

    expect(rating).toBeInTheDocument();
  });

  it("renders the product category", () => {
    const category = screen.getByText(product.category);

    expect(category).toBeInTheDocument();
  });

  it("renders the product image", () => {
    const image = screen.getByAltText(product.title, { exact: false });

    expect(image).toBeInTheDocument();
  });

  it("renders the relevant product page after clicking the product link", async () => {
    const user = userEvent.setup();
    const link = screen.getByRole("link");

    await user.click(link);

    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(product.title, {
      exact: false,
    });
  });
});
