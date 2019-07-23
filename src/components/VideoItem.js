import React, { Component } from "react";

export default class VideoItem extends Component {
  render() {
    const { video } = this.props;
    return <div>{video.snippet.title}</div>;
  }
}
