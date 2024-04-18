import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Ishaan's Local favourites" />
      <h1 className="app__header-h1">Fine Dine across Time</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
      My mission is simple: to help you explore and savor the diverse culinary offerings 
      that your community has to offer. Whether you're craving authentic ethnic cuisine, 
      farm-to-table fare, or cozy neighborhood bistros, I've got you covered.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
