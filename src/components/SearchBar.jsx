import { useState } from "react";
import "../App.css";

export default function SearchBar({ selectedLink }) {
  const [inputValue, setInputValue] = useState("");
  //Function that puts the link together
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="mt-20 w-1/2 mx-auto font-inter">
      {/* Input field for searching */}
      <input
        type="text"
        onChange={handleInput}
        className="w-full px-5 py-2 rounded-full outline-none border-2 bg-neutral-800 text-white focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500 text-xl"
      ></input>
      {/* Display finalized link */}
      <div className="text-stone-800 mr-6 mt-1 text-sm text-right">
        {selectedLink ? selectedLink+inputValue : "google.com"}
      </div>
    </div>
  );
}
