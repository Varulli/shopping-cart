import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loading from "../src/components/Loading";

describe("Loading component", () => {
  it("renders a loading spinner", () => {
    render(<Loading />);

    const spinner = screen.getByText(/[|/-\\]/);
    const seenFrames = new Set();

    waitFor(() => {
      seenFrames.add(spinner.textContent);

      expect(seenFrames.size).toBe(4);
    });
  });
});
