import React, { useEffect } from "react";
import HomeCSS from "./Home.module.css";
import homePageArtWork from "../../assets/homeImage.svg";
function HomePage({ setView }) {
  //toggle the view on component mount so that back button on mobile devices work as intended
  useEffect(() => {
    setView(true);
  }, []);
  //padlock icon
  const styles = {
    fontVariationSettings: `FILL: 0, wght: 400, GRAD: 0, opsz: 24`,
  };

  return (
    <div className={HomeCSS.homePage}>
      <div className={HomeCSS.content}>
        <img src={homePageArtWork} />
        <h1>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>

      <footer className={HomeCSS.foot}>
        <span className={`${HomeCSS.symbol} material-symbols-outlined`}>
          lock
        </span>{" "}
        end-to-end encrypted
      </footer>
    </div>
  );
}

export default HomePage;
