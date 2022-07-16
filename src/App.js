import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    console.log("constructor");
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
    console.log("componentDidMount");
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

    console.log(filteredPatient);
    console.log("render");
    return (
      <div className="App">
        <input
          type="text"
          className="patients"
          placeholder="Search patients"
          onChange={onInputChange}
        />
        {filteredPatient.map((search) => {
          return <h1 key={search.id}>{search.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
