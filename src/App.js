import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      patients: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((patientApi) =>
        this.setState(
          () => {
            return { patients: patientApi };
          },
          () => console.log(this.state.patients)
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.patients.map((patient) => {
          return <h1 key={patient.id}>{patient.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
