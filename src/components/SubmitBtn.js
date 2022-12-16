import "../styles/Popup.css";
import Popup2 from "./Popup2";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
function SubmitBtn(prod) {
  const [buttonCoPopup, setButtonCoPopup] = useState(false);

  console.log("%");
  return (
    <Container>
      <div>
        <Button variant="dark" className='pay_now_button' onClick={(event) => setButtonCoPopup(true)}>
          Pay Now
        </Button>
      </div>
      <div>
        <Popup2
          class="checkout_popup"
          trigger={buttonCoPopup}
          setTrigger={setButtonCoPopup}
        >
        </Popup2>
      </div>
    </Container>
  );
}

export default SubmitBtn;
