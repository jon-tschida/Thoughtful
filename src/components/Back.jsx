import React from "react";
import BackArrow from "../assets/backArrow.svg";
import { Link } from "react-router-dom";

export default function Back() {
  return (
    <Link to={"/"}>
      <img
        src={BackArrow}
        className="absolute transition-all duration-300 cursor-pointer select-none opacity-90 w-7 top-5 left-5 lg:top-10 lg:left-10 hover:scale-110"
      />
    </Link>
  );
}
