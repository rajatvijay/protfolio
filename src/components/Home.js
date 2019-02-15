import React, { Component } from "react";
import { css } from "emotion";

class Home extends Component {
  render() {
    return (
      <div
        className={css`
          min-height: 100vh;
          background-color: salmon;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          className={css`
            text-align: center;
            color: #fff;

            p {
              font-size: 18px;
              font-weight: 500;
              margin: 0;
              margin-top: 8px;

              @media only screen and (max-width: 600px) {
                font-size: 16px;
                margin-top: 4px;
              }
            }
          `}
        >
          <img
            alt="Display"
            className={css`
              border-radius: 50%;
              border: 1px solid white;
              margin-bottom: 10px;
            `}
            src="https://res.cloudinary.com/rajatvijay/image/upload/c_fill,f_webp,fl_awebp,g_face,h_200,w_200/v1550258784/personal-dnr/professsion_photo.jpg"
          />
          <p>Hi! I am a Software Engineer.</p>
          <p>Specializing in react and with a love for open source</p>
          <a href="/" target="_blank">
            <img
              className={css`
                margin-right: 10px;
                margin-top: 15px;
              `}
              src="https://res.cloudinary.com/rajatvijay/image/upload/c_fill,f_auto,w_24/v1550260234/personal-dnr/002-github.svg"
              alt="github"
            />
          </a>
          <a href="/" target="_blank">
            <img
              src="https://res.cloudinary.com/rajatvijay/image/upload/c_fill,f_auto,w_24/v1550260234/personal-dnr/001-linkedin.svg"
              alt="linked-in"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
