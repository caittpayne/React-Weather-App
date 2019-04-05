import React from "react";
import ZipCode from "../ZipCode";
import { shallow, mount } from "enzyme";

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
});
