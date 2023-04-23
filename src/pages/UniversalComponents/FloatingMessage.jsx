import { useState, useEffect } from "react";

function FloatingMessage({
  message = "[FLOATING MESSAGE]",
  setShowUpdate,
  showUpdate = false,
}) {

  useEffect(() => {
    let intervalId;
    if (showUpdate) {
      intervalId = setInterval(() => {
        setShowUpdate(false);
      }, 4800);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [showUpdate]);

  return (
    <main
      className="floatingMessage__ctn"
      style={{ display: showUpdate ? "flex" : "none" }}
    >
      <p>
        <strong>{message}</strong>
      </p>
      <p className="floatingMessage__special">
        <strong>🗙</strong>
      </p>
    </main>
  );
}

export default FloatingMessage;
