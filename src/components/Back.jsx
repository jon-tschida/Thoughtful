import React from "react";
import BackArrow from "../assets/BackArrow.svg";
import { Link } from "react-router-dom";

export default function Back() {
  return (
    <Link to={"/"}>
      <img
        src={BackArrow}
        className="absolute cursor-pointer w-7 top-10 left-10"
      />
    </Link>
  );
}
