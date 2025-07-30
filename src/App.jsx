import "./App.css";
import UseCallback from "./Hooks/UseCallback";
import ContextComp from "./Hooks/UseContext/ContextComp";
import UseContext from "./Hooks/UseContext/UseContext";
import UseDeferredValue from "./Hooks/UseDeferredValue";
import UseEffect from "./Hooks/UseEffect";
import UseId from "./Hooks/UseId";
import UseImperativeHandle from "./Hooks/UseImperativeHandle";
import UseInsertionEffect from "./Hooks/UseInsertionEffect";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
import UseMemo from "./Hooks/UseMemo";
import UseReducer from "./Hooks/UseReducer";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState";
import UseSyncExternalStore from "./Hooks/UseSyncExternalStore/UseSyncExternalStore";
import UseTransition from "./Hooks/UseTransition";

function App() {
  return (
    <>
      <div className="mainContainer">
        {/* import your comp. right here */}
        <UseCallback />
      </div>
    </>
  );
}

export default App;
