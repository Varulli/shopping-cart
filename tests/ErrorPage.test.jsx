import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorPage from "../src/components/ErrorPage";

describe("Error page", () => {
  it("renders the error message", () => {
    render(<ErrorPage />);

    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(/404/i);
  });
});
