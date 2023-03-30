import React from "react";

function RoomList() {
  return (
    <main className="Management__Card--title roomList__ctn">
        <h3>Room # :: [Room Name]</h3>
      <div className='manage_btns'>
         <button className="manage__edit">✎</button>
         <button className="manage__delete">🞮</button>
      </div>
      
    </main>
  );
}

export default RoomList;
