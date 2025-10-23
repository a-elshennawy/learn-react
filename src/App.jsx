import "./App.css";
import UseCallback from "./Hooks/UseCallback";
import ContextComp from "./Hooks/UseContext/ContextComp";
import UseContext from "./Hooks/UseContext/UseContext";
import UseDebugValue from "./Hooks/UseDebugValue";
import UseDeferredValue from "./Hooks/UseDeferredValue";
import UseEffect from "./Hooks/UseEffect";
import UseFormStatus from "./Hooks/UseFormStatus";
import UseId from "./Hooks/UseId";
import UseInsertionEffect from "./Hooks/UseInsertionEffect";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
import UseMemo from "./Hooks/UseMemo";
import UseReducer from "./Hooks/UseReducer";
import UseRef from "./Hooks/UseRef";
import UseState from "./Hooks/UseState";
import UseTransition from "./Hooks/UseTransition";
import UseFormState from "./Hooks/UseFormState";
import UseActionState from "./Hooks/UseActionState";
import UseOptimistic from "./Hooks/UseOptimistic";
import Use from "./Hooks/Use";
import DisplayProducts from "../src/CompoundComponets/DisplayProducts";
import Tracker from "./RenderProps/Tracker";
import DataDisplay from "./HOCs/DataDisplay";
import ParentComponent from "./ReactMemo/ParentComponent";
import MainComp from "./ZustandStores/Components/MainComp";
import CypressCounter from "./CypressTesting/CypressCounter";
import PlayWrigthCounter from "./PlayWrightTesting/PlayWrigthCounter";
import GraphQl from "./GraphQl/GraphQl";
import Counter from "./JestTesting/Counter";

function App() {
  return (
    <>
      {/* we wrapped the app in the UseContext compoenet jut in case you will try to import the ContextComp */}
      <UseContext>
        <div className="mainContainer">
          {/* import your comp. right here */}
          <PlayWrigthCounter />
        </div>
      </UseContext>
    </>
  );
}

export default App;
// make sur eto import PlaywrightCounter.jsx component to avoid X in GitHub as PlayWright does CI/CD testing
// so the compoenet pushed should be the one used in the testing
