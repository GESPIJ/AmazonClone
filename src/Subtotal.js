import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({basket.length} items) :{" "}
                <strong>{value + " $"}</strong>
              </p>
              <small className="subtotal__gift">
                <input type={"checkbox"} /> This order contain gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        prefix={"$"}
        displayType={"text"}
      />
      <button className="subtotal__button">Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
