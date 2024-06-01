import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import CartPage from "../src/components/CartPage";
import { Outlet, RouterProvider, createMemoryRouter } from "react-router-dom";

const cart = new Map([
  [
    1,
    {
      id: 1,
      title: "Test Product",
      price: 9.99,
      rating: { rate: 4, count: 10 },
      category: "Test Category",
      description: "Test Description",
      image: "test_image.jpg",
      quantity: 1,
    },
  ],
  [
    2,
    {
      id: 2,
      title: "Test Product 2",
      price: 19.99,
      rating: { rate: 5, count: 20 },
      category: "Test Category 2",
      description: "Test Description 2",
      image: "test_image_2.jpg",
      quantity: 2,
    },
  ],
  [
    3,
    {
      id: 3,
      title: "Test Product 3",
      price: 29.99,
      rating: { rate: 3, count: 30 },
      category: "Test Category 3",
      description: "Test Description 3",
      image: "test_image_3.jpg",
      quantity: 3,
    },
  ],
]);

const setCart = vi.fn();

const routes = [
  {
    path: "/",
    element: <Outlet context={[cart, setCart]} />,
    children: [{ path: "/cart", element: <CartPage /> }],
  },
];

beforeEach(() => {
  const router = createMemoryRouter(routes, { initialEntries: ["/cart"] });
  render(<RouterProvider router={router} />);
});

describe("CartPage", () => {
  it("renders the cart heading", () => {
    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(/cart/i);
  });

  it("renders the cart items", () => {
    const items = screen.getAllByRole("listitem");

    expect(items).toHaveLength(3);
  });
});
