import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function counting() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="border">
        <div>
          <h1>{count}</h1>
        </div>
        <div>
          <button onClick={counting}>Click Me!</button>
        </div>
      </div>
    </>
  );
}

export default App;
