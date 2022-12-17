import React from "react";
import { Button } from "react-bootstrap";
import "../styles/Popup2.css";

function Popup2(props) {
  const submitHandler = (event) => {
    var nameValue = document.getElementById("cname").value;
    console.log(nameValue);

    fetch("http://localhost:3000/addOrder", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_name: document.getElementById("cname").value,
        credit_card_number: document.getElementById("ccnum").value,
      }),
    });
    event.preventDefault();
    fetch("http://localhost:3000/userProducts").catch((err) =>
      console.log(err)
    );
    window.location.reload();
  };

  return props.trigger ? (
    <div className="popup text-center">
      <div className="popup-inner">
        <button
          type="submit"
          class="btn"
          className="payment_form_actions btn btn-light"
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        <div className="">
          <form onSubmit={submitHandler}>
            <div className="payment_form_controls">
              <div>
                <h2>Payment Info </h2>
              </div>
              <div className="payment_form_controls">
                <lable for="cname">Name on Card</lable>
                <br></br>
                <input
                  type="text"
                  id="cname"
                  name="cardname"
                  placeholder="John More Doe"
                ></input>
              </div>
              <div className="payment_form_controls">
                <label for="ccnum">Credit card number</label>
                <br></br>
                <input
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  placeholder="1111-2222-3333-4444"
                ></input>
              </div>
              <div className="payment_form_controls">
                <label for="expmonth">Exp Month</label>
                <br></br>
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                ></input>
              </div>
              <div className="payment_form_controls">
                <label for="expyear">Exp Year</label>
                <br></br>
                <input
                  type="text"
                  id="expyear"
                  name="expyear"
                  placeholder="2018"
                ></input>
              </div>
              <div className="payment_form_controls">
                <label for="cvv">CVV</label>
                <br></br>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="352"
                ></input>
              </div>
              <br></br>
              <div>
                <button
                  type="submit"
                  class="btn"
                  className="payment_form_actions btn btn-light"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup2;
