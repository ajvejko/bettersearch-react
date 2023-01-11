import { useState } from "react";
import "../App.css";
import WebAdd from "./WebAdd";
import WebButton from "./WebButton";

let links = JSON.parse(localStorage.getItem("links") || []);

export default function WebTable() {
  const [visible, setVisible] = useState(false);
  const handleClosing = () => {
    setVisible(false);
  };
  return (
    <div className="w-1/2 flex justify-center mx-auto">
      <div>
        <div className="mt-12 text-white text-3xl font-bebas flex justify-center">
          Websites
        </div>
        <div className="mt-3 flex flex-wrap justify-center">
          <button
            onClick={() => {
              setVisible(!visible);
            }}
            className="mr-3 text-white border-2 rounded-xl px-3 py-2"
          >
            +
          </button>
          {visible && <WebAdd onClick={handleClosing} />}
          {console.log(visible)}
        </div>
      </div>
    </div>
  );
}
