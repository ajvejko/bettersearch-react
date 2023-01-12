import { useState } from "react";
import "../App.css";
import WebAdd from "./WebAdd";
import WebButton from "./WebButton";

export default function WebTable() {
  const links = JSON.parse(localStorage.getItem("links") || "[]");
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [linkState, setLinkState] = useState(links);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleClosing = () => {
    setVisible(false);
  };

  const handleButtonToggle = (name, search) => {
    setSelectedButton(name);
    setSelectedLink(search);
  };

  const handleAdd = (name, home, search) => {
    links.push({ name, home, search });
    localStorage.setItem("links", JSON.stringify(links));
    setLinkState(links);
  };

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
    <div className="w-1/2 flex justify-center relative mx-auto">
      <div>
        <div className="mt-12 text-white text-3xl font-bebas flex justify-center">
          Websites
        </div>
        <div className="mt-3 flex flex-wrap justify-center">
          {buttons}
          <button
            onClick={() => {
              setVisible(!visible);
            }}
            className="text-white py-1 px-2 rounded-xl border-2 shadow-[0_0px_5px_rgba(0,0,0,0.25)] border-white active:shadow-white"
          >
            +
          </button>
          {visible && <WebAdd onClick={handleClosing} handleAdd={handleAdd} />}
        </div>
      </div>
    </div>
  );
}
