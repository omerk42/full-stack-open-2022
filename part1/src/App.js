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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <p>{course}</p>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
    </div>
  );
};

export default App;
