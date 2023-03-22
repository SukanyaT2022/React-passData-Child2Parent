import logo from './logo.svg';
import './App.css';
import App1 from './App1.js';
import App2 from './App2';

function App() {
  const greet = "Hello"
  const country = "Babados"
  return (
    <div className="App">
      <p>Welcome!</p>
      <App1 child2 = {country}/>
      <App2 childName = {greet}/>
    </div>
  );
}

export default App;
