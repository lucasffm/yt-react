import React from 'react';

const VideoDetail = ({ video }) => {
  const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoURL} title='video player' />
      </div>
      <div className='ui segment'>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
