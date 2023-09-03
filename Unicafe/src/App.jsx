import React, { useEffect } from 'react';
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
  console.log(nums);
  return (
    <>
    <p>{texts[0]} {nums[0]}</p>
    <p>{texts[1]} {nums[1]}</p>
    <p>{texts[2]} {nums[2]}</p>
    <p>{texts[3]} {nums[3]}</p>
    <p>{texts[4]} {nums[4]}</p>
    <p>{texts[5]} {Math.round(nums[5] * 100) / 100}%</p>
    </>
  );
}

const App = () => {

  const [goodRating, setGoodRating] = useState(0)
  const [neutralRating, setNeutralRating] = useState(0)
  const [badRating, setBadRating] = useState(0)

  const [allRatings, setAllRatings] = useState(0);
  const [allRatingsTotal, setTotal] = useState(0)

  const [averageRating, setAverage] = useState(0);

  const [totalPositive, setTotalPositive] = useState(0);

  const handleRating = (rating, setRating) => {
    //console.log(rating);
    setRating(rating+1);
    console.log(allRatings);
  }

  useEffect(() => {
    setAllRatings(goodRating+neutralRating+badRating);
    console.log(allRatingsTotal);

  }, [goodRating, neutralRating, badRating])

  useEffect(() => {
    if(allRatings != 0)
    {
    setAverage(allRatingsTotal / allRatings);
    setTotalPositive(goodRating / allRatings)
    }
  }, [allRatings])
  return (
    <>
      <div>
        <h1>We would like for you to give us some feedback!</h1>
        <RatingButton text={"Good"} handleClick={() => {handleRating(goodRating, setGoodRating), setTotal(allRatingsTotal+1)}}></RatingButton>
        <RatingButton text={"Neutral"} handleClick={() => handleRating(neutralRating, setNeutralRating)}></RatingButton>
        <RatingButton text={"Bad"} handleClick={() => {handleRating(badRating, setBadRating), setTotal(allRatingsTotal-1)}}></RatingButton>

        <Statistic texts={["Good", "Neutral", "Bad", "All", "Average", "Total positive"]} nums={[goodRating, neutralRating, badRating, allRatings, averageRating, totalPositive]}></Statistic>
        
      </div>
    </>
  );
}

export default App
