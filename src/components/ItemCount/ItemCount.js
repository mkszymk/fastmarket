import React from "react";
import "./ItemCount.css";
import { useState, useEffect } from "react";

function ItemCount({ stock, quantity, setQuantity }) {
  const [btnAddState, setBtnAddState] = useState("btnDisabled");
  const [btnSubState, setBtnSubState] = useState("btnDisabled");

  const onAdd = () => {
    if (quantity === stock) {
      return;
    } else {
      setQuantity(quantity + 1);
    }
  };

  const onSubtract = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    if (quantity === stock) {
      setBtnAddState("btnDisabled");
    } else {
      setBtnAddState("btnEnabled");
    }
  }, [quantity]);

  useEffect(() => {
    if (quantity === 1) {
      setBtnSubState("btnDisabled");
    } else {
      setBtnSubState("btnEnabled");
    }
  }, [quantity]);

  return (
    <div className="itemCounterContainer">
      <button onClick={onSubtract} className={"counterBtn " + btnSubState}>
        -
      </button>
      <div className="quantityNumber">{quantity}</div>
      <button onClick={onAdd} className={"counterBtn " + btnAddState}>
        +
      </button>
    </div>
  );
}

export default ItemCount;
