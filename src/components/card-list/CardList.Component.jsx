import React from "react";
import { Card, Image, CardGroup } from "semantic-ui-react";
import "./card-list-component.css";

class CardList extends React.Component {
  render() {
    const { filteredPatient, patientPicture } = this.props;
    const zipper = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
    const twoArrays = zipper(filteredPatient, patientPicture);

    const cardGroup = twoArrays.map((items) => {
      return (
        <Card key={Math.random()} className="card-list">
          <Card>
            <Image src={items[1]} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{items[0].name}</Card.Header>
            </Card.Content>
          </Card>
        </Card>
      );
    });
    return <CardGroup className="card-container">{cardGroup}</CardGroup>;
  }
}

export default CardList;
