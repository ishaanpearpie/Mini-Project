import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const galleryImages = [
  { image: images.gallery01, description: "Zaitoon - Costly but definetly a must have ~Manoj" },  
  { image: images.gallery02, description: "Egg Paradise - Cheap and tasty. Ideal for students." },
  { image: images.gallery03, description: "Sushi House - Bold Choice. Not for Everyone. ~Anonymous" },
  { image: images.gallery04, description: "Ramen Club. - Fancy Resturants and well Behaved staff. ~Ishaan" },
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Local bites" />
        <h1 className="headtext__cormorant">Restaurants Reviews</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Here are the restaurants in the locality that are worth visiting.
        </p>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((item, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={item.image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
              <p className="image-description">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("Right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
