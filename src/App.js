import React, { Component } from 'react';
import './App.scss';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='header-link'>Movie Search</div>
        </header>
        <main className='container'>
          <Search />
        </main>
      </div>
    );
  }
}

export default App;
