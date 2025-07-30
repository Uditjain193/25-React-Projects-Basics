import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length > 0 && list.map((item) => <MenuItem item={item} />)}
    </ul>
  );
};

export default MenuList;
