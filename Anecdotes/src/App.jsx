import { useState, useEffect } from 'react'

const NextButton = (props) => {
  return(
    <>
    <button onClick={props.nextAnecdote}>Next anecdote</button>
    </>
  );
}

const VoteButton = (props) => {
  return(
    <>
      <button onClick={props.VoteAnecdote}>Vote</button>
    </>
  );
}

const App = () => {
  const anecdotes = [
    "Programming is like sex: One mistake and you have to support it for the rest of your life.",
    "Copy-and-Paste was programmed by programmers for programmers actually.",
    "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "How many programmers does it take to change a light bulb? None, that’s a hardware problem.",
    "When I wrote this code, only God and I understood what I did. Now only God knows.",
    "Computers are fast; programmers keep it slow.",
    "A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch!",
    "Programmer: A machine that turns coffee into code."
  ]
  console.log(anecdotes);

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState(
  [0, 0, 0, 0, 0, 0, 0, 0])
  

  const NextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const VoteAnecdote = () => {
    setPoints([...points][selected] + 1 );
  }

  useEffect(() => {
    console.log(selected);
    console.log(points);
  }, [selected, points])

  return (
    <>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        <p>has {points[selected]} votes</p>
      </div>
      <div>
      <NextButton nextAnecdote={NextAnecdote}></NextButton>
      <VoteButton VoteAnecdote={VoteAnecdote}></VoteButton>
      </div>
    </>
  )
}

export default App
