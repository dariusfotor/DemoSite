import React, { Component } from "react";
import "../style/style.css";

export class footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer_container">
          <p className="footer_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
          <nav>
            <ul className="below">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">SERVICE</a>
              </li>
              <li>
                <a href="#">WORKS</a>
              </li>
              <li>
                <a href="#">ABOUT ME</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="copyright">
          <strong>DEMO</strong>
          <span>SITE Alright reserver </span>
        </div>
      </footer>
    );
  }
}

export default footer;
