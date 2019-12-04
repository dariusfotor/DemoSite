import React, { Component } from "react";
import "../style/style.css";

export class header extends Component {
  render() {
    return (
      <header>
        <nav className="upper_container">
          <ul className="upper">
            <li>
              <a href="#">MENU</a>
            </li>
            <li>
              <a href="#">SOME TEXT</a>
            </li>
            <li>
              <a href="#">ANOTHER ITEM</a>
            </li>
            <li>
              <a href="#">ONE MORE</a>
            </li>
            <li>
              <a href="#" className="and_last_one">
                AND LAST ONE
              </a>
            </li>
          </ul>
        </nav>
        <div className="below_container">
          <div className="logo">
            <strong>DEMO</strong>
            <span>Site</span>
          </div>
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
      </header>
    );
  }
}

export default header;
