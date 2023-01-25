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
  const [editName, setEditName] = useState("");
  const [editHome, setEditHome] = useState("");
  const [editSearch, setEditSearch] = useState("");
  const [linkState, setLinkState] = useState(links);
  const [selectedButton, setSelectedButton] = useState(false);

  //Function to handle closing the WebAdd component
  const handleClosing = () => {
    setOpenAdd(false);
    setOpenEdit(false);
    //Default the state so user has to update the values after editing
    setSelectedButton(false);
    setSelectedSearch(null);
    setSelectedHome(null);
  };

  //Function to handle when a button is toggled
  const handleButtonToggle = (search, name, home) => {
    //If shift is pressed open edit menu
    if (event.shiftKey) {
      setEditSearch(search);
      setEditName(name);
      setEditHome(home);
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
        handleButtonToggle(link.search, link.name, link.home)
      }
      selectedButton={selectedButton}
      key={link.name}
    >
      {link.name}
    </WebButton>
  ));

  return (
    <div className="mx-auto flex w-1/2 justify-center">
      <div>
        <div className="mt-12 flex justify-center font-bebas text-4xl text-white">
          Websites
        </div>
        <div className="flex flex-wrap justify-center">
          {buttons}
          <button
            //Sets the state openAdd to true
            onClick={() => {
              setOpenAdd(!openAdd);
            }}
            className="mt-4 rounded-xl border-2 border-white px-2 pb-0.5 text-white shadow-[0_0px_5px_rgba(0,0,0,0.25)] active:shadow-white"
          >
            +
          </button>
          {/* When openAdd is true, renders WebAdd with handleClosing and handleAdd properties */}
          {openAdd && (
            <WebAdd handleClosing={handleClosing} handleAdd={handleAdd} />
          )}

          {/* When openEdit is true, renders WebAdd with handleClosing and handleAdd properties */}
          {openEdit && (
            <WebEdit
              handleClosing={handleClosing}
              editSearch={editSearch}
              editName={editName}
              editHome={editHome}
              setLinkState={setLinkState}
              setSelectedSearch={setSelectedSearch}
              setSelectedHome={setSelectedHome}
            />
          )}
        </div>
      </div>
    </div>
  );
}
