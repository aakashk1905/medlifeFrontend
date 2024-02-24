import React, { useState } from "react";
import "./styles/DropdownMenu.css";
import { Link } from "react-router-dom";

const DropdownMenu = ({ name, list, st, link }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = () => {
    setIsDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="dropdown z-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/${link}`}>
        <button className={`ddm-btn ${st ? "btm" : ""}`}>
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
      </Link>
      {isDropdownOpen && (
        <ul className="dropdown-menu z-30">
          {list && list.length > 0 ? (
            list.map((listItem, index) => (
              <Link
                onClick={() => handleItemClick()}
                to={`/treatment/${listItem.split(" ")[0].toLowerCase()}`}
                key={index}
              >
                <li>{listItem}</li>
              </Link>
            ))
          ) : (
            <li>No items in the list</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
