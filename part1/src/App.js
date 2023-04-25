import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [allClick, setAll] = useState([]);
  const [total, setTotal] = useState(0);

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
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>netural {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
