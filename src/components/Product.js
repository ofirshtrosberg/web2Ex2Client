import "../styles/ProductInfo.css";
import "../styles/Popup.css";

import "../pages/ProductInfo";
import Popup from "./Popup";
import {useState } from "react";

function Product(prod) {
  const [buttonPopup, setButtonPopup] = useState(false);
  // console.log(this);
  return (
    <div className="Product">
      <div className="ProductDetailsDiv">
        <label className="Product_name "> {prod.title} </label>
        <br></br>
        <label className="Product_price">Price: {prod.price} $</label>
      </div>
      <div className="shoe-desc__actions">
        <button id="my_btn" onClick={(event, prod) => setButtonPopup(true)}>
          Description
        </button>
      </div>

      <div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} item={prod}>
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
      <img src={prod.imgsrc1} className="Product_image" alt="" />
    </div>
  );
}
export default Product;
