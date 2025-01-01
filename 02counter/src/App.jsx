import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert('Counter value is out of range');
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert('Counter value is out of range');
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>Idhar bhi update hoga: {counter}</p>
    </>
  );
}

export default App;


//jaise hi click kiya button, react andar se react karta hain, trigger karta hain, automatically apka pura ka pura dom anaylse
//karta hain ki kaha kaha pe wo value hain jo mujhe update karni hain kyunki state change ho gyi hain
//Hooks:
//1. useState: Propogate the state in the UI(dom).
//2. useEffect: Propogate the side effects in the UI.

 