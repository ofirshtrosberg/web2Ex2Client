import "../styles/Popup.css";
import Popup from "./Popup";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
function ShoppingBagProduct(prod) {

  return (
    <Container>
      <Card style={{ width: "18rem" }} className="text-center">
        <Card.Img variant="top" height={180} src={prod.imgsrc1} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>{prod.price}$</Card.Text>
          {/* <Button
            variant="dark"
            onClick={(event) => setButtonCoPopup(true)}
          >
            Description
          </Button> */}
        </Card.Body>
      </Card>


    </Container>
    
  );
}

export default ShoppingBagProduct; 

