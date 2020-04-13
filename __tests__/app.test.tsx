import React from "react";
import App from "../App";
import renderer from "react-test-renderer";
//In progress
describe("App", () => {
  it("should render correctly", () => {
    const app = renderer.create(<App />).toJSON;
    expect(app).toMatchSnapshot();
  });
});
