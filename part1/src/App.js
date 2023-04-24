const Header = (prop) => {
  return (
    <div className="header">
      <h1>{prop.course}</h1>
    </div>
  );
};

function Content(prop) {
  const obj = prop.parts;
  return obj.map((ob) => (
    <part id={ob.name}>
      {ob.name} {ob.exercises}
    </part>
  ));
}

function Total(prop) {
  let a = 0;
  const obj = prop.parts;
  obj.map((ob) => (a = ob.exercises + a));
  return <p>Number of exercises {a}</p>;
}

// const App = () => {
//   const course = "Half Stack application development";
//   const object = [
//     { name: "Fundamentals of React", exe: 10 },
//     { name: "Using props to pass data", exe: 7 },
//     { name: "State of a component", exe: 14 },
//   ];

//   return (
//     <div>
//       <Header course={course} />
//       <Content object={object} />
//       <Total object={object} />
//     </div>
//   );
// };

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
