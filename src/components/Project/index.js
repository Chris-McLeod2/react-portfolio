import React from 'react';
import Card from 'react-bootstrap/Card';

// Export a card for displaying projects, for portfolio page/other uses
export default function Project(props) {
  return (
    <Card className="mb-3">
      <Card.Header className="pHeader">
        <h4>{props.name}</h4>
      </Card.Header>
      <Card.Img src={props.src} alt={props.alt} />
      <Card.Footer>
        <Card.Link href={props.git}> Repository</Card.Link>
        <Card.Link href={props.live}>Live</Card.Link>
      </Card.Footer>
    </Card>
  );
}