import "./App.css";
import ContextComp from "./Hooks/ContextComp";
import UseContext from "./Hooks/UseContext";
import UseEffect from "./Hooks/UseEffect";
import UseReducer from "./Hooks/UseReducer";
import UseState from "./Hooks/UseState";

function App() {
  return (
    <>
      <div className="mainContainer">
        <UseReducer />
      </div>
    </>
  );
}

export default App;
