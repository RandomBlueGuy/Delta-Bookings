import React, { useState, useEffect } from "react";
import axios from "axios";
import { useJwt } from "react-jwt";
import { useCookies } from "react-cookie";
import WarningMessage from "../UniversalComponents/WarningMessage";

function UserListMember({ index, user, setRecallGet }) {
  const DB_URL = process.env.REACT_APP_BACKEND_URL;

  const [cookies] = useCookies("cookieToken");
  const decode = useJwt(cookies.cookieToken);
  const [showWarning, setShowWarning] = useState(false);
  const [warningResult, setWarningResult] = useState(false);
  const [role, setRole] = useState("");
  const [viewSubmit, setViewSubmit] = useState("");
  const [shouldDelete, setShouldDelete] = useState(false);
  const [warningMessage, setWarningMessage] = useState(
    "Take into consideration the possible consequences of this particular action."
  );
  const [warningTitle, setWarningTitle] = useState("Think about it");

  useEffect(() => {
    if (role !== "") {
      setViewSubmit(true);
    }
  }, [role]);

  useEffect(() => {
    if (warningResult === true && role !== "") {
      setShowWarning(false);
      const selectedRoleValue = role === "User" ? 1 : 2;
      axios
        .put(
          `${DB_URL}/api/users/${user.id}/role`,
          {
            userId: user.id,
            newRole: selectedRoleValue,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.cookieToken}`,
            },
          }
        )
        .then(() => {
          setRecallGet(true);
          setRole("");
        });

      setViewSubmit(false);
      setWarningResult(false);
    }
  }, [warningResult]);

  useEffect(() => {
    if (warningResult === true && shouldDelete === true) {
      setShouldDelete(false);
      setWarningResult(false);
      axios
        .delete(`${DB_URL}/api/users/${user.id}`, {
          headers: {
            Authorization: `Bearer ${cookies.cookieToken}`,
          },
        })
        .then(() => {
          setRecallGet(true);
        });
    }
  }, [warningResult]);

  return (
    <main className='Management__Card'>
      {showWarning && (
        <WarningMessage
          warningMessage={warningMessage}
          warningTitle={warningTitle}
          setShowWarning={setShowWarning}
          setWarningResult={setWarningResult}
        />
      )}
      <section className='UserListHeader'>
        <h3>
          {index}
          <span className='Management__separator'>{" :: "}</span>
          {user.fullName}
          <span className='Management__separator'>{" :: "}</span> [
          {user.role.Name}]
        </h3>
        <div className='manage_btns'>
          <select
            name=''
            id=''
            value={role}
            onChange={(event) => {
              setRole(event.target.value);
            }}
          >
            <option value='' selected disabled>
              - select new role -{" "}
            </option>
            <option value='User'>User</option>
            <option value='Admin'>Admin </option>
          </select>
          <button
            className='manage__edit'
            style={{ display: viewSubmit ? "block" : "none" }}
            onClick={() => {
              setShowWarning(true);
            }}
          >
            ✔
          </button>
          <button
            className='manage__del'
            onClick={() => {
              setShowWarning(true);
              setShouldDelete(true);
            }}
          >
            🞮
          </button>
        </div>
      </section>
      <div className='UserManagement__Card--body' style={{ display: "none" }}>
        <label htmlFor=''>
          Password:
          <input type='password' />
        </label>
        <label htmlFor=''>Current Role:</label>
        <div className='roleCtn'>
          <button className='UpdateRole'>Discard</button>
          <button className='UpdateRole'>Save</button>
        </div>
      </div>
    </main>
  );
}

export default UserListMember;
