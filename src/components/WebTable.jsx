import { useState } from "react";
import "../App.css";
import WebAdd from "./WebAdd";
import WebButton from "./WebButton";
import WebEdit from "./WebEdit";

export default function WebTable({ setSelectedSearch, setSelectedHome }) {
  //Retrieve the links from local storage
  const links = JSON.parse(localStorage.getItem("links") || "[]");
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [linkState, setLinkState] = useState(links);
  const [selectedButton, setSelectedButton] = useState(false);

  //Function to handle closing the WebAdd component
  const handleClosing = () => {
    setOpenAdd(false);
    setOpenEdit(false);
  };

  //Function to handle when a button is toggled
  const handleButtonToggle = (event, name, search, home) => {
    if (event.shiftKey) {
      setOpenEdit(true);
    } else {
      if (selectedButton === name) {
        setSelectedButton(false);
        setSelectedSearch(null);
        setSelectedHome(null);
        return;
      } else {
        setSelectedButton(name);
        setSelectedSearch(search);
        setSelectedHome(home);
      }
    }
  };
  //If the button clicked is the same as already it deselects

  //Function to handle adding a new link to the list
  const handleAdd = (name, home, search) => {
    links.push({ name, home, search });
    localStorage.setItem("links", JSON.stringify(links));
    setLinkState(links);
  };

  //Map through the links and render a button for each one
  const buttons = linkState.map((link) => (
    <WebButton
      name={link.name}
      search={link.search}
      home={link.home}
      handleButtonToggle={() =>
        handleButtonToggle(event, link.name, link.name, link.home)
      }
      selectedButton={selectedButton}
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
            //Sets the state openAdd to true
            onClick={() => {
              setOpenAdd(!openAdd);
            }}
            className="text-white pb-0.5 px-2 rounded-xl border-2 mt-4 shadow-[0_0px_5px_rgba(0,0,0,0.25)] border-white active:shadow-white"
          >
            +
          </button>
          {/* When openAdd is true, renders WebAdd with handleClosing and handleAdd properties */}
          {openAdd && (
            <WebAdd handleClosing={handleClosing} handleAdd={handleAdd} />
          )}

          {/* When openEdit is true, renders WebAdd with handleClosing and handleAdd properties */}
          {openEdit && <WebEdit handleClosing={handleClosing} />}
        </div>
      </div>
    </div>
  );
}
