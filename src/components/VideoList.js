import React, { Component } from "react";
import VideoItem from "./VideoItem";

export default class VideoList extends Component {
  render() {
    const { videos } = this.props;

    const renderedList = videos.map(video => {
      return <VideoItem video={video} key={video.videoId} />;
    });

    return (
      <div>
        <p>{renderedList}</p>
      </div>
    );
  }
}
