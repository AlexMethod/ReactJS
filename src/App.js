import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js';
import Hello from './components/Hello.js';
import Message from './components/Message.js';
import Counter from './components/Counter.js';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';


function App() {
  return (
    <div className="App">

      <ClassClick/>
      {/* <FunctionClick/> */}

      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <h1>This is a children of Greet</h1>
      </Greet>
      <Greet name= "Clark" heroName="Superman"/>
      <Greet name="Diana" heroName="Wonder woman"/>

      <Welcome name="Clark" heroName="Superman"/>
      <Hello/> */}
    </div>
  );
}

export default App;
