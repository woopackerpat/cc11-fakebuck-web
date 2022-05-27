import React from "react";
import MenuItem from "./MenuItem";
import { useLocation } from "react-router-dom";
import axios from "../../../config/axios";

const menus = [
  {
    title: "Friend Requests",
    to: "/friend/request",
    icon: "fa-solid fa-user-check",
  },
  {
    title: "Suggestion",
    to: "/friend/suggestion",
    icon: "fa-solid fa-user-plus",
  },
  { title: "All Friends", to: "/friend", icon: "fa-solid fa-user-group" },
];

function MenuList() {
  const { pathname } = useLocation();
  return (
    <ul className="px-2">
      {menus.map((el) => (
        <MenuItem
          key={el.title}
          title={el.title}
          to={el.to}
          icon={el.icon}
          active={pathname === el.to}
        />
      ))}
    </ul>
  );
}

export default MenuList;
