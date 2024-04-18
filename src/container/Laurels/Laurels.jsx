
import React, { useState } from "react";
import { SubHeading } from "../../components";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <div className="app__laurels_awards-cards_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    switch (location.toLowerCase()) {
      case "bangalore":
        setResult('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77490448696!2d77.30125374670206!3d12.954459543640922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1708602866402!5m2!1sen!2sin" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
        break;
      case "delhi":
        setResult('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9582180143!2d76.76285214719164!3d28.64428567128618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1708621925255!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
        break;
      case "mumbai":
        setResult('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482633.04405187786!2d72.55079927533538!3d19.082605573829845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708621842894!5m2!1sen!2sin" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
        break;
      case "delhi":
        setResult('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9582180143!2d76.76285214719164!3d28.64428567128618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1708621925255!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
        break;

      default:
        setResult("Food is not yet available at your location");
    }
  }

  return (
    <div className="app__bg app__wrapper section__padding" id="award">
      <div className="app__wrapper_info">
        <SubHeading title="Restaurant in our Locality" />
        <h1 className="headtext__cormorant">Maps</h1><br></br>
        
        <div className="searchbox">
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" placeholder="Enter Location" />
          <button className="btn" onClick={handleSearch}>
              <h3>Search</h3>
          </button>
          <p id="result" dangerouslySetInnerHTML={{ __html: result }}></p>
        </div>
      </div>
    </div>
  );
};

export default Laurels;

