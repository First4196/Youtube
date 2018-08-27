import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: 'Hello' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    // Do not set state like this
    // this.state = { term }
    // React will not know state has been changed
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
