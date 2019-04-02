import React from "react";
import ZipCode from "./ZipCode";
import { shallow } from "enzyme";

describe("<ZipCode />", () => {
  it("should render without error", () => {
    shallow(<ZipCode />);
  });
  it("should contain an input field and button", () => {
    const wrapper = shallow(<ZipCode />);
    const Field = wrapper.find("input");
    const button = wrapper.find("button");

    expect(Field).not.toBeNull();
    expect(button).not.toBeNull();
  });
  it("should capture the value of the form input", () => {
  
  });
  it("should display a 'required' validation error if touched and not updated", () => {});
  it("should display a validation error if input is not 5 digits", () => {});
  it("should display a validation error if input is not all numbers", () => {});
  it("should call onSubmit() when button is clicked", () => {});
});
