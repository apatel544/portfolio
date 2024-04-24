import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <section id="home">
      <div className="home">
        <div className="about">
          <h2>Hello, My name is Ankur Patel</h2>
          <div className="prompt">
            <p>I am a Software Developer who loves to learn and create new things!</p>
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
    </section>
  );
}
