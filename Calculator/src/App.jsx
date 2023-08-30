import { useState } from "react";

const Display = ({counter}) => {
  return(
    <div>{counter}</div>
  );
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
}

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value', counter)


  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1);
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1);
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0);
  }

  return (
    <>
    <Display counter={counter}/>
    <Button handleClick={increaseByOne} text="Plus"/>
    <Button handleClick={decreaseByOne} text="Minus"/>
    <Button handleClick={setToZero} text="Zero"/>
    </>
  );
}

export default App
