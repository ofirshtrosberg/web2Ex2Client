import { useParams } from "react-router-dom";
import "../styles/ProductInfo.css";

function ProductInfo(products) {
  // need to send the item to this function in order to use the description
  let params = useParams();
  var item = "";
  for (let i = 0; i < products.products.length; i++) {
    if (products.products[i].id === params.id) {
      item = products.products[i];
    }
  }
  return (
    <div className="ProductInfo">
      <label className="Product_description"><u>Description:</u>&nbsp;{item.description}</label>
      <br></br>
      <br></br>
      <img src={item.imgsrc2} alt="" className="ImgProductInfo"></img>
      <br></br>
      <br></br>
      <label className="Product_store"><u>Where to buy :</u>&nbsp;{item.store}</label>
    </div>
  );
}

export default ProductInfo;
