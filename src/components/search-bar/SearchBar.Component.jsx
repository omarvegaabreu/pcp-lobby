import React from "react";
import { Input } from "semantic-ui-react";
// import "./search-bar-styless.css";

class SearchBar extends React.Component {
  render() {
    return (
      <Input
        type={this.props.type}
        className={`search-bar ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={this.props.onInputChangeHandler}
      />
    );
  }
}

export default SearchBar;
