import React, { Component } from 'react';
import './App.scss';
import Search from './components/Search';
import Products from './containers/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='header-link'>Movie Search</div>
        </header>
        <main className='container'>
          <Search />
          <Products />
        </main>
      </div>
    );
  }
}

export default App;
