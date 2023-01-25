import { useState, useRef } from "react";
import "../App.css";

//Retrieve the links from local storage
let links = JSON.parse(localStorage.getItem("links") || "[]");

export default function WebAdd({ handleClosing, handleAdd }) {
  const [isIllegal, setIsIllegal] = useState(false);
  const regIllegalChar = /[.*?+<>{}[\]\/]/;

  //Function that checks if the input cotains illegal characters
  const handleInput = (event) => {
    regIllegalChar.test(event.target.value)
      ? setIsIllegal(true)
      : setIsIllegal(false);
  };

  //Function to handle input when the "Add" button is clicked
  const addButton = () => {
    //Get values from the input fields
    const name = nameRef.current.value;
    const home = homeRef.current.value;
    const search = searchRef.current.value;
    //Calls handleAdd function that was passed as a prop
    handleAdd(name, home, search);
    //Add the new link to the list
    links.push({ name, home, search });
    //Saves the updated list to localStorage
    localStorage.setItem("links", JSON.stringify(links));
    //Calls handleClosing function that was passsed as a prop
    handleClosing();
  };

  //useRef to create a refernce for the input fields
  const nameRef = useRef();
  const homeRef = useRef();
  const searchRef = useRef();
  return (
    <div className="absolute bg-black/50 top-0 z-2 h-screen w-screen flex justify-center items-center">
      <div className="w-1/4 border-2 bg-neutral-900 relative rounded-xl p-4 text-center">
        <button
          onClick={handleClosing}
          className="text-white text-lg absolute py-0.25 px-2 right-0 top-0 hover:text-red-500"
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
          ref={nameRef}
          onChange={handleInput}
          placeholder="Name of the button"
          className={`w-full px-2  py-1 rounded-md outline-none border-2 bg-neutral-800 text-white focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] ${
            //Checks if the isIllegal state is true, if true turns element red
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
          ref={homeRef}
          placeholder="Link to home page"
          className="w-full px-2 py-1 rounded-md outline-none border-2 bg-neutral-800 text-white focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
        ></input>
        <div className="text-white text-2xl float-left mt-5 font-bebas">
          Search link:
        </div>
        <input
          type="text"
          ref={searchRef}
          placeholder="Link for searching"
          className="w-full px-2 py-1 rounded-md outline-none border-2 bg-neutral-800 text-white focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
        ></input>
        <button
          disabled={isIllegal}
          onClick={addButton}
          className={`text-white mt-4 py-1 px-2 rounded-md border-2 shadow-[0_0px_8px_rgba(0,0,0,0.25)]  ${
            //Checks if the isIllegal state is true, if true turns element red
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
