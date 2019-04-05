import React from "react";
import App from "../App";
import ZipCode from "../ZipCode";
import Weather from "../Weather";
import { shallow } from "enzyme";

describe("<App />", () => {
  it("should render without error", () => {
    shallow(<App />);
  });
  it("should render ZipCode and Weather components", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.containsAllMatchingElements([<ZipCode />, <Weather />])
    ).toBe(true);
  });
  it("should start by displaying <ZipCode />", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("showZip")).toEqual("show");
    expect(wrapper.state("showWeather")).toEqual("hide");
  });
  it("should start by having an empty field for the location", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("location")).toEqual("");
  });
  it("should start by having an empty field for the forecast", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("forecast")).toEqual("");
  });
});
