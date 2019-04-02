import React from "react";
import ZipCode from "./ZipCode";
import Form from "./Form";
import { shallow } from "enzyme";

describe("<ZipCode />", () => {
  it("should render without error", () => {
    shallow(<ZipCode />);
  });
  it("should render the Form component", () => {
    const wrapper = shallow(<ZipCode />);
    expect(wrapper.containsAllMatchingElements([<Form />])).toBe(true);
  });

  // Add integration tests
});
