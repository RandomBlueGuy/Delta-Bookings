import React from "react";

function RoomList({delNum = 1, roomName="Room Name", deleteRoom, deleteRoomData, setDeleteRoomData}) {
  return (
    <main className="Management__Card--title roomList__ctn">
        <h3>Room {delNum} :: {roomName}</h3>
      <div className='manage_btns'>
         {/* <button className="manage__edit">✎</button> */}
         <button className="manage__delete" onClick={()=> {deleteRoom(delNum - 1); setDeleteRoomData(true)}}>🞮</button>
      </div>
      
    </main>
  );
}

export default RoomList;
