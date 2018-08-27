import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    // Use function onVideoSelect(video) passed from App through VideoList to change state of App
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body" />
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </li>
  );
};

export default VideoListItem;
