import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import StorePage from "../src/components/StorePage";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(<StorePage />);
});

describe("StorePage", () => {
  it("renders the store heading", () => {
    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(/store/i);
  });

  it("renders a list of 10 products by default", () => {
    const products = screen.getAllByRole("listitem");

    expect(products).toHaveLength(10);
  });

  it("renders the button to load more products", () => {
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("renders more products after clicking the load more button", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button");

    await user.click(button);

    const products = screen.getAllByRole("listitem");

    expect(products).toHaveLength(20);
  });
});
