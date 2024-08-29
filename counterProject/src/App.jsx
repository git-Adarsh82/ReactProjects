import { useState } from 'react';

function App() {
  let Counter = 2
  const [counter, setCounter] = useState(Counter);
  
  function addValue() {
    if(counter>=20)return setCounter(20);
    else {setCounter(counter + 1);
    console.log(counter + 1);}
    }
  
    function reduceValue() {
    if(counter<=0)return setCounter(0);
    else{ setCounter(counter - 1);
    console.log(counter - 1);}  
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={reduceValue}>Reduce Value {counter}</button>      
    </>
  );
}

export default App;
