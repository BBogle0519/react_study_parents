import Child from "./Child";
import { ClassCmp, FunctionCmp, ArrowFunctionCmp } from "./Components";

function Hello() {
  return <h1>hello</h1>;
}

function App() {
  return (
    <>
      <Hello />
      <h2>hello</h2>
      <Child />
      <ClassCmp />
      <FunctionCmp />
      <ArrowFunctionCmp />
    </>
  );
}

export default App;
