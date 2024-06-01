import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "../src/components/HomePage";

describe("Homepage", () => {
  it("renders the homepage heading", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(/home/i);
  });

  it("renders homepage images", () => {
    render(<HomePage />);

    waitFor(() => {
      const images = screen.getAllByRole("img");

      expect(images.length).toBeGreaterThan(0);
    });
  });
});
