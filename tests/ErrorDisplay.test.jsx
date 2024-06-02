import { describe, expect, it } from "vitest";
import ErrorDisplay from "../src/components/ErrorDisplay";
import { render, screen } from "@testing-library/react";

const testError = new Error("Test error");

describe("ErrorDisplay", () => {
  it("renders the error message", () => {
    render(<ErrorDisplay error={testError} />);

    const message = screen.getByText(testError.message);

    expect(message).toBeInTheDocument();
  });
});
