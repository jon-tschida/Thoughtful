import React from "react";
import BackArrow from "../assets/BackArrow.svg";
import { Link } from "react-router-dom";

export default function Back() {
  return (
    <Link to={"/"}>
      <img
        src={BackArrow}
        className="absolute transition-all duration-300 cursor-pointer select-none opacity-90 w-7 top-10 left-10 hover:scale-110"
      />
    </Link>
  );
}
