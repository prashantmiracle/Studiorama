import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "antd";

function Item({ item }) {
  const dispatch = useDispatch();
  function addtoCart() {
    dispatch({ type: "addtoCart", payload: { ...item, quantity: 1 } });
  }
  return (
    <div className="item">
      <h4 className="name">{item.name}</h4>
      <img src={item.image} alt="" height="100" width="100" />
      <h4 className="price">
        <b />
        Price :{item.price} INR/-
      </h4>
      <div className="d-flex justify-content-end">
        <Button onClick={() => addtoCart()}>Add to cart</Button>
      </div>
    </div>
  );
}
export default Item;
