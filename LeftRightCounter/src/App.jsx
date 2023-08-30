import { useState } from 'react'

const History = (props) => {
  if(props.allClicks.length === 0)
  {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    );
  }
  return (
    <div>
      button press history: {props.allClicks.join(" ")}
    </div>
  );
}

const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick}>
    {text}
  </button>
  );
}

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState();

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"))
    setLeft(left + 1);
    const updatedLeft = left + 1;
    setTotal(updatedLeft + right);
  }

  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    setRight(right + 1);
    const updatedRight = right + 1;
    setTotal(left + updatedRight);

  }

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text="left"></Button>
        <Button handleClick={handleRightClick} text="right"></Button>
        {right}
        <History allClicks={allClicks}></History>
      </div>
    </div>
  );
}

export default App
