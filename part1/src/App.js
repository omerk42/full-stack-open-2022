const Header = (prop) => {
  return (
    <div className="header">
      <h1>{prop.course}</h1>
    </div>
  );
};

function Content(prop) {
  const obj = prop.object;
  return obj.map((ob) => (
    <part id={ob.name}>
      {ob.name} {ob.exe}
    </part>
  ));
}

function Total(prop) {
  let a = 0;
  const obj = prop.object;
  obj.map((ob) => (a = ob.exe + a));
  return <p>Number of exercises {a}</p>;
}

const App = () => {
  const course = "Half Stack application development";
  const object = [
    { name: "Fundamentals of React", exe: 10 },
    { name: "Using props to pass data", exe: 7 },
    { name: "State of a component", exe: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content object={object} />
      <Total object={object} />
    </div>
  );
};

export default App;
