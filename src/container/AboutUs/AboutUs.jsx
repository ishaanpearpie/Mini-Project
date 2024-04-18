import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        How do I do it? Ishaan a food enthusiast scours your neighborhoods far and wide,
        curating a handpicked selection of beloved eateries. 
        I believe that the heart and soul of a city can be found in its local restaurants, 
        and I'm here to help you uncover them.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Starting as a noobie student I was lost.My only passion was eating and coding.So with the help of
          my Web Development Teacher Dr.Arul Kumar I developed "Ishaan's LocalEats". The struggle was real.
          I'm thankfull to my mother Sarika Jain and father Amit Jain for always supporting me and my TRA sir 
          who I hope gives me full marks.
        </p>
        <button type="button" className="custom__button">
          Know Mores
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
