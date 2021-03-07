import React from "react";

function UserVideo({ user }) {
  const [videoTracks, setVideoTracks] = React.useState([]);
  const videoRef = React.useRef();

  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
      .map((publication) => publication.track)
      .filter((track) => track !== null);

  React.useEffect(() => {
    setVideoTracks(trackpubsToTracks(user.videoTracks));

    const trackSubscribed = (track) => {
      setVideoTracks([...videoTracks, track]);
    };

    const trackUnsubscribed = (track) => {
      setVideoTracks(videoTracks.filter((t) => t !== track));
    };

    user.on("trackSubscribed", trackSubscribed);
    user.on("trackUnsubscribed", trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      user.removeAllListeners();
    };
  }, [user]);

  React.useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  return (
    <div className="user">
      <h2 className="user-name">{user.identity}</h2>
      <video ref={videoRef} autoPlay={true} />
    </div>
  );
}

export default UserVideo;
