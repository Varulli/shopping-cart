import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/components/App";
import routes from "../src/routes";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

beforeEach(() => {
  const router = createMemoryRouter(routes, { initialEntries: ["/"] });
  render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
});

describe("App", () => {
  it("renders the nav", () => {
    const nav = screen.getByRole("navigation");

    expect(nav).toBeInTheDocument();
  });

  it("renders the links", () => {
    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(3);
  });

  it("renders the homepage by default", () => {
    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(/home/i);
  });

  it("renders the store page after clicking the store link", async () => {
    const user = userEvent.setup();
    const link = screen.getByRole("link", { name: /store/i });

    await user.click(link);

    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(/store/i);
  });

  it("renders the cart page after clicking the cart link", async () => {
    const user = userEvent.setup();
    const link = screen.getByRole("link", { name: /cart/i });

    await user.click(link);

    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(/cart/i);
  });

  it("renders the homepage after clicking the home link from a different page", async () => {
    const user = userEvent.setup();
    const storeLink = screen.getByRole("link", { name: /store/i });
    const homeLink = screen.getByRole("link", { name: /home/i });

    await user.click(storeLink);
    await user.click(homeLink);

    const heading = screen.getByRole("heading");

    expect(heading.textContent).toMatch(/home/i);
  });
});
