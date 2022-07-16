import React from "react";

class CardList extends React.Component {
  render() {
    const { filteredPatient } = this.props;

    return (
      <div>
        {filteredPatient.map((search) => {
          return <h1 key={search.id}>{search.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
