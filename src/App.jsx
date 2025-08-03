import "./App.css";
import UseCallback from "./Hooks/UseCallback";
import ContextComp from "./Hooks/UseContext/ContextComp";
import UseContext from "./Hooks/UseContext/UseContext";
import UseDebugValue from "./Hooks/useDebugValue";
import UseDeferredValue from "./Hooks/UseDeferredValue";
import UseEffect from "./Hooks/UseEffect";
import UseFormStatus from "./Hooks/UseFormStatus";
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
import UseFormState from "./Hooks/UseFormState";
import UseActionState from "./Hooks/UseActionState";
import UseOptimistic from "./Hooks/useOptimistic";
import Use from "./Hooks/Use";

function App() {
  return (
    <>
      <UseContext>
        <div className="mainContainer">
          {/* import your comp. right here */}
          <ContextComp />
        </div>
      </UseContext>
    </>
  );
}

export default App;
