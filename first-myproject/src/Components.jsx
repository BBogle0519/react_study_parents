import React, { Component } from "react";

class ClassCmp extends Component {
  render() {
    return <p>Class Comp</p>;
  }
}

function FunctionCmp() {
  return <p>Funtion Comp</p>;
}

const ArrowFunctionCmp = () => {
  return <p>Arrow Function Comp</p>;
};

export { ClassCmp, FunctionCmp, ArrowFunctionCmp };
