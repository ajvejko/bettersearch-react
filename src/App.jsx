import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WebTable from "./components/WebTable";
import WebEdit from "./components/WebEdit";
import React from "react";

function App() {
  const [selectedLink, setSelectedLink] = useState(null);
  return (
    <div>
      {/* the background */}
      <div className="w-screen h-screen bg-neutral-900 absolute top-0 -z-10">
        <div className="backdrop-blur-[100px] bg-neutral-900/50 absolute w-full h-full z-10"></div>
        <div className="h-64 w-64 bg-purple-500/30 absolute top-0 left-0 rounded-br-full"></div>
        <div className="h-52 w-52 bg-pink-400/30 absolute bottom-0 right-0 botoom rounded-tl-full"></div>
      </div>
      <div className="mt-14 text-6xl text-slate-50 text-center font-bebas">
        Search better <br />
        with&nbsp;
        <span className="text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400">
          Better Search
        </span>
      </div>
      {/* render the SearchBar and WebTable components */}
      <SearchBar selectedLink={selectedLink}/>
      <WebTable setSelectedLink={setSelectedLink}/>
      <WebEdit />
    </div>
  );
}

export default App;
