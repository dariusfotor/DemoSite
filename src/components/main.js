import React, { Component } from "react";
import "../style/style.css";
import cafe from "../images/cafe.jpg";
import bruno from "../images/bruno.jpg";
import vandan from "../images/vandan.jpg";

export class main extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      conditionCode: null,
      picture: null
    };
  }

  componentDidMount() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "https://api.meteo.lt/v1/places/kaunas/forecasts/long-term";
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        const condition = data.forecastTimestamps[9].conditionCode;
        this.setState({ conditionCode: condition });
      })
      .catch(e => {
        console.log(e);
      });
  }

  weatherPic = () => {
    let info = this.state.conditionCode;
    console.log(info);
    switch (info) {
      case "clear":
      case "isolated clouds":
      case "scattered clouds":
      case "na":
        return <img src={require("../images/sunglasses.svg")} alt="" />;
      case "overcast":
      case "light-rain":
      case "moderate-rain":
      case "heavy-rain":
      case "fog":
        return <img src={require("../images/umbrella.svg")} alt="" />;
      case "sleet":
      case "light-snow":
      case "moderate-snow":
      case "heavy-snow":
        return <img src={require("../images/snowflake.svg")} alt="" />;
      default:
        return <img src={require("../images/sunglasses.svg")} alt="" />;
    }
  };

  render() {
    const image = this.weatherPic();
    console.log(this.state.conditionCode);

    return (
      <div className="body">
        <div className="main_container">
          <div className="welcome">
            <h3 className="with_border">WELCOME</h3>
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
        <div className="products_offers">
          <h3 className="product_text">PRODUCTS</h3>
          <h4 className="offers_text">OFFERS TODAY</h4>
        </div>
        <div className="sec_cont">
          <div className="weather">{image}</div>
          <div className="offers_photo">
            <div className="offer">
              <div className="offer_title">THE BEST COFFEE</div>
              <img src={bruno} alt="" />
            </div>
            <div className="offer">
              <div className="offer_title">TOP 100 BOOKS</div>
              <img src={vandan} alt="" />
            </div>
          </div>
        </div>
        <div className="contact_container">
          <div className="contact">
            <h3 className="with_border">CONTACT</h3>
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
