import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a page title", () => {
  render(<App />);
  const title = screen.getByText(/Lycanthrope/i);
  expect(title).toBeInTheDocument();
});
