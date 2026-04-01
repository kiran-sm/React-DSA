import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App"; // ← updated path

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  it("displays the correct text", () => {
    render(<App />);
    expect(screen.getByText("Tailwind is working!")).toBeInTheDocument();
  });

  it("has correct CSS classes", () => {
    render(<App />);
    const div = screen.getByText("Tailwind is working!");
    expect(div).toHaveClass("bg-blue-950");
    expect(div).toHaveClass("text-red-400");
    expect(div).toHaveClass("p-4");
    expect(div).toHaveClass("text-xl");
  });

  it("renders a div element", () => {
    render(<App />);
    const element = screen.getByText("Tailwind is working!");
    expect(element.tagName).toBe("DIV");
  });
});
