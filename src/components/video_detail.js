import React from 'react';

const VideoDetail = ({ video }) => {
  // Check if video is undefined or null
  if (!video) {
    return <div>Loading...</div>;
  }

  // To make code pause at certain point in program use line below
  // debugger;

  const videoId = video.id.videoId;
  // Use ` (type by alt+96) instead of single quote to use below syntax which make typing conplex string easier
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
