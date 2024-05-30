import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import CartItem from "../src/components/CartItem";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import ProductPage from "../src/components/ProductPage";
import userEvent from "@testing-library/user-event";

const productSynopsis = {
  id: 1,
  title: "Test Product",
  price: 9.99,
  image: "test_image.jpg",
  quantity: 1,
};

beforeEach(() => {
  render(<CartItem productSynopsis={productSynopsis} />);
});

describe("CartItem", () => {
  it("renders the product title", () => {
    const title = screen.getByText(productSynopsis.title);

    expect(title).toBeInTheDocument();
  });

  it("renders the product price", () => {
    const price = screen.getByText(productSynopsis.price, { exact: false });

    expect(price).toBeInTheDocument();
  });

  it("renders the productSynopsis image", () => {
    const image = screen.getByAltText(productSynopsis.title, { exact: false });

    expect(image).toBeInTheDocument();
  });

  it("renders the product quantity", () => {
    const quantity = screen.getByText(productSynopsis.quantity, {
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
          element: <CartItem productSynopsis={productSynopsis} />,
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

    expect(heading.textContent).toMatch(productSynopsis.title, {
      exact: false,
    });
  });
});
