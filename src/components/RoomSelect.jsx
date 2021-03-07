import React, { useState, useEffect } from "react";

import Room from "./Room";

function RoomSelect({ user }) {
  // Token starts null
  const [token, setToken] = useState(null);
  const [roomName, setRoomName] = useState("");
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleExit = () => {
    setToken(null);
  };

  const handleGetToken = () => {
    setLoading(true);
    fetch(encodeURI(`/.netlify/functions/getToken`), {
      method: "POST",
      body: JSON.stringify({
        username: user,
        roomName: roomName,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setToken(result);
        },
        (error) => {
          console.error(error);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  if (!token) {
    return (
      <div>
        <input
          type="text"
          name="question"
          value={roomName}
          onChange={(event) => setRoomName(event.target.value)}
        />
        <button onClick={handleGetToken}>Create room</button>
        {/* Or Select a room from below, which will update the token. */}
      </div>
    );
  } else {
    return (
      <Room
        token={token}
        roomName={roomName}
        username={user}
        handleExit={handleExit}
      />
    );
  }
}

export default RoomSelect;
