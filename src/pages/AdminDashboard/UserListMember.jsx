import React, { useState } from "react";

function UserListMember({ index, user }) {
  const [viewMore, setViewMore] = useState(false);

  return (
    <main
      className="Management__Card"
      onClick={() => {
        setViewMore(!viewMore);
      }}
    >
      <section className="UserListHeader">
        <h3>
          {index}<span className="Management__separator">{" :: "}</span>
          {user.fullName}
          <span className="Management__separator">{" :: "}</span>
          [{user.role.Name}]
        </h3>
        <div className="manage_btns">
          <button className="manage__edit">✎</button>
          <button className="manage__del">🞮</button>
        </div>
      </section>
      <div
        className="UserManagement__Card--body"
        style={{ display: viewMore ? "flex" : "none" }}
      >
        <label htmlFor="">
          Change email:
          <input type="text" />
        </label>
        <label htmlFor="">
          Change Password:
          <input type="text" />
        </label>
        <label htmlFor="">
          Current Role:
          <input type="text" />
        </label>
        <div className="roleCtn">
          <button className="UpdateRole">Save</button>
          <button className="UpdateRole">Discard</button>
        </div>
      </div>
    </main>
  );
}

export default UserListMember;
