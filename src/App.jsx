import "./App.css";
import ContextComp from "./Hooks/ContextComp";
import UseContext from "./Hooks/UseContext";
import UseDeferredValue from "./Hooks/UseDeferredValue";
import UseEffect from "./Hooks/UseEffect";
import UseId from "./Hooks/UseId";
import UseImperativeHandle from "./Hooks/UseImperativeHandle";
import UseInsertionEffect from "./Hooks/UseInsertionEffect";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
import UseReducer from "./Hooks/UseReducer";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState";
import UseTransition from "./Hooks/UseTransition";

function App() {
  return (
    <>
      <div className="mainContainer">
        {/* import your comp. right here */}
        <UseDeferredValue />
      </div>
    </>
  );
}

export default App;
