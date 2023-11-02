import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [couter, setcouter] = useState(0);

  const increment = () => setcouter(couter + 1);
  const decrement = () => couter > 0 && setcouter(couter - 1);
  const reset = () => setcouter(0);

  return (
    <div className="app-container">
      <h1>Couter App</h1>
      <p className="counter">{couter}</p>
      <div className="btns">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" />
    </div>
  );
}
