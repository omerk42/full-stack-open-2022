import { useState } from "react";

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  const avg = good - bad / total;
  const perc = (good / total) * 100;
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback give</p>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="postive" value={perc} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const upGood = good + 1;
    setGood(upGood);
  };

  const handleBadClick = () => {
    const upBad = bad + 1;
    setBad(upBad);
  };

  const handleNeutralClick = () => {
    const upneutral = neutral + 1;
    setNeutral(upneutral);
  };

  // const History = (props) => {
  //   if (props.allClick.length === 0) {
  //     return <div>use buttons</div>;
  //   } else {
  //     return <div>buttoun history : {props.allClick.join(" ")}</div>;
  //   }
  // };

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  );

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text={"good"} />
      <Button handleClick={handleNeutralClick} text={"netural"} />
      <Button handleClick={handleBadClick} text={"bad"} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
