import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/138198907_190920709432821_6022873722917941854_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeH_BLBIaSLBgLH0GDV2vKIBjaCOH_BqXlGNoI4f8GpeUaIi2MjGgKcgmwpBRAUXiGIpXln0JqKfMjkBiADH0Xn3&_nc_ohc=1sb4ltokhw8AX-kvYhr&_nc_ht=scontent.falg3-2.fna&oh=4fa4d6dfa5c79ca1db781d884386d605&oe=606912E6" />
          </div>
          <h4>Arezki Takfarinas Hamidani</h4>
          <p>Full Stack Developer</p>
          <p>Software Engineer</p>
          <p>Data Mining Engineer</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}
