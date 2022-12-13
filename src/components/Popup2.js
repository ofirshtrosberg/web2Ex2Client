import React from "react";
import { Button } from "react-bootstrap";

function Popup2(props){
    return (props.trigger) ? (
        <div className="popup text-center">
            <div className="popup-inner">
                <Button className="close-btn btn-light" onClick={() => props.setTrigger(false)}> Close</Button>
                <div className="ProductInfo">
                
      <br></br>

    <form action="/action_page.php" class="form-container">
        <h1>Payment Info</h1>

        <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
            <br></br>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
            <br></br>

            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>
            <br></br>

            <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
                <br></br>

                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"></input>

    {/* <div class="row"> */}
          {/* <div class="col-50">
            <h3>Billing Address</h3>
            <br></br>

            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <br></br>

            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
            <br></br>

            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <br></br>

            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
            <br></br>

            <label for="city"><i class="fa fa-institution"></i> City</label>
            <br></br>

            <input type="text" id="city" name="city" placeholder="New York"></input>
        </div>
    </div> */}

    {/* <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label></input>
                <input type="text" id="cvv" name="cvv" placeholder="352"></input>
              </div>
        </div>   */}
    </form>


    </div>

      <br></br>
      <br></br>
    </div>

            </div>
    ): "";
}

export default Popup2;