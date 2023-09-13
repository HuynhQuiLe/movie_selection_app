import "./App.css";
import Confirmation from "./components/Confirmation";
import Responsive from "./components/Responsive";
import Selection from "./components/Selection";

function App() {
  return (
    <div>
      <div className="booking">
        <div
          className=" container-fluid row my-3 mx-0"
          style={{ position: "relative", zIndex: 2 }}
        >
          <Selection />
          <Confirmation />
        </div>
      </div>
      <Responsive />
    </div>
  );
}

export default App;
