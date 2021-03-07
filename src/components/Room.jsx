import React, { useState, useEffect } from "react";
import { connect } from "twilio-video";
import UserVideo from "./UserVideo";

function Room({ token, roomName, username, handleExit }) {
  const [room, setRoom] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userJoined = (user) => {
      setUsers([...users, user]);
    };
    const userLeft = (user) => {
      users.filter((u) => u !== user);
    };

    connect(token, {
      name: roomName,
    }).then((room) => {
      setRoom(room);
      room.on("participantConnected", userJoined);
      room.on("participantDisconnected", userLeft);
      room.participants.forEach(userJoined);
    });

    return () => {
      setRoom((currentRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === "connected") {
          currentRoom.localParticipant.tracks.forEach((trackPublication) => {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const remoteParticipants = users.map((u) => (
    <UserVideo key={u.sid} user={u} />
  ));

  return (
    <div className="room">
      <h2>Room: {roomName}</h2>
      <button onClick={handleExit}>Log out</button>
      <div className="local-user">
        {room ? (
          <UserVideo
            key={room.localParticipant.sid}
            user={room.localParticipant}
          />
        ) : (
          ""
        )}
      </div>
      <div className="remote-participants">{remoteParticipants}</div>
    </div>
  );
}

export default Room;
