import { useState } from "react";
import "../App.css";

export default function SearchBar() {
  return (
    <input
      type="text"
      className="w-2/3 px-5 py-2 rounded-full outline-none border-2 bg-neutral-800 text-white focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500 text-xl"
    ></input>
  );
}
