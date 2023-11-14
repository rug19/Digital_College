import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function Incrementar(){
    setCount((count) => count + 1)

  }

  function decrementar(){
    if(count > 0){
      setCount((count) => count - 1)
    }
  }
  
  return (
    <>
      <div className="card">
        <button className="btn" onClick={Incrementar}>
          Incrementar
        </button>
        <p className="number">{count}</p>
        <button onClick={decrementar}>
          Decrementar
        </button>
      </div>
    </>
  );
}

export default App;
