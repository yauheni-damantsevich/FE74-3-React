import React, { useState } from "react";
import burgerIcon from "./menu.png";
import { Menu } from "../index";

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <img src={burgerIcon} className="max-w-6 max-h-6 m-2" alt="menu" />
      </button>
      {open && (
        <div className="absolute">
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Burger;
