import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "../src/components/HomePage";

describe("Homepage", () => {
  it("renders the homepage heading", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(/home/i);
  });

  it("renders a homepage image", () => {
    render(<HomePage />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });
});
