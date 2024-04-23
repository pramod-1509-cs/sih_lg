import React, { useState, useEffect } from "react";
import "./Home.css";
import Popup from "./Popup";

import game1 from "../assets/gm_logo.png";
import game2 from "../assets/com_img.png";
import game3 from "../assets/quiz_img3.png";
import game4 from "../assets/lapbook.png";
import FeedbackForm from "./FeedbackForm";
import { Link } from "react-router-dom";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Define the scroll threshold at which you want to show the pop-up
      const scrollThreshold = 130; // Adjust this value as needed

      if (window.scrollY > 130) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="home-container">
      <section className="epic-section">
        <div className="content">{/* banner */}</div>
      </section>
      <Popup isVisible={showPopup} />
      <section className="section section2">
        <div className="content">
          <div className="card card1">
            <h1>Games</h1>

            {/* <a href="http://127.0.0.1:5500/client/interactive-play/index.html"><img src={game1} alt="" /></a> */}
            <Link to="/register2" className="click">
              <img src={game1} alt="" />
            </Link>
          </div>
          <div className="card card2">
            <h1>Quizes</h1>
            <Link to="/quiz-app" className="click">
              <img src={game3} alt="" />
            </Link>
          </div>
          {/* <div className="card card3">
            <h1>Community</h1>
            <Link to="/community" className="click">
              <img src={game2} alt="" />
            </Link>
          </div> */}
          <div className="card card4">
            <h1>Modules</h1>
            <Link to="/dashboard" className="click">
              <img src={game4} alt="" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
