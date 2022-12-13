import "../styles/Popup.css";
import Popup1 from "./Popup";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

function Product(prod) {
  const [buttonPopup, setButtonPopup] = useState(false);
  // console.log(this);
  return (
    <Container>
      <Card style={{ width: "18rem" }} className="text-center">
        <Card.Img
          height={180}
          src={prod.imgsrc1}
          onClick={(event, prod) => setButtonPopup(true)}
        />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>{prod.price}$</Card.Text>
          <Button claasName="m-2" variant="dark">
            Add to cart
          </Button>
        </Card.Body>
      </Card>
      <div>
        <Popup1
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
        </Popup1>
      </div>
    </Container>
  );
}
export default Product;
