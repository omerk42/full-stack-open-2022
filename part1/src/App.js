function Content(prop) {
  const obj = prop.course.parts;
  let sum = 0;
  obj.map((ob) => (sum = ob.exercises + sum));
  const parts = obj.map((ob) => (
    <part id={ob.name}>
      {ob.name} {ob.exercises} &nbsp;
    </part>
  ));

  return (
    <>
      <div className="header">
        <h1>{prop.course.name}</h1>
      </div>
      <div className="content">{parts}</div>
      <div className="total">
        <p>{sum}</p>
      </div>
    </>
  );
}
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };
  return (
    <div>
      <Content course={course} />
    </div>
  );
};

export default App;
