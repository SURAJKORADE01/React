import { useState } from 'react';
import './App.css'

function App() 
{
  const [counter,setCounter] = useState(15);

  const addValue = () => 
  {
    if(counter >= 20)
    {
      return;
    }

    setCounter(counter + 1);
  }

  const removeValue = () => 
  {
    if(counter <= 0)
    {
      return;
    }

    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase {counter}</button> <br />
      <button onClick={removeValue}>Decrease {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
