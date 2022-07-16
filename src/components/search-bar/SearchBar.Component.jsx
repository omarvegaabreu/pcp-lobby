import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        className={this.props.className}
        placeholder={this.props.placeholder}
        onChange={this.props.onInputChangeHandler}
      />
    );
  }
}

export default SearchBar;
