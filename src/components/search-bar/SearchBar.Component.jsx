import React from "react";

// import "./search-bar-styless.css";

class SearchBar extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        className={`search-bar ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={this.props.onInputChangeHandler}
      />
    );
  }
}

export default SearchBar;
