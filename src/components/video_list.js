import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        // Pass function onVideoSelect(video) for VideoListItem to be able to change state of App
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  // React use className instead of class to avoid confusion
  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
