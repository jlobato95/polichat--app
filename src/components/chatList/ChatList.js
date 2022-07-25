import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFChE1sYnTYxw/profile-displayphoto-shrink_200_200/0/1654026281146?e=1664409600&v=beta&t=aDTltxPZ8mDRh9WMuvqSIavLStgQG9L_4dS-bl6-nEk",
      id: 1,
      name: "Alberto Filho",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFDdLvnuxFrBQ/profile-displayphoto-shrink_200_200/0/1654785047688?e=1664409600&v=beta&t=Wj9TmrN94_aepwbdyK7WwE_fJE-yU3Eqjz-W6W8bwmg",
      id: 2,
      name: "GH",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQEugXYBvpzq5w/profile-displayphoto-shrink_200_200/0/1654622119112?e=1664409600&v=beta&t=GB65jyYrTOrOE5X753ww2xa07ANHBkhWCy39W3DCR8I",
      id: 3,
      name: "Mariana Magre",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQF_S4QTC7CC4g/profile-displayphoto-shrink_200_200/0/1655222128248?e=1664409600&v=beta&t=Je6IO25ENNqmLWCQN32eXkT0dweihBc_bGF4X1FTLHo",
      id: 4,
      name: "Vitor Alves",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQG-2M5q2Jw83g/profile-displayphoto-shrink_200_200/0/1626812614059?e=1664409600&v=beta&t=qbNT60eCLsBBXzIQNDbrfZ9EEOXUNlO5d1GFvAcdQ0M",
      id: 5,
      name: "Celso Brandão",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQF51jYnVePgDA/profile-displayphoto-shrink_200_200/0/1638406494329?e=1664409600&v=beta&t=jUnHAf_xTxVDDwL4LxPdWcLWgaBFZsYPKbK8Mi_DyXk",
      id: 6,
      name: "Thiago Cunha",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQGXKXmFTDYjbA/profile-displayphoto-shrink_200_200/0/1655819359998?e=1664409600&v=beta&t=RS2Lok5_soXFuDM90y8aMEUnZrdEqxNPX3o5vMdyHJw",
      id: 7,
      name: "Julio Vieira",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/20171114_AUT_URU_4590.jpg/210px-20171114_AUT_URU_4590.jpg",
      id: 8,
      name: "Giorgian de Arrascaeta",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://i.pinimg.com/originals/16/25/cb/1625cbda4ed5cdfc9156922767faaf51.png",
      id: 9,
      name: "Pedro Guilherme",
      active: false,
      isOnline: true,
    },
    {
      image: "https://www.futcards.com.br/wp-content/uploads/2018/10/gabriel-barbosa-gabigol-flamengo.jpg",
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
