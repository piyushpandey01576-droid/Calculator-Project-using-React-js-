import React from "react";

const Calci = () => {
  return (
    <>
      <div className="container">
        <div className="containerinput">
          <input className="input" type="text" readOnly placeholder="0" />
        </div>
        <div className="buttonsbox">
          <button className="seven">7</button>
          <button className="eight">8</button>
          <button className="nine">9</button>
          <button className="plus">+</button>

          <button className="four">4</button>
          <button className="five">5</button>
          <button className="six">6</button>
          <button className="minus">-</button>

          <button className="one">1</button>
          <button className="two">2</button>
          <button className="three">3</button>
          <button className="multiply">X</button>

          <button className="allClear">AC</button>
          <button className="zero">0</button>
          <button className="equal">=</button>
          <button className="division">%</button>
        </div>
      </div>
    </>
  );
};

export default Calci;
