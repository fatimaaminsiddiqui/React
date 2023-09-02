import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Counter from './components/Counter';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Counter></Counter>
      {/* <Greet name = "Bruce" heroName = "Batman">
      <p>This is children props</p>
      </Greet>
      <Greet name = "Clark" heroName = "Superman">
        <button>Action</button>
      </Greet>
      <Greet name = "Diana" heroName = "Wonder Woman"></Greet> */}
      {/* <Welcome /> */}
    </div>
  );
}
}
export default App;
