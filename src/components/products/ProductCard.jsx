import React from "react";
import { BiDollar } from "react-icons/bi";

export default function ProductCard(props) {
  return (
    <div className="shadow m-2 p-3 ">
      <img src={props.image} alt="" width="200px" />
      <div className=" d-flex flex-column align-items-center justify-content-center">
        <h5 style={{ color: "#0a418e" }} className="h5 text-center">
          {props.name}
        </h5>
        <span className="m-0 p-2 h6">{props.brand}</span>
        <span>{props.description}</span>
        <div
          style={{ fontSize: "25px" }}
          className="d-flex align-items-center justify-content-center p-1"
        >
          <span className="text-secondary">{props.price} </span>
          <span className="text-secondary">
            <BiDollar />
          </span>
        </div>
      </div>
    </div>
  );
}
