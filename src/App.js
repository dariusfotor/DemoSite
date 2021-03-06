import React, { Component } from "react";
import "./style/style.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
