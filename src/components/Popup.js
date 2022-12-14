import React from "react";
import { Button } from "react-bootstrap";

function Popup1(props, item) {
  return props.trigger ? (
    <div className="popup text-center">
      <div className="popup-inner">
        <Button
          className="close-btn btn-light"
          onClick={() => props.setTrigger(false)}
        >
          {" "}
          Close
        </Button>
        <div className="ProductInfo">
          <label className="Product_description">
            <u>Description:</u>&nbsp;{props.item.description}
          </label>
          <br></br>
          <br></br>
          <img src={props.item.imgsrc2} alt="" className="ImgProductInfo"></img>
          <br></br>
          <br></br>
          <label className="Product_store">
            <u>Where to buy :</u>&nbsp;{props.item.store}
          </label>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup1;
