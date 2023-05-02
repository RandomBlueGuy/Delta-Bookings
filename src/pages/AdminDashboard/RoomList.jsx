import React from "react";

function RoomList({
  delNum = 1,
  roomName = "Room Name",
  setUpdateRoomIndex,
  setDeleteRoomData,
}) {
  return (
    <main className="Management__Card--title roomList__ctn">
      <h3>
        Room {delNum} :: {roomName}
      </h3>
      <div className="manage_btns">
        <button
          className="manage__edit"
          onClick={() => {
            setUpdateRoomIndex(delNum - 1);
          }}
        >
          ✎
        </button>
        <button
          className="manage__delete"
          onClick={() => {
            setDeleteRoomData(delNum - 1);
          }}
        >
          🞮
        </button>
      </div>
    </main>
  );
}

export default RoomList;
