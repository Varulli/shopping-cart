import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "../src/components/HomePage";

describe("Homepage", () => {
  it("renders the heading", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(/home/i);
  });
});
