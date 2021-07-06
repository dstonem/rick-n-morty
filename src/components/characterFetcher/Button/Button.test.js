import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

afterEach(cleanup);

const props = {
  handleClick: jest.fn(),
};

describe("Button", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Button {...props} />);
    expect(getByText("Fetch Character")).toBeTruthy();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Button {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("fires the props.handleClick event onClick", () => {
    render(<Button {...props} />);
    const btn = screen.getByTestId("button");
    fireEvent.click(btn);
    expect(props.handleClick).toHaveBeenCalledTimes(1);
  });
});
