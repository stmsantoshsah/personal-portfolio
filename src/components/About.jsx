import React from "react";
import "../scss/Global.scss";
import workingImage from "../assets/images/working-emoji.png";
import aboutImage from "../assets/images/about-img.webp";
import textImage from "../assets/images/text.svg";

const About = () => {
  return (
    <section className="about  spacing_top spacing_bottom" id="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img src={workingImage} alt="emoji" className="work-emoji" />
            <img src={aboutImage} alt="me" className="img-side__main-img" />
            <span>
              <img src={textImage} alt="text" />
            </span>
          </div>
          <div className="text-side">
            <h3 className="section-title ">About me</h3>
            <h2 className="section-subtitle">A dedicated Front-end Developer <br /> based in Chandigarh, India📍</h2>

            <p>
              As a Junior Front-End Developer, I have strong skills in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>TypeScript</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>SCSS</strong>. I enjoy turning design ideas into interactive, smooth websites that work well across all devices.
            </p>
            <p>
              My goal is to write efficient, maintainable code and use the latest technologies to build fast, accessible, and engaging web applications. I am always excited to learn new tools and techniques to improve my development process.
            </p>
            <p>
              I believe in collaborating closely with teams to bring ideas to life and ensure the best user experience. Whether it’s designing new features or fixing bugs, I stay focused on delivering high-quality results.
            </p>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
