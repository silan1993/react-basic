import React from 'react';
import './App.css';
import Person from './Person/Person'
function App() {
  return (
    <div className="App">
      <h1>Hi 1st react page</h1>
      <p>This is really works</p>
      <Person />
    </div>
  );
  //return React.createElement('div',{className:'App'},React.createElement('h1',null,'hi this is another way'))
}

export default App;
