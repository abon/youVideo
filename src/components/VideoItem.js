import React, { Component } from "react";
import "../css/VideoItem.css";

export default class VideoItem extends Component {
  render() {
    const { video, onVideoSelect } = this.props;
    return (
      <div className=" video-item item " onClick={() => onVideoSelect(video)}>
        <img
          className="ui image"
          key={video.id.videoId}
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}
