import React, { Component } from "react";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";
import "./chatBody.css";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <ChatList />
        <ChatContent />
        <UserProfile />

      </div>
    );
  }
}
