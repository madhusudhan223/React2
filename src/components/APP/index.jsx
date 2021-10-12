import React from "react";
import "./_.scss";

function App() {
  return (
    <div className="container">
      <div className="display">
        <input type="text" />
      </div>
      <div className="keyboard">
        <table className="table">
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>9</td>
            <td>0</td>
            <td>+</td>
            <td>-</td>
          </tr>
          <tr>
            <td>/</td>
            <td>x</td>
            <td>=</td>
            <td>c</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
