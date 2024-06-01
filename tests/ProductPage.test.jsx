import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import ProductPage from "../src/components/ProductPage";

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
  render(<ProductPage product={product} />);
});

describe("ProductPage", () => {
  it("renders the product title", () => {
    const title = screen.getByText(product.title, { exact: false });

    expect(title).toBeInTheDocument();
  });

  it("renders the product price", () => {
    const price = screen.getByText(product.price, { exact: false });

    expect(price).toBeInTheDocument();
  });

  it("renders the product category", () => {
    const category = screen.getByText(product.category, { exact: false });

    expect(category).toBeInTheDocument();
  });

  it("renders the product description", () => {
    const description = screen.getByText(product.description, { exact: false });

    expect(description).toBeInTheDocument();
  });

  it("renders the product image", () => {
    const image = screen.getByAltText(product.title, { exact: false });

    expect(image).toBeInTheDocument();
  });

  it("renders the product rating", () => {
    const rating = screen.getByText(product.rating.rate, { exact: false });

    expect(rating).toBeInTheDocument();
  });

  it("renders the product rating count", () => {
    const ratingCount = screen.getByText(product.rating.count, {
      exact: false,
    });

    expect(ratingCount).toBeInTheDocument();
  });

  it("renders the add to cart button", () => {
    const addToCartButton = screen.getByText("Add to Cart", { exact: false });

    expect(addToCartButton).toBeInTheDocument();
  });

  it("renders the quantity input", () => {
    const quantityInput = screen.getByRole("spinbutton");

    expect(quantityInput).toBeInTheDocument();
  });

  it("renders the quantity label", () => {
    const quantityLabel = screen.getByText("Quantity", { exact: false });

    expect(quantityLabel).toBeInTheDocument();
  });
});
