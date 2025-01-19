import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const custom = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "green",
    color: "yellow",
  }),
  option: (styles) => ({
    ...styles,
    color: "black",
    backgroundColor: "pink",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "white",
    fontStyle: "italic",
  }),
};

const MyComponent = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-300">
    <Select
      options={options}
      isMulti
      components={animatedComponents}
      styles={custom}
      placeholder="Select your favorite flavor"
    />
  </div>
);

export default MyComponent;
