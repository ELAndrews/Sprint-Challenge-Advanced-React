import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  const wrapper = rtl.render(<App />);
  wrapper.debug();
});

it("renders the header correctly", () => {
  const wrapper = rtl.render(<App />);
  const button = wrapper.queryByText(/off/i);
  expect(button).toBeInTheDocument();
});

it("renders players data", () => {
  const wrapper = rtl.render(<App />);
  const info = wrapper.queryByText(/players/i);
  expect(info).toBeVisible();
});
