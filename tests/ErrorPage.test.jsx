import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorPage from "../src/components/ErrorPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("Error page", () => {
  it("renders the error message", () => {
    const router = createMemoryRouter(
      [{ path: "/error", element: <ErrorPage /> }],
      { initialEntries: ["/error"] }
    );
    render(<RouterProvider router={router} />);

    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(/404/i);
  });
});
