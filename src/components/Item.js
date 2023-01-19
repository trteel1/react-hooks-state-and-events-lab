import React from "react";
import React, { useState } from "react";

function Item({ name, category }) {

  const [add, setAdd] = useState("");
  const [btnText, setBtnText] = useState("Add to Cart");

  function changeBtnText(){
    if (add==="") {
      setAdd("in-cart");
    }else{
      setAdd("");
    }

    const initialState = "Remove from cart";
    if (btnText === initialState) {
      setBtnText("Add to Cart");
    }else{
      setBtnText(initialState);
    }
  }

  return (
    <li className="">
    <li className={add}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
      <button className="add" onClick={changeBtnText}>{btnText}</button>
    </li>
  );
}
export default Item;
