import "../App.css";

export default function WebButton({
  name,
  search,
  home,
  handleButtonToggle, //Function to handle when the button is clicked
  selectedButton, //Currently selected button
}) {
  return (
    <button
      onClick={() => handleButtonToggle(name, search, home)} //Calls handleButtonGoggle function that was passed as a prop and passes other props
      className={`text-white py-1 px-2  mr-3 mt-4 rounded-xl border-2 shadow-[0_0px_8px_rgba(0,0,0,0.25)] border-white active:shadow-blue-500 ${
        name === selectedButton ? "border-blue-500" : "" //conditional styling for when the button is selected
      }`}
    >
      {name}
    </button>
  );
}
