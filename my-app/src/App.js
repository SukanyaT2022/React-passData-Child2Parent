import logo from './logo.svg';
import './App.css';
import App1 from './App1.js';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';

function App() {
  const greet = "Hello"
  const country = "Babados"
  const continent = "Caribbean"
  const extraMessage ="Beautiful Beaches"
  const addMessage = "Dream destination !"
  const data1 = "Next"
  const data2 = "Fiji"
  const data3 = "Exotic Island"
  return (
    <div className="App">
      <p>Welcome!</p>
      <App1 child2 = {country}/>
      <App2 childName = {greet}/>
      <App3 
      child3 = {continent}
      extraChild = {extraMessage} 
      addMoreChild = {addMessage}
       />
       <App4 
       add1 = {data1}
       add2 = {data2}
       add3 = {data3}
       />  

  
    </div>
  );
}

export default App;
