import './App.css';
import InputComponent from './components/InputComponent';
import {useState} from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const suma = () => {
    alert(num1 + num2);
  }

  return (
    <div className='App'>
      <InputComponent guardaNum={e => setNum1(Number(e.target.value))}/>
      <InputComponent guardaNum={e => setNum2(Number(e.target.value))}/>
      <button onClick={suma}>Sumar</button>
    </div>
  );
}

export default App;
