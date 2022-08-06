import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import Headline from "../../components/HeadeLine";
import "./WeatherCard.css";
const WeatherCard = (props) => {
  const { currentLocation, index } = props;
  let addingClass = typeof index === "undefined" ? "" : index;
  return (
    <div className={"weatherCard" + addingClass}>
      <Headline lable={currentLocation.date} />
      <Card style={{ width: "11rem" }}>
        <Card.Img variant="top" src="../weatherIcons/1.svg" />
        <Card.Body>
          <Card.Title>{currentLocation.city}</Card.Title>
          <Card.Text>
            <span>{currentLocation.temp}</span> <span>&#8451;</span>
            <br />
            <span>{currentLocation.text}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default WeatherCard;
