import React from "react";
import { Button } from "react-bootstrap";

function Popup2(props) {
  const submitHandler = (event) => {
    console.log("#");

    event.preventDefault();

    const expenseData = {};

    fetch("http://localhost:3000/userProducts").catch((err) =>
      console.log(err)
    );
    window.location.reload();
  };

  return props.trigger ? (
    <div className="popup text-center">
      <div className="popup-inner">
        <Button
          className="close-btn btn-light"
          onClick={() => props.setTrigger(false)}
        >
          Close
        </Button>
        <div className="ProductInfo">
          <br></br>

          <form onSubmit={submitHandler}>
            <h1>Payment Info</h1>

            <label for="cname">Name on Card</label>
            <input
              type="text"
              id="cname"
              name="cardname"
              placeholder="John More Doe"
            ></input>
            <br></br>
            <label for="ccnum">Credit card number</label>
            <input
              type="text"
              id="ccnum"
              name="cardnumber"
              placeholder="1111-2222-3333-4444"
            ></input>
            <br></br>

            <label for="expmonth">Exp Month</label>
            <input
              type="text"
              id="expmonth"
              name="expmonth"
              placeholder="September"
            ></input>
            <br></br>

            <label for="expyear">Exp Year</label>
            <input
              type="text"
              id="expyear"
              name="expyear"
              placeholder="2018"
            ></input>
            <br></br>

            <label for="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="352"></input>

            <button type="submit" class="btn">
              Submit
            </button>
          </form>
        </div>

        <br></br>
        <br></br>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup2;
