import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import CartItem from "../src/components/CartItem";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
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

const removeItem = vi.fn();

beforeEach(() => {
  render(<CartItem product={product} handleClick={removeItem} />);
});

describe("CartItem", () => {
  it("renders the product title", () => {
    const title = screen.getByText(product.title);

    expect(title).toBeInTheDocument();
  });

  it("renders the product price", () => {
    const price = screen.getByText(product.price, { exact: false });

    expect(price).toBeInTheDocument();
  });

  it("renders the product image", () => {
    const image = screen.getByAltText(product.title, { exact: false });

    expect(image).toBeInTheDocument();
  });

  it("renders the product quantity", () => {
    const quantity = screen.getByText(product.quantity, {
      exact: false,
    });

    expect(quantity).toBeInTheDocument();
  });

  it("renders the relevant product page after clicking the product link", async () => {
    cleanup();
    const router = createMemoryRouter(
      [
        {
          path: "/cart",
          element: <CartItem product={product} />,
        },
        { path: "/product/:id", element: <ProductPage /> },
      ],
      { initialEntries: ["/cart"] }
    );
    render(<RouterProvider router={router} />);

    const user = userEvent.setup();
    const link = screen.getByRole("link");

    await user.click(link);

    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(product.title, {
      exact: false,
    });
  });

  it("removes the product after clicking the remove button", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button");

    await user.click(button);

    expect(removeItem).toHaveBeenCalledWith(product.id);
  });
});
