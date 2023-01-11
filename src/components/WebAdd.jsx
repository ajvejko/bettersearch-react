import { useState } from "react";
import "../App.css";

export default function WebAdd({ onClick }) {
  const [isIllegal, setIsIllegal] = useState(false);
  const regIllegalChar = /[.*?+<>{}[\]\/]/g;
  const handleInput = (event) => {
    regIllegalChar.test(event.target.value)
      ? setIsIllegal(true)
      : setIsIllegal(false);
  };
  return (
    <div className="absolute bg-black/50 top-0 z-2 h-screen w-screen flex justify-center items-center">
      <div className="w-1/4 border-2 bg-neutral-900 relative rounded-xl p-4 text-center">
        <button
          onClick={onClick}
          className="text-white text-lg absolute py-1 px-2 right-0 top-0 hover:text-red-500"
        >
          X
        </button>
        <div className="text-white text-center text-3xl font-bebas">
          Add Website
        </div>
        <div className="text-white text-2xl float-left mt-5 font-bebas">
          Name:
        </div>
        <input
          type="text"
          onChange={handleInput}
          placeholder="Name of the button"
          className={`w-full px-2  py-1 rounded-md outline-none border-2 bg-neutral-800 text-white focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] ${
            isIllegal
              ? "border-red-500 focus:shadow-red-500"
              : "border-white focus:shadow-blue-500"
          }`}
        ></input>
        <div className="text-white text-2xl float-left mt-5 font-bebas">
          Home link:
        </div>
        <input
          type="text"
          placeholder="Link to home page"
          className="w-full px-2 py-1 rounded-md outline-none border-2 bg-neutral-800 text-white focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
        ></input>
        <div className="text-white text-2xl float-left mt-5 font-bebas">
          Search link:
        </div>
        <input
          type="text"
          placeholder="Link for searching"
          className="w-full px-2 py-1 rounded-md outline-none border-2 bg-neutral-800 text-white focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
        ></input>
        <button
          disabled={isIllegal}
          className={`text-white mt-4 py-1 px-2 rounded-md border-2 shadow-[0_0px_5px_rgba(0,0,0,0.25)]  ${
            isIllegal
              ? "border-red-500 shadow-red-500"
              : "border-white active:shadow-white"
          }`}
        >
          Add
        </button>
      </div>
    </div>
  );
}
