import { useState } from "react";
import "../App.css";

export default function SearchBar({
  selectedSearch,
  selectedHome,
  enterClicked,
  setEnterClicked,
}) {
  const [inputValue, setInputValue] = useState("");

  //Function to open window with selected search
  const handleSubmit = () => {
    event.preventDefault();
    //Check if nothing is selected and input is empty then nothing should happen.
    if (!inputValue.trim() && !selectedSearch) {
      return;
    }
    //Check for the input, if the input is empty, but the button is toggled then it opens the home page of it, else opens search or default link if no button is selected
    if (!inputValue.trim() && selectedHome) {
      window.open(selectedHome, "_self");
    } else {
      selectedSearch
        ? window.open(selectedSearch + inputValue, "_self")
        : window.open("https://www.google.com/search?q=" + inputValue, "_self");
    }
  };

  //Function that puts the link together
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  //Check so that handleSubmit gets ran and sets the state back to false so it doesnt create inf loop
  if (enterClicked) {
    handleSubmit();
    setEnterClicked(false);
  }

  return (
    <form className="mx-auto mt-20 w-1/2 font-inter">
      {/* Input field for searching */}
      <input
        type="text"
        autoFocus
        onChange={handleInput}
        placeholder="Search the web"
        className="w-full rounded-full border-2 bg-neutral-800 px-5 py-2 text-xl text-white outline-none focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500"
      ></input>
      {/* Display finalized link */}
      <div className="mr-6 mt-1 text-right text-sm text-stone-800">
        {selectedSearch
          ? selectedSearch + inputValue
          : "https://www.google.com/search?q=" + inputValue}
      </div>
    </form>
  );
}
