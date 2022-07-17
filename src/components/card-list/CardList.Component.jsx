import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class CardList extends React.Component {
  render() {
    const { filteredPatient } = this.props;
    console.log(filteredPatient);

    return filteredPatient.map((search) => {
      return (
        <Card>
          <Card>
            <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>{search.name}</Card.Header>
            </Card.Content>
          </Card>
        </Card>
      );
    });
  }
}

export default CardList;
