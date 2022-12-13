import "../styles/Popup.css";
import Popup2 from "./Popup2";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
function SubmitBtn(prod) {
  const [buttonCoPopup, setButtonCoPopup] = useState(false);

  console.log('%');
  return (
    <Container>
      <div>
      <Button
            variant="dark"
            onClick={(event) => setButtonCoPopup(true)}
          >
            Pay Now
        </Button>
      </div>
      <div>
        <Popup2
          class="checkout_popup"
          trigger={buttonCoPopup}
          setTrigger={setButtonCoPopup}
        >
          <div className="CheckOutForm">
            <label className="check_out_form_1">
              <u>Description:</u>&nbsp;{'hi'}
            </label>
            <br></br>
            <label className="Product_description"><u>Description A:</u>&nbsp;{'hi'}</label>
            <br></br>
              <div>
        {/* <input type="text" placeholder="new email" name="new_email" id="new_email" required> </input> */}
          </div>
            <br></br>
            <br></br>
            <label className="Product_store">
              <u>Where to buy :</u>&nbsp;{'ho'}
            </label>
          </div>
        </Popup2>
      </div>
      </Container>

    
  );  
}

export default SubmitBtn;

