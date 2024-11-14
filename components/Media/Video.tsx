import React from "react";

const Video = () => {
  return (
    <>
      <video width="1000" height="300" controls playsInline preload="auto" className="rounded-md shadow-sm shadow-lime-900">
        <source src="/ivents-our-story-video.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default Video;
