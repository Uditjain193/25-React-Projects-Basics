import React, { useState } from "react";
import "./modal.css";
import PopUp from "./modal";

const Modal = () => {
  const [show, setshow] = useState(false);
  function handletoggle() {
    setshow(true);
  }
  function onclose() {
    setshow(false);
  }
  return (
    <div>
      <button onClick={handletoggle}>Open Modal Popup</button>
      {show && (
        <PopUp
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onclose={onclose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
};

export default Modal;
