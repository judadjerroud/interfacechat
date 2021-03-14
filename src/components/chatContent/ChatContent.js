import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "../chatContent/ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/157566070_722864165079396_4810073822200723833_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeF2mQSTR7Rw5cxH4_WJyW4YSJl7-shyryJImXv6yHKvIu7BB1YLyxZj-FFBiZswByatJ8DpgOOwuSVSZes7rvG0&_nc_ohc=eTs7Xz0OwUkAX-FAwzF&_nc_ht=scontent.falg3-2.fna&oh=e446259978cc0c1ef1e756305c4a7bf1&oe=60677BE2",
      type: "",
      msg: "Azul Takfa, comment vas-tu ?",
    },
    {
      key: 2,
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/138198907_190920709432821_6022873722917941854_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeH_BLBIaSLBgLH0GDV2vKIBjaCOH_BqXlGNoI4f8GpeUaIi2MjGgKcgmwpBRAUXiGIpXln0JqKfMjkBiADH0Xn3&_nc_ohc=1sb4ltokhw8AX-kvYhr&_nc_ht=scontent.falg3-2.fna&oh=4fa4d6dfa5c79ca1db781d884386d605&oe=606912E6",
      type: "other",
      msg: "Bonsoir l'ami, je vais bien, merci et toi ?",
    },
    {
      key: 3,
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/138198907_190920709432821_6022873722917941854_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeH_BLBIaSLBgLH0GDV2vKIBjaCOH_BqXlGNoI4f8GpeUaIi2MjGgKcgmwpBRAUXiGIpXln0JqKfMjkBiADH0Xn3&_nc_ohc=1sb4ltokhw8AX-kvYhr&_nc_ht=scontent.falg3-2.fna&oh=4fa4d6dfa5c79ca1db781d884386d605&oe=606912E6",
      type: "other",
      msg: "Oui oui, ça peut toujours aller. Tu t'en sors comment avec les examens ?",
    },
    {
      key: 4,
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/157566070_722864165079396_4810073822200723833_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeF2mQSTR7Rw5cxH4_WJyW4YSJl7-shyryJImXv6yHKvIu7BB1YLyxZj-FFBiZswByatJ8DpgOOwuSVSZes7rvG0&_nc_ohc=eTs7Xz0OwUkAX-FAwzF&_nc_ht=scontent.falg3-2.fna&oh=e446259978cc0c1ef1e756305c4a7bf1&oe=60677BE2",
      type: "",
      msg: "Pas très bien cette fois-ci, vu la pression qu'il y a, je ne parviens plus à gérer.",
    },
    {
      key: 5,
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/138198907_190920709432821_6022873722917941854_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeH_BLBIaSLBgLH0GDV2vKIBjaCOH_BqXlGNoI4f8GpeUaIi2MjGgKcgmwpBRAUXiGIpXln0JqKfMjkBiADH0Xn3&_nc_ohc=1sb4ltokhw8AX-kvYhr&_nc_ht=scontent.falg3-2.fna&oh=4fa4d6dfa5c79ca1db781d884386d605&oe=606912E6",
      type: "other",
      msg: "Je suis du même avis que toi, crois-moi.",
    },
    {
      key: 6,
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/157566070_722864165079396_4810073822200723833_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeF2mQSTR7Rw5cxH4_WJyW4YSJl7-shyryJImXv6yHKvIu7BB1YLyxZj-FFBiZswByatJ8DpgOOwuSVSZes7rvG0&_nc_ohc=eTs7Xz0OwUkAX-FAwzF&_nc_ht=scontent.falg3-2.fna&oh=e446259978cc0c1ef1e756305c4a7bf1&oe=60677BE2",
      type: "",
      msg: "Mdrr, mercii de compatir alors",
    },
    {
      key: 7,
      image:
        "https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/138198907_190920709432821_6022873722917941854_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeH_BLBIaSLBgLH0GDV2vKIBjaCOH_BqXlGNoI4f8GpeUaIi2MjGgKcgmwpBRAUXiGIpXln0JqKfMjkBiADH0Xn3&_nc_ohc=1sb4ltokhw8AX-kvYhr&_nc_ht=scontent.falg3-2.fna&oh=4fa4d6dfa5c79ca1db781d884386d605&oe=606912E6",
      type: "other",
      msg: "Que faire d'autre, hhh c'est le moins que je puisse faire.",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/157566070_722864165079396_4810073822200723833_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeF2mQSTR7Rw5cxH4_WJyW4YSJl7-shyryJImXv6yHKvIu7BB1YLyxZj-FFBiZswByatJ8DpgOOwuSVSZes7rvG0&_nc_ohc=eTs7Xz0OwUkAX-FAwzF&_nc_ht=scontent.falg3-2.fna&oh=e446259978cc0c1ef1e756305c4a7bf1&oe=60677BE2",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://scontent.falg3-2.fna.fbcdn.net/v/t1.15752-9/138198907_190920709432821_6022873722917941854_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeH_BLBIaSLBgLH0GDV2vKIBjaCOH_BqXlGNoI4f8GpeUaIi2MjGgKcgmwpBRAUXiGIpXln0JqKfMjkBiADH0Xn3&_nc_ohc=1sb4ltokhw8AX-kvYhr&_nc_ht=scontent.falg3-2.fna&oh=4fa4d6dfa5c79ca1db781d884386d605&oe=606912E6"
              />
              <p>Arezki Takfarinas Hamidani</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Ecrivez votre message ici"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
