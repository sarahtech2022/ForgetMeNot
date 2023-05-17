import { render, screen } from "@testing-library/react";
import App from "./App";

// First Test - Fix it to Pass
describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
});
