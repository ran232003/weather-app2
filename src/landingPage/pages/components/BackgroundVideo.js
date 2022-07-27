import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./BackgroundVideo.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BackgroundVideo.css";
const BackgroundVideo = (props) => {
  const navigate = useNavigate();
  const goToSearch = () => {
    navigate("/search");
  };
  return (
    <div className="hero-container">
      <video src="videos/beach11.mp4" autoPlay loop muted />
      <h1>THE WEATHER APP</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" onClick={goToSearch}>
          GET STARTED
        </Button>

        <Button variant="light" className="btns">
          FAVORITES <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};
export default BackgroundVideo;
