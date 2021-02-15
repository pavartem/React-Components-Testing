import React from "react";
import App from "./app";

const setUp = () => shallow(<App />);

describe("Info component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Info component", () => {
    expect(component).toMatchSnapshot();
  });
});
