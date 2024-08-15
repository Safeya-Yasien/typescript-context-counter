import "./App.css";
import Counter from "./components/Counter";
import { CounterContextProvider } from "./context/CounterContext";

function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <Counter />
      </div>
    </CounterContextProvider>
  );
}

export default App;
