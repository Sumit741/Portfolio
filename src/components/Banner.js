import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react/cjs/react.development";
import pp1 from "../images/p3.svg";
function Banner() {
  const [state] = React.useState({
    title: "I am Sumit Sunar",
    text: "I'm an enthusiast web developer since long time",
    image: pp1,
  });
  const [smLogo] = useState([
    {
      id: Math.random() * 20,
      logo: <FaFacebookF />,
    },
    {
      id: Math.random() * 20,
      logo: <FaTwitter />,
    },
    {
      id: Math.random() * 20,
      logo: <FaInstagram />,
    },
    {
      id: Math.random() * 20,
      logo: <FaPinterest />,
    },
    {
      id: Math.random() * 20,
      logo: <FaYoutube />,
    },
  ]);
  return (
    <div className="header" id="banner">
      <div className="row">
        <div className="header__section">
          <ul className="header__ul">
            {smLogo.map((logo) => {
              return <li key={logo.id}>{logo.logo}</li>;
            })}
          </ul>
          <h1 className="banner__header">{state.title}</h1>
          <p>{state.text}</p>
          <div className="header__buttons">
            <a
              href="https://drive.google.com/file/d/13e_maP-m5dGFsmnPx9cXoCOw4PFpf2ek/view?usp=sharing"
              target="__blank"
              className="btn btn-outline"
            >
              My Portfolio
            </a>
          </div>
        </div>
        <div className="banner__img">
          <img src={state.image} alt="pp" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
