import { useState } from "react";
import "../App.css";
import WebAdd from "./WebAdd";
import WebButton from "./WebButton";

export default function WebTable({ setSelectedLink }) {
  // Retrieve the links from local storage
  const links = JSON.parse(localStorage.getItem("links") || "[]");
  const [visible, setVisible] = useState(false);
  const [linkState, setLinkState] = useState(links);
  const [selectedButton, setSelectedButton] = useState(null);

  // Function to handle closing the WebAdd component
  const handleClosing = () => {
    setVisible(false);
  };

  // Function to handle when a button is toggled
  const handleButtonToggle = (name, search) => {
    setSelectedButton(name);
    setSelectedLink(search);
  };

  // Function to handle adding a new link to the list
  const handleAdd = (name, home, search) => {
    links.push({ name, home, search });
    localStorage.setItem("links", JSON.stringify(links));
    setLinkState(links);
  };

  // Map through the links and render a button for each one
  const buttons = linkState.map((link) => (
    <WebButton
      name={link.name}
      search={link.search}
      handleButtonToggle={handleButtonToggle}
      selectedButton={selectedButton}
      home={link.home}
      key={link.name}
    >
      {link.name}
    </WebButton>
  ));

  return (
    <div className="w-1/2 flex justify-center mx-auto">
      <div>
        <div className="mt-12 text-white text-4xl font-bebas flex justify-center">
          Websites
        </div>
        <div className="flex flex-wrap justify-center">
          {buttons}
          <button
            //Sets the state visible to true
            onClick={() => {
              setVisible(!visible);
            }}
            className="text-white pb-0.5 px-2 rounded-xl border-2 mt-4 shadow-[0_0px_5px_rgba(0,0,0,0.25)] border-white active:shadow-white"
          >
            +
          </button>
          {/* When visible is true, renders WebAdd with handleClosing and handleAdd properties */}
          {visible && (
            <WebAdd handleClosing={handleClosing} handleAdd={handleAdd} />
          )}
        </div>
      </div>
    </div>
  );
}
