// import { useState } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface propsComp {
  title: string;
  id: number;
  key: number;
  image: string;
  description: string;
  setId: any;
}

const SingleArtilce = (props: propsComp) => {
  return (
    <>
      <Col xs={12}>
        <Card>
          <Card.Img variant="top" src={props.image} className="w-100" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="text-length">{props.description}</Card.Text>
            <Button onClick={() => props.setId(props.id)} variant="primary">
              Dettagli
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleArtilce;
