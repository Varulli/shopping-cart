import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import CartItem from "../src/components/CartItem";
import userEvent from "@testing-library/user-event";

const productInfo = {
  id: 1,
  title: "Test Product",
  price: 9.99,
  image: "test_image.jpg",
  quantity: 1,
};

beforeEach(() => {
  render(<CartItem productInfo={productInfo} />);
});

describe("CartItem", () => {
  it("renders the product title", () => {
    const title = screen.getByText(productInfo.title);

    expect(title).toBeInTheDocument();
  });

  it("renders the product price", () => {
    const price = screen.getByText(productInfo.price, { exact: false });

    expect(price).toBeInTheDocument();
  });

  it("renders the productInfo image", () => {
    const image = screen.getByAltText(productInfo.title, { exact: false });

    expect(image).toBeInTheDocument();
  });

  it("renders the product quantity", () => {
    const quantity = screen.getByText(productInfo.quantity, { exact: false });

    expect(quantity).toBeInTheDocument();
  });

  it("calls the click handler after clicking the product link", async () => {
    cleanup();
    const handleClick = vi.fn();
    render(<CartItem productInfo={productInfo} handleClick={handleClick} />);

    const user = userEvent.setup();
    const link = screen.getByRole("link");

    await user.click(link);

    expect(handleClick).toHaveBeenCalled();
  });
});
