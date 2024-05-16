import React from "react";
import "../styles/Home.css";
import { Email } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import myimage from "../images/aboutuspic.jpeg";

export default function Home() {
  return (
    <section id="home">
      <div className="home">
        <div className="intro">
          <h2>Hello, My name is Ankur Patel</h2>
          <div className="prompt">
            <p>I am a Software Developer who loves to learn and create new things!</p>
            <div className="socialmedia">
              {/* Todo: Change colors for text and social media icons - SP */}
              <a href="mailto:apatel9621@gmail.com" target="_blank" rel="noopener noreferrer"><Email /></a>
              <a href="https://github.com/apatel544" target="_blank" rel="noopener noreferrer"><GitHub /></a>
              <a href="https://www.linkedin.com/in/ankurpatel-1/" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
            </div>
          </div>
        </div>
        <div className="about">
          <h1>About Me</h1>
          <div className="row">
            <div className="col profile-pic"><img src={myimage} alt="" /></div>
            <div className="col description"><p>Hello, my name is Ankur Patel! I am an aspiring Full-Stack Developer who enjoys learning and solving problems around a web applications UI/UX. Coding is an exciting world that is everchanging and I feel that it is necessary to learn and grow my skills to stay relevant to the industry.</p></div>
          </div>

        </div>
        <div className="skills ">
          <h1> Skills</h1>
          <ol className="list">
            <li className="item">
              <h2>
                Front-End
              </h2>
              <span>ReactJS, HTML, CSS, Bootstrap</span>
            </li>
            <li className="item">
              <h2>
                Automation
              </h2>
              <span>SpecFlow, Gherkin, Cucucmber with Selenium</span>
            </li>
            <li className="item">
              <h2>
                Languages
              </h2>
              <span>JavaScript, HTML, CSS</span>
            </li>
          </ol>
        </div>
      </div>
    </section >
  );
}
