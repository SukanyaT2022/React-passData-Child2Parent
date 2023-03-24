import logo from './logo.svg';
import './App.css';
import App1 from './App1.js';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import { useState } from 'react';

function App() {
  const greet = 'Hello';
  const country = 'Babados';
  const continent = 'Caribbean';
  const extraMessage = 'Beautiful Beaches';
  const addMessage = 'Dream destination !';
  const data1 = 'Next';
  const data2 = 'Fiji';
  const data3 = 'Exotic Island';

  const note1 = "That's expensive trip";
  const note2 = 'Save Money!';
  const [pData, setpData] = useState('test'); //set for pass data app4 child to parent
  const [app4Data, setapp4Data] = useState('extra test');

  const parentData = (data) => {
    console.log(data);
    //pData = data;
    setpData(data);
  
  };

  const parentDataTwo = (dataTwo)=>{
    console.log(dataTwo);
    setapp4Data(dataTwo);
  }

  return (
    <div className="App">
      <p>
        Welcome! {pData} {app4Data}{' '}
      </p>
      <App1 child2={country} />
      <App2 childName={greet} />
      <App3
        child3={continent}
        extraChild={extraMessage}
        addMoreChild={addMessage}
      />
      <App4
        add1={data1}
        add2={data2}
        add3={data3}
        parentChildData={parentData}
      />

      <App5
        solution1={note1}
        solution2={note2}
        parentChildTwoData={parentDataTwo}
      />
    </div>
  );
}

export default App;
