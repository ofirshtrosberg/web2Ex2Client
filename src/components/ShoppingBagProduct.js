import "../styles/Popup.css";

import Popup from "./Popup";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
function ShoppingBagProduct(prod) {
  const [buttonPopup, setButtonPopup] = useState(false);
  // console.log(this);
  return (
    <Container>
      <Card style={{ width: "18rem" }} className="text-center">
        <Card.Img variant="top" height={180} src={prod.imgsrc1} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>{prod.price}$</Card.Text>
          <Button
            variant="dark"
            onClick={(event, prod) => setButtonPopup(true)}
          >
            Description
          </Button>
        </Card.Body>
      </Card>
      <div>
        <Popup
          class="product_details_popup"
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          item={prod}
        >
          <div className="ProductInfo">
            <label className="Product_description">
              <u>Description:</u>&nbsp;{prod.description}
            </label>
            <br></br>
            <br></br>
            <img src={prod.imgsrc2} alt="" className="ImgProductInfo"></img>
            <br></br>
            <br></br>
            <label className="Product_store">
              <u>Where to buy :</u>&nbsp;{prod.store}
            </label>
          </div>
        </Popup>
      </div>
    </Container>
  );
}
export default ShoppingBagProduct;
