import React from 'react';
import NavBar from './components/NavBar.jsx';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="bl-app">
        <NavBar />
      </div>
    );
  }
}

export default App;
