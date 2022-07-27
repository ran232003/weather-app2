import React from "react";
import "./Headline.css";
const Headline = (props) => {
  const { lable } = props;

  return <h4 className="head">{lable}</h4>;
};
export default Headline;
