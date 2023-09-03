import React from 'react';
import { useState } from 'react';

const RatingButton = (props) => {

  const {handleClick, text} = props;

  return (
    <>
    <button onClick={handleClick}>{text}</button>
    </>
  );
}

const Statistic = (props) => {
  const { texts, nums } = props;
  return (
    <>
    <p>{texts[0]} {nums[0]}</p>
    <p>{texts[1]} {nums[1]}</p>
    <p>{texts[2]} {nums[2]}</p>
    </>
  );
}

const App = () => {

  const [goodRating, setGoodRating] = useState(0)
  const [neutralRating, setNeutralRating] = useState(0)
  const [badRating, setBadRating] = useState(0)

  const handleRating = (rating, setRating) => {
    console.log(rating);
    setRating(rating+1);
  }

  return (
    <>
      <div>
        <h1>We would like for you to give us some feedback!</h1>
        <RatingButton text={"Good"} handleClick={() => handleRating(goodRating, setGoodRating)}></RatingButton>
        <RatingButton text={"Neutral"} handleClick={() => handleRating(neutralRating, setNeutralRating)}></RatingButton>
        <RatingButton text={"Bad"} handleClick={() => handleRating(badRating, setBadRating)}></RatingButton>

        <Statistic texts={["Good", "Neutral", "Bad"]} nums={[goodRating, neutralRating, badRating]}></Statistic>
        
      </div>
    </>
  );
}

export default App
