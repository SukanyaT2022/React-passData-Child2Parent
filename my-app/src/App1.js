function App1(props) {
  const passData = () => {
    props.childButton('Name');
  };

  return (
    <div>
      <p>{props.child2}</p>
      <button onClick={() => passData()}> Click me alert</button>
    </div>
  );
}

export default App1;
