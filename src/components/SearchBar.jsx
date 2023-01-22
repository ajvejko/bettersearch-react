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
    <form className="mt-20 w-1/2 mx-auto font-inter">
      {/* Input field for searching */}
      <input
        type="text"
        autoFocus
        onChange={handleInput}
        className="w-full px-5 py-2 rounded-full outline-none border-2 bg-neutral-800 text-white focus:shadow-[0_0px_11px_rgba(0,0,0,0.25)] focus:shadow-blue-500 text-xl"
      ></input>
      {/* Display finalized link */}
      <div className="text-stone-800 mr-6 mt-1 text-sm text-right">
        {selectedSearch
          ? selectedSearch + inputValue
          : "https://www.google.com/search?q=" + inputValue}
      </div>
    </form>
  );
}
