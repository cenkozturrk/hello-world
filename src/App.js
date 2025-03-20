import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString()); 
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <div className="display">
        <input type="text" value={input} readOnly />
        <h3>{result}</h3>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {["0", ".", "+", "="].map((btn) =>
          btn === "=" ? (
            <button key={btn} onClick={handleCalculate}>=</button>
          ) : (
            <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
          )
        )}
        <button onClick={handleClear} className="clear">C</button>
      </div>
    </div>
  );
};

export default App;
