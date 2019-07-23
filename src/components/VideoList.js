import React, { Component } from "react";
import VideoItem from "./VideoItem";

export default class VideoList extends Component {
  render() {
    const { videos, onVideoSelect } = this.props;

    const renderedList = videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
          key={video.videoId}
        />
      );
    });

    return (
      <div className="ui relaxed divided list  ">
        <p>{renderedList}</p>
      </div>
    );
  }
}
