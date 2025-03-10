import { useState } from "react";

export default function ToggleInput() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleInput = () => {
    setIsDisabled(!isDisabled);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-4 border rounded shadow-lg w-64 text-center">
      <h1 className="text-xl font-bold mb-2">Control de Input</h1>
      <input
        type="text"
        className="border p-1 rounded mb-2 w-full text-center"
        value={inputValue}
        onChange={handleChange}
        disabled={isDisabled}
      />
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleInput}
        >
          {isDisabled ? "Habilitar" : "Deshabilitar"}
        </button>
      </div>
    </div>
  );
}
