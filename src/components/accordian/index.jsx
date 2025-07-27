import { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setselected] = useState(null);
  const [multiple, setmultiple] = useState(false);
  const [array, setarray] = useState([]);
  function enablemultiple() {
    setmultiple(!multiple);
  }
  function handlemultipleselection(id) {
    setarray((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }
  function handlesingleselection(id) {
    if (selected === id) {
      setselected(null);
    } else {
      setselected(id);
    }
  }
  return (
    <div className="wrapper">
      <button onClick={enablemultiple}>Enable Multiple Selection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  multiple
                    ? () => handlemultipleselection(item.id)
                    : () => handlesingleselection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {multiple ? (
                array.includes(item.id) ? (
                  <div>{item.answer}</div>
                ) : null
              ) : selected === item.id ? (
                <div>{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Accordian;
