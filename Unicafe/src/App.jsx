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

const StatisticsLine = (props) => {
  const {text, value} = props;
  return (
    <>
    <td><p>{text}</p></td><td><p>{value}</p></td>
    </>
  );
}

const Statistic = (props) => {
  const { texts, nums } = props;
  console.log(nums);
  if(nums[3] == 0) {
    return (
      <>
      <h2>No feeback given yet!</h2>
      </>
    );
  }
  else
  return (
    <table>
      <tbody>
        <tr><td><h1>Statistics</h1></td></tr>
        
        <tr>
        <StatisticsLine text="Good" value={nums[0]}/>
        </tr>
        <tr>
        <StatisticsLine text="Neutral" value={nums[1]}/>
        </tr>
        <tr>
        <StatisticsLine text="Bad" value={nums[2]}/>
        </tr>
        <tr>
        <StatisticsLine text="Total" value={nums[3]}/>
        </tr>
        <tr>
        <StatisticsLine text="Average" value={nums[4]}/>
        </tr>
        <tr>
        <StatisticsLine text="Positive" value={Math.round(nums[5] * 100) + "%"}/>
        </tr>
        </tbody>
    </table>
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
    const average = allRatingsTotal / allRatings;
    const totalPositive = goodRating / allRatings;
    setAverage(Math.round(average * 100) / 100);
    setTotalPositive(totalPositive)
    }
  }, [allRatings])
  return (
    <>
      <div>
        <h1>We would like for you to give us some feedback!</h1>
        <RatingButton text={"Good"} handleClick={() => {handleRating(goodRating, setGoodRating), setTotal(allRatingsTotal+1)}}></RatingButton>
        <RatingButton text={"Neutral"} handleClick={() => handleRating(neutralRating, setNeutralRating)}></RatingButton>
        <RatingButton text={"Bad"} handleClick={() => {handleRating(badRating, setBadRating), setTotal(allRatingsTotal-1)}}></RatingButton>

        <Statistic nums={[goodRating, neutralRating, badRating, allRatings, averageRating, totalPositive]}></Statistic>
        
      </div>
    </>
  );
}

export default App
