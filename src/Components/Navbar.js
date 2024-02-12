import React from "react";
import logo from "../Assests/logo.svg";
import DropdownMenu from "./DropdownMenu";
import "./styles/Navbar.css";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  const btmMenus = [
    {
      name: "Proctology",
      list: ["d1", "d2", "d3", "d4"],
    },
    {
      name: "Proctology",
      list: ["d1", "d2", "d3", "d4"],
    },
    {
      name: "Proctology",
      list: ["d1", "d2", "d3", "d4"],
    },
    {
      name: "Proctology",
      list: ["d1", "d2", "d3", "d4"],
    },
    {
      name: "Proctology",
      list: ["d1", "d2", "d3", "d4"],
    },
    {
      name: "Proctology",
      list: ["d1", "d2", "d3", "d4"],
    },
    {
      name: "Proctology",
      list: ["d1", "d2", "d3", "d4"],
    },
    {
      name: "Proctology",
      list: ["d1", "d2", "d3", "d4"],
    },
    {
      name: "Proctology",
      list: ["d1", "d2", "d3", "d4"],
    },
    {
      name: "Proctology",
      list: ["d1", "d2", "d3", "d4"],
    },
    {
      name: "Proctology",
      list: ["d1", "d2", "d3", "d4"],
    },
    {
      name: "Proctology",
      list: ["d1", "d2", "d3", "d4"],
    },
  ];
  return (
    <div className="hero-nav-cont">
      <div className="hero-nav">
        <img src={logo} alt="logo" />
        <div className="hero-search-cont">
          <div className="nav-search-bar">
            <input
              type="text"
              className="nav-search"
              placeholder="Search disease, doctors, treatment"
            ></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <g clip-path="url(#clip0_221_526)">
                <path
                  d="M19.3114 10.1492C19.3114 11.9607 18.7743 13.7316 17.7679 15.2378C16.7615 16.7441 15.3311 17.9181 13.6575 18.6114C11.9839 19.3047 10.1423 19.4863 8.36559 19.133C6.58885 18.7797 4.95676 17.9075 3.67568 16.6268C2.39461 15.346 1.52208 13.714 1.16843 11.9374C0.814783 10.1607 0.995892 8.31909 1.68886 6.64535C2.38183 4.97162 3.55553 3.54094 5.06156 2.53423C6.56759 1.52752 8.33832 0.989985 10.1498 0.989594C12.5791 0.989594 14.9089 1.95462 16.6267 3.67239C18.3444 5.39015 19.3095 7.71994 19.3095 10.1492H19.3114Z"
                  stroke="#5854A8"
                  stroke-width="1.97918"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.6027 21.6007L16.6211 16.6191"
                  stroke="#5854A8"
                  stroke-width="1.97918"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_221_526">
                  <rect width="23" height="23" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="nav-top-dropdown">
            <DropdownMenu name="Doctors" list={["d1", "d2", "d3", "d4"]} />
            <DropdownMenu name="Services" list={["d1", "d2", "d3", "d4"]} />
            <DropdownMenu name="Blogs" list={["d1", "d2", "d3", "d4"]} />
          </div>
        </div>
        <div className="nav-city-cont">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <g clip-path="url(#clip0_221_508)">
              <path
                d="M12.3086 2.47501C8.43859 2.47501 5.30859 5.60501 5.30859 9.47501C5.30859 14.725 12.3086 22.475 12.3086 22.475C12.3086 22.475 19.3086 14.725 19.3086 9.47501C19.3086 5.60501 16.1786 2.47501 12.3086 2.47501ZM12.3086 11.975C10.9286 11.975 9.80859 10.855 9.80859 9.47501C9.80859 8.09501 10.9286 6.97501 12.3086 6.97501C13.6886 6.97501 14.8086 8.09501 14.8086 9.47501C14.8086 10.855 13.6886 11.975 12.3086 11.975Z"
                fill="#E3EFF4"
              />
            </g>
            <defs>
              <clipPath id="clip0_221_508">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.308594 0.475006)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Select City</span>
        </div>
      </div>
      <div className="nav-btm-cont">
        {btmMenus.map((menu, ind) => (
          <DropdownMenu
            key={ind}
            st={"btm"}
            name={menu.name}
            list={menu.list}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
