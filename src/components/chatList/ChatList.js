import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
      id: 1,
      name: "Alberto Filho",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
      id: 2,
      name: "GH",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
      id: 3,
      name: "Mariana Magre",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
      id: 4,
      name: "Vitor Alves",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
      id: 5,
      name: "Celso Brandão",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
      id: 6,
      name: "Thiago Cunha",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
      id: 7,
      name: "Julio Vieira",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
      id: 8,
      name: "Giorgian de Arrascaeta",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
      id: 9,
      name: "Pedro Guilherme",
      active: false,
      isOnline: true,
    },
    {
      image: "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
      id: 10,
      name: "Gabriel Barbosa",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>POLICHAT</span>
        </button>
        <div className="chatlist__heading">
          <h2>Conversas</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Pesquisar" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
