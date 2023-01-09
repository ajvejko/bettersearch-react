import { useState } from "react";
import "../App.css";
import WebButton from "./WebButton";

export default function WebTable() {
  return (
    <div className="w-1/2 flex justify-center mx-auto">
      <div>
        <div className="mt-12 text-white text-3xl font-bebas flex justify-center">
          Websites
        </div>
        <div className="mt-3 flex flex-wrap justify-center">
          <button
            onClick={""}
            className="mr-3 text-white border-2 rounded-xl px-3 py-2"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
