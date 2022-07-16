import React from "react";
import SearchBar from "./components/search-bar/SearchBar.Component";
import CardList from "./components/card-list/CardList.Component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      patients: [],
      searchField: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((patientsData) =>
        this.setState(() => {
          return { patients: patientsData };
        })
      );
  }

  onInputChange = (event) => {
    const searchString = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField: searchString };
    });
  };

  render() {
    const { patients, searchField } = this.state;
    const { onInputChange } = this;

    const filteredPatient = patients.filter((patient) => {
      return patient.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBar
          className="search-box"
          onInputChangeHandler={onInputChange}
          placeholder="Search Patients"
          type="text"
        />
        <CardList filteredPatient={filteredPatient} />
      </div>
    );
  }
}

export default App;
