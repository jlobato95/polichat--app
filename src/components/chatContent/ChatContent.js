import React, { Component, createRef, } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQF9RpB5xp-Liw/profile-displayphoto-shrink_200_200/0/1654006441436?e=1664409600&v=beta&t=4ymDR82HiRRVQ6TvBQ0HkBZw-EkQeX54k3nVGCO9-X4",
      type: "",
      msg: "Olá, tudo bem?",
    },
    {
      key: 2,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFChE1sYnTYxw/profile-displayphoto-shrink_200_200/0/1654026281146?e=1664409600&v=beta&t=aDTltxPZ8mDRh9WMuvqSIavLStgQG9L_4dS-bl6-nEk",
      type: "other",
      msg: "Estou bem.",
    },
    {
      key: 3,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFChE1sYnTYxw/profile-displayphoto-shrink_200_200/0/1654026281146?e=1664409600&v=beta&t=aDTltxPZ8mDRh9WMuvqSIavLStgQG9L_4dS-bl6-nEk",
      type: "other",
      msg: "E você como está?",
    },
    {
      key: 4,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQF9RpB5xp-Liw/profile-displayphoto-shrink_200_200/0/1654006441436?e=1664409600&v=beta&t=4ymDR82HiRRVQ6TvBQ0HkBZw-EkQeX54k3nVGCO9-X4",
      type: "",
      msg: "Estou bem também.",
    },
    {
      key: 5,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFChE1sYnTYxw/profile-displayphoto-shrink_200_200/0/1654026281146?e=1664409600&v=beta&t=aDTltxPZ8mDRh9WMuvqSIavLStgQG9L_4dS-bl6-nEk",
      type: "other",
      msg: "Que bom! Está confiante com o processo seletivo da Poli?",
    },
    {
      key: 6,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQF9RpB5xp-Liw/profile-displayphoto-shrink_200_200/0/1654006441436?e=1664409600&v=beta&t=4ymDR82HiRRVQ6TvBQ0HkBZw-EkQeX54k3nVGCO9-X4",
      type: "",
      msg: "Sim, estou muito ansioso para saber do resultado. Seria um prazer enorme entrar para a equipe.",
    },
    {
      key: 7,
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFChE1sYnTYxw/profile-displayphoto-shrink_200_200/0/1654026281146?e=1664409600&v=beta&t=aDTltxPZ8mDRh9WMuvqSIavLStgQG9L_4dS-bl6-nEk",
      type: "other",
      msg: "Boa sorte! Você tem potencial.",
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
      if (e.keyCode === 13) {
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://media-exp1.licdn.com/dms/image/C4D03AQF9RpB5xp-Liw/profile-displayphoto-shrink_200_200/0/1654006441436?e=1664409600&v=beta&t=4ymDR82HiRRVQ6TvBQ0HkBZw-EkQeX54k3nVGCO9-X4",
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
                image="https://media-exp1.licdn.com/dms/image/C4D03AQFChE1sYnTYxw/profile-displayphoto-shrink_200_200/0/1654026281146?e=1664409600&v=beta&t=aDTltxPZ8mDRh9WMuvqSIavLStgQG9L_4dS-bl6-nEk"
              />
              <p>Alberto Filho</p>
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
              placeholder="Aa"
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
