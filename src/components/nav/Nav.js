import React, { Component } from "react";
import "./nav.css";
import logo from "./../../images/logoPoli.png";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__blocks">
          <img src={logo} alt=""></img>
        </div>
        <div className="nav__home">
        <i class="fa-solid fa-house"></i> </div>
        <div className="nav__comment">
        <i class="fa-solid fa-comment-dots"></i> </div>
        <div className="nav__graph">
        <i class="fa-solid fa-chart-pie"></i> </div>
        <div className="nav__building">
        <i class="fa-solid fa-building"></i> </div>
        <div className="nav__gear">
        <i class="fa-solid fa-gear"></i> </div>
        <div className="nav__currency">
        <i class="fa-solid fa-dollar-sign"></i> </div>
        <div className="nav__settings">
        <i class="fa-solid fa-wrench"></i> </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>
      </div>
    );
  }
}
