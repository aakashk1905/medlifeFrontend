import React, { useState } from "react";
import "./styles/DropdownMenu.css";

const DropdownMenu = ({ name, list, st }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Selected item: ${item}`);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className={`ddm-btn ${st ? "btm" : ""}`}>
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4.94 5.72L8 8.78L11.06 5.72L12 6.66667L8 10.6667L4 6.66667L4.94 5.72Z"
            fill="white"
          />
        </svg>
      </button>
      <ul className="dropdown-menu">
        {list.map((listItem, index) => (
          <li key={index} onClick={() => handleItemClick("D1")}>
            {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
