import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({
  id,
  title,
  image,
  price,
  rating,
  prime = false,
  coupon = { state: false },
}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //Add item to Basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>
            <i className={"product__icon__star product__star__" + rating}></i>
          </p>
          {/* {Array(rating)
            .fill()
            .map((_) => { */}
          {/* return <p>⭐</p>; */}
          {/* return (
                <p>
                  <i className="product__icon__star product__star__45" />
                </p>
              ); */}
          {/* })} */}
        </div>
        {prime && (
          <div className="product__primeIcon__container">
            <span>
              <i className="product__primeIcon"></i>
            </span>
          </div>
        )}
        {coupon?.state && (
          <div>
            <span>
              <span className="product__coupon__1">
                {"Save " + coupon.amount + "% "}
              </span>
              <span className="product__coupon__2">{" with coupon"}</span>
            </span>
          </div>
        )}
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
