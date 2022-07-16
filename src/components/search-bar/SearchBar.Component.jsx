import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <input
        type="text"
        className="patients"
        placeholder="Search patients"
        onChange={this.props.onInputChangeHandler}
      />
    );
  }
}

export default SearchBar;
