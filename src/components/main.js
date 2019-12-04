import React, { Component } from "react";
import "../style/style.css";
import cafe from "../images/cafe.jpg";
import bruno from "../images/bruno.jpg";
import vandan from "../images/vandan.jpg";

export class main extends Component {
  render() {
    return (
      <div className="body">
        <div className="main_container">
          <div className="welcome">
            <h3>WELCOME</h3>
            <p className="welcome_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <button className="learnmore">LEARN MORE</button>
          </div>

          <div className="ux_container">
            <img src={cafe} alt="" />
            <div className="design">
              <h3>UI/UX DESIGN</h3>
              <p className="ux_design">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
              <p className="ux_design">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </div>
        </div>
        <h3 className="product_text">PRODUCTS</h3>
        <h4 className="offers_text">OFFERS TODAY</h4>
        <div className="sec_cont">
          <div className="weather">Sketis</div>
          <div className="offers_photo">
            <img src={bruno} alt="" />
            <img src={vandan} alt="" />
          </div>
        </div>
        <div className="contact_container">
          <div className="contact">
            <h3>CONTACT</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </div>
          <div className="form">
            <label>NAME</label>
            <input></input>
            <label>EMAIL</label>
            <input placeholder="test@test.lt"></input>
            <label>MESSAGE</label>
            <textarea></textarea>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default main;
