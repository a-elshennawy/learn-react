import "./App.css";
import ContextComp from "./Hooks/ContextComp";
import UseContext from "./Hooks/UseContext";
import UseEffect from "./Hooks/UseEffect";
import UseImperativeHandle from "./Hooks/UseImperativeHandle";
import UseInsertionEffect from "./Hooks/UseInsertionEffect";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
import UseReducer from "./Hooks/UseReducer";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState";

function App() {
  return (
    <>
      <div className="mainContainer">
        <UseInsertionEffect />
      </div>
    </>
  );
}

export default App;
