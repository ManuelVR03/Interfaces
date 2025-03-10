import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleChange = (e) => {
    setMinutes(parseInt(e.target.value) || 0);
    setSeconds(0);
  };

  return (
    <div className="p-4 border rounded shadow-lg w-64 text-center">
      <h1 className="text-xl font-bold mb-2">Temporizador</h1>
      <input
        type="number"
        className="border p-1 rounded mb-2 w-full text-center"
        placeholder="Minutos"
        onChange={handleChange}
        disabled={isRunning}
      />
      <div className="text-2xl font-semibold">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <div className="mt-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleStart}
          disabled={isRunning || (minutes === 0 && seconds === 0)}
        >
          Iniciar
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handlePause}
          disabled={!isRunning}
        >
          Pausar
        </button>
      </div>
    </div>
  );
}
