import React from "react";
import { Card, Icon, Image, Grid, CardGroup } from "semantic-ui-react";
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
            <Image
              src={items[1]}
              wrapped
              ui={false}
              size="tiny"
              width={250}
              height={250}
            />
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

// filteredPatient.map((search) => {
//   const { name, id, email } = search;
//   return (
//     <Card key={id} className="card-container">
//       <Card className="card-container">
//         <Image src={patientPicture} wrapped ui={false} />
//         <Card.Content>
//           <Card.Header>{name}</Card.Header>
//           <Card.Header>{email}</Card.Header>
//         </Card.Content>
//       </Card>
//     </Card>
//   );
// });
