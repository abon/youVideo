import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";

const KEY = "AIzaSyBKAUIChascWqOf-FCowquDrZTVYSqn9g8";

export default class App extends Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY
      }
    });
    this.setState({ videos: res.data.items });
    console.log(res.data.items);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
