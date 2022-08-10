import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";
import Color from "./components/Color";

function App() {
  return (
    <>
    <div>
      <h2>Sim one</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr></hr>
      <h2>Sim Two</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <BuggyCounter />
      <hr></hr>
      <h2>Sim Three</h2>
      <BuggyCounter />
    </div>

    <div>
      <Color />
    </div>
    </>
  );
}

export default App;