import React from "react";

function Popup(props, item){
    // console.log(item)
    // console.log(props.item)
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button  id="my_btn" className="close-btn" onClick={() => props.setTrigger(false)}> Close</button>
                <div className="ProductInfo">
                    
      <label className="Product_description"><u>Description:</u>&nbsp;{props.item.description}</label>
      <br></br>
      <br></br>
      <img src={props.item.imgsrc2} alt="" className="ImgProductInfo"></img>
      <br></br>
      <br></br>
      <label className="Product_store"><u>Where to buy :</u>&nbsp;{props.item.store}</label>
    </div>

            </div>
        </div>
    ): "";
}

export default Popup


