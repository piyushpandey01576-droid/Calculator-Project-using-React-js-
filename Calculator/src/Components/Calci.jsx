import React, { useState } from "react";

const Calci = () => {
  const [value, setValue] = useState("");

  const getValue = (valueReceiver) => {
    console.log(valueReceiver.target.value);
    setValue(value.concat(valueReceiver.target.value));
  };

  const calculation = () => {
    setValue(eval(value).toString());
  };

  const allClear = () => {
    setValue("");
  };

  return (
    <>
      <div className="container">
        <div className="containerinput">
          <input
            className="input"
            type="text"
            placeholder="0"
            readOnly
            value={value}
          />
        </div>
        <div className="buttonsbox">
          <button onClick={getValue} value="7" className="seven">
            7
          </button>
          <button onClick={getValue} value="8" className="eight">
            8
          </button>
          <button onClick={getValue} value="9" className="nine">
            9
          </button>
          <button onClick={getValue} value="+" className="plus">
            +
          </button>

          <button onClick={getValue} value="4" className="four">
            4
          </button>
          <button onClick={getValue} value="5" className="five">
            5
          </button>
          <button onClick={getValue} value="6" className="six">
            6
          </button>
          <button onClick={getValue} value="-" className="minus">
            -
          </button>

          <button onClick={getValue} value="1" className="one">
            1
          </button>
          <button onClick={getValue} value="2" className="two">
            2
          </button>
          <button onClick={getValue} value="3" className="three">
            3
          </button>
          <button onClick={getValue} value="*" className="multiply">
            *
          </button>

          <button onClick={allClear} className="allClear">
            AC
          </button>
          <button onClick={getValue} value="0" className="zero">
            0
          </button>
          <button onClick={calculation} className="equal">
            =
          </button>
          <button onClick={getValue} value="/" className="division">
            /
          </button>
        </div>
      </div>
    </>
  );
};

export default Calci;
