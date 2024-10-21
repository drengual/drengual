import css from "../assets/css.png";
import figma from "../assets/figma.png";
import firebase from "../assets/firebase.png";
import gitwhite from "../assets/gitwhite.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import mui from "../assets/mui.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/node-js.png";
import react from "../assets/react.png";
import reactNative from "../assets/ReactNative.png";
import tailwind from "../assets/tailwind.png";
import ts from "../assets/ts.png";

const RighSideHeroSection = () => {
  return (
    <div>
      <div className="tech-stack-container">
        <img src={react} alt="React" className="logo react-logo " />
        <img src={js} alt="JavaScript" className="logo js-logo" />
        <img src={nodejs} alt="Node.js" className="logo node-logo" />
        <img src={css} alt="CSS" className="logo css-logo" />
        <img src={html} alt="HTML" className="logo html-logo" />
        <img src={tailwind} alt="Tailwind CSS" className="logo tailwind-logo" />
        <img src={mui} alt="Material UI" className="logo mui-logo" />
        <img src={firebase} alt="Firebase" className="logo firebase-logo" />
        <img src={mysql} alt="MySQL" className="logo mysql-logo" />
        <img src={gitwhite} alt="Git" className="logo git-logo" />
        <img src={figma} alt="Figma" className="logo figma-logo" />
        <img
          src={reactNative}
          alt="React Native"
          className="logo react-native-logo"
        />
        <img src={ts} alt="TypeScript" className="logo ts-logo" />
      </div>
    </div>
  );
};

export default RighSideHeroSection;
