import React, { useState } from 'react';

export default function Sumador () {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleSum = () => {
    alert(num1 + num2);
  }

  return (
    <div>
      <h1>Sumador</h1>
      <input type="number" name="num1" placeholder="Número 1" onChange={e => setNum1(Number(e.target.value))}/>
      <input type="number" name="num2" placeholder="Número 2" onChange={e => setNum2(Number(e.target.value))}/>
      <button onClick={handleSum}>Sumar</button>
    </div>
  );
}