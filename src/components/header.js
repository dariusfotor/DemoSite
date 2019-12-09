import React, { Component } from "react";
import "../style/style.css";

export class header extends Component {
  render() {
    return (
      <header>
        <div className="upper_container">
          <nav>
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
                <a href="#">AND LAST ONE</a>
              </li>
            </ul>
          </nav>
          <div></div>
        </div>
        <div className="below_container">
          <div className="logo">
            <strong>DEMO</strong>
            <span>Site</span>
          </div>
          <nav>
            <a className="menu_mob_button" href="#">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </a>
            <div className="navbar_links">
              <ul className="below">
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">SERVICE</a>
                </li>
                <li>
                  <a href="#">WORKS</a>
                  <ul class="sub_menu">
                    <li>ALL</li>
                    <li>GRAPHIC</li>
                    <li>DESIGN</li>
                    <li>LOGO</li>
                    <li>WEBSITE</li>
                  </ul>
                </li>
                <li>
                  <a href="#">ABOUT ME</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default header;
