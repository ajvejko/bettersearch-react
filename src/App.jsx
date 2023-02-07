import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WebTable from "./components/WebTable";
import WebEdit from "./components/WebEdit";
import React from "react";

function App() {
  const [selectedSearch, setSelectedSearch] = useState(null);
  const [selectedHome, setSelectedHome] = useState(null);
  const [enterClicked, setEnterClicked] = useState(false);
  //If enter is pressed, sets enterClicked to true which then runs handleSubmit function
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setEnterClicked(true);
    }
  };

  //Attach event listener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      //Detach event listener when component unmounts
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div>
      {/* the background */}
      <div className="absolute top-0 -z-10 h-screen w-screen bg-neutral-900">
        <div className="absolute z-10 h-full w-full bg-neutral-900/50 backdrop-blur-[100px]"></div>
        <div className="absolute top-0 left-0 h-64 w-64 rounded-br-full bg-purple-500/30"></div>
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-tl-full bg-pink-400/30"></div>
      </div>
      <div className="mt-14 text-center font-bebas text-6xl text-slate-50">
        Search better <br />
        with&nbsp;
        <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-7xl text-transparent">
          Better Search
        </span>
      </div>
      {/* Render the SearchBar and WebTable components */}
      <SearchBar
        selectedSearch={selectedSearch}
        selectedHome={selectedHome}
        enterClicked={enterClicked}
        setEnterClicked={setEnterClicked}
      />
      <WebTable
        setSelectedSearch={setSelectedSearch}
        setSelectedHome={setSelectedHome}
      />
    </div>
  );
}

export default App;
