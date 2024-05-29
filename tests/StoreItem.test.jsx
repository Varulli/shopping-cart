import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import StoreItem from "../src/components/StoreItem";
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
  render(<StoreItem product={product} />);
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

  it("renders the product description", () => {
    const description = screen.getByText(product.description);

    expect(description).toBeInTheDocument();
  });

  it("renders the product image", () => {
    const image = screen.getByAltText(product.title, { exact: false });

    expect(image).toBeInTheDocument();
  });

  it("calls the click handler after clicking the product link", async () => {
    cleanup();
    const handleClick = vi.fn();
    render(<StoreItem product={product} handleClick={handleClick} />);

    const user = userEvent.setup();
    const link = screen.getByRole("link");

    await user.click(link);

    expect(handleClick).toHaveBeenCalled();
  });
});
