function App4(props) {
  //below 4 line is pass data fron child to parent need function
  const childData = () => {
    props.parentChildData('HI, I,m child component');
  };
  childData();

  return (
    <div>
      <p>{props.add1}</p>
      <p>{props.add2}</p>
      <p>{props.add3}</p>
    </div>
  );
}

export default App4;
