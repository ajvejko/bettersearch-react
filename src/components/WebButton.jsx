import "../App.css";

export default function WebButton({
  name,
  search,
  handleButtonToggle,
  selectedButton,
}) {
  return (
    <div>
      <button
        onClick={() => handleButtonToggle(name, search)}
        className={`text-white py-1 px-2  mr-3 rounded-xl border-2 shadow-[0_0px_8px_rgba(0,0,0,0.25)] border-white active:shadow-blue-500 ${
          name === selectedButton ? "border-blue-500" : ""
        }`}
      >
        {name}
      </button>
    </div>
  );
}
