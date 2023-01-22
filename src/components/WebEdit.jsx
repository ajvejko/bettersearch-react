import { useState, useRef } from "react";
import "../App.css";

//Retrieve the links from local storage
let links = JSON.parse(localStorage.getItem("links") || "[]");

export default function WebEdit({
  handleClosing,
  editSearch,
  editName,
  editHome,
  setLinkState,
}) {
  const [isIllegal, setIsIllegal] = useState(false);
  const regIllegalChar = /[.*?+<>{}[\]\/]/g;

  //Function that checks if the input cotains illegal characters
  const handleInput = (event) => {
    regIllegalChar.test(event.target.value)
      ? setIsIllegal(true)
      : setIsIllegal(false);
  };

  const editButton = () => {
    //Get the new values from the input fields
    const newName = nameRef.current.value;
    const newHome = homeRef.current.value;
    const newSearch = searchRef.current.value;

    //Map through the links and when it matches clicked button, it updates it with new values
    const newLinks = links.map((link) => {
      if (link.name === editName) {
        link.name = newName;
        link.home = newHome;
        link.search = newSearch;
      }
      //incase it finds no button
      return link;
    });

    //Update local storage with new array
    links = newLinks;
    localStorage.setItem("links", JSON.stringify(links));
    //setLinkState to rerender the site
    setLinkState(links);
    handleClosing();
  };

  const deleteButton = () => {
    //Get index of the button clicked in an array
    const index = links.findIndex((link) => link.name === editName);

    //Remove the link
    links.splice(index, 1);

    //Update local storage with new array
    localStorage.setItem("links", JSON.stringify(links));
    //setLinkState to rerender the site
    setLinkState(links);
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
          Edit Website
        </div>
        <div className="text-white text-2xl float-left mt-5 font-bebas">
          Name:
        </div>
        <input
          type="text"
          defaultValue={editName}
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
          defaultValue={editHome}
          ref={homeRef}
          placeholder="Link to home page"
          className="w-full px-2 py-1 rounded-md outline-none border-2 bg-neutral-800 text-white focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
        ></input>
        <div className="text-white text-2xl float-left mt-5 font-bebas">
          Search link:
        </div>
        <input
          type="text"
          defaultValue={editSearch}
          ref={searchRef}
          placeholder="Link for searching"
          className="w-full px-2 py-1 rounded-md outline-none border-2 bg-neutral-800 text-white focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
        ></input>
        <div className="flex justify-between mt-4">
          <button
            onClick={deleteButton}
            className="text-red-500 py-1 px-2 rounded-md border-2 shadow-[0_0px_8px_rgba(0,0,0,0.25)] hover:border-red-500 active:shadow-red-500"
          >
            Delete
          </button>
          <button
            disabled={isIllegal}
            onClick={editButton}
            className={`text-white py-1 px-2 rounded-md border-2 shadow-[0_0px_8px_rgba(0,0,0,0.25)]  ${
              //Checks if the isIllegal state is true, if true turns element red
              isIllegal
                ? "border-red-500 shadow-red-500"
                : "border-white active:shadow-white"
            }`}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
