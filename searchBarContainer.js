import React from 'react';
var randomCities = ['San Leandro', 'San Francisco', 'San Diego'];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autoSuggestion = this.autoSuggestion.bind(this);
  }

  autoSuggestion(event) {
    console.log('auto suggestion invoked');
  }

  render() {
    return (
      <input onChange={this.autoSuggestion}></input>
    )
  }
}

export default SearchBar;
