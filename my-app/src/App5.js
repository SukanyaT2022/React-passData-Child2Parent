function App5(props) {
  const childTwoData = () => {
    props.parentChildTwoData('This is extra text child to parent');
  };
  childTwoData();
  return (
    <div>
      <p>{props.solution1}</p>
      <p>{props.solution2}</p>
    </div>
  );
}

export default App5;
