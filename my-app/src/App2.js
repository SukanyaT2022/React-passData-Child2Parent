function App2(props) {
  const clickHere = ()=> {
    props.ExtraChildButton('Welcome students')

  };

  return (
    <div>
    <button onClick={()=> clickHere()} >Click Me</button>
    </div>
  );
}

export default App2;
