import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import * as auth0 from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import App from "./App";

vi.mock("@auth0/auth0-react");

// First Test - Fix it to Pass
describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
});

test("Navbar", () => {
  auth0.useAuth0 = vi.fn().mockReturnValue({
    isAuthenticated: true,
    user: { nickname: "JohnDoe", given_name: "John" },
  });
  render(<Navbar />);
  const projectName = screen.getByText("ForgetMeNot");
  expect(projectName).toBeDefined();
});

test("Check to see if Dashboard link rendering", () => {
  auth0.useAuth0 = vi.fn().mockReturnValue({
    isAuthenticated: true,
    user: { nickname: "JohnDoe", given_name: "John" },
  });
  render(<Navbar />);
  const dashboard = screen.getByText("Dashboard");
  expect(dashboard).toBeDefined();
});
