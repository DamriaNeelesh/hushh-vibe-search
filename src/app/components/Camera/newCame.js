"use client";
import { ReactMediaRecorder } from "react-media-recorder";
import { useEffect, useRef, useState } from 'react';

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (!stream) {
    return null;
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }}>
      Live Preview
      <video id="livePreview" ref={videoRef} width="390vw" autoPlay />
    </div>
  );
}

function liveStream(stream) {
  if (stream != null) {
    return <VideoPreview stream={stream} />;
  }
  return null;
}

function download(mediaBlobUrl) {
  if (mediaBlobUrl != null) {
    return (
      <a href={mediaBlobUrl} download="apoorv.mp4">
        <button id="mediaDownload">
          download
        </button>
      </a>
    );
  }
  return null;
}

function Dwn() {
  useEffect(() => {
    const a = document.getElementById("mediaDownload");
    if (a) {
      a.click();
    }
  }, []);
  return null;
}

function stopRecordingWrapper(fn) {
  fn();
}

function liveStreamWrapper(previewStream, fn, status) {
  if (status !== 'stopped') {
    return fn(previewStream);
  }
  return null;
}

function recordedVideo(mediaBlob, status) {
  if (status === 'stopped') {
    return <div>Recorded Video<p /><video width="390vw" src={mediaBlob} controls></video></div>;
  }
  return null;
}

function NewCam() {
  const [audioOnOff, setAudio] = useState(true);

  return (
    <div className="App">
      <ReactMediaRecorder
        video
        audio={audioOnOff}
        render={({ status, startRecording, stopRecording, mediaBlobUrl, previewStream }) => (
          <div className='App__mediaRecorderWrapper'>
            <div className='mediaRecorderWrapper__buttons'>
              <div>Status : {status}</div>
              <div>Keep Mic On: {'' + audioOnOff} </div>
              <button onClick={startRecording}>Start Recording</button>
              <button onClick={() => stopRecordingWrapper(stopRecording)}>Stop Recording</button>
              <button onClick={() => setAudio(!audioOnOff)}>Mic On or Off</button>
              {download(mediaBlobUrl)}
            </div>
            {recordedVideo(mediaBlobUrl, status)}
            {liveStreamWrapper(previewStream, liveStream, status)}
          </div>
        )}
      />
    </div>
  );
}

export default NewCam;