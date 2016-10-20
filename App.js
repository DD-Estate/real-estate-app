//first generic component to test of all overhead is running smoothly
import React from 'react';
import SearchBar from './searchBarContainer.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <SearchBar />
      </div>
    )
  }
}

export default App;
