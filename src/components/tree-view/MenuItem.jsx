import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";
const MenuItem = ({ item }) => {
  const [displaycurrentchildren, setdisplaycurrentchildren] = useState({});
  function handletoggle(getcurrentabel) {
    setdisplaycurrentchildren({
      ...displaycurrentchildren,
      [getcurrentabel]: !displaycurrentchildren[getcurrentabel],
    });
  }
  console.log(displaycurrentchildren);
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handletoggle(item.label)}>
            {displaycurrentchildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displaycurrentchildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
