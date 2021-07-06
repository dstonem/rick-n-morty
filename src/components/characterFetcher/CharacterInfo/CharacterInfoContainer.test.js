import React from "react";
import { cleanup, render } from "@testing-library/react";
import CharacterInfoContainer from "./CharacterInfoContainer";

afterEach(cleanup);

const props = {
  name: "rick",
  source: "src",
  status: "alive",
};

describe("CharacterInfoContainer", () => {
  it("renders correctly", () => {
    const { asFragment, getByText, getByTestId } = render(
      <CharacterInfoContainer {...props} />
    );
    expect(getByText("rick")).toBeTruthy();
    expect(getByTestId("img")).toHaveAttribute("src", "src");
    expect(getByText("Status: alive")).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
