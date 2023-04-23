import React from "react";

function WarningMessage({
  warningTitle = "Warning Title",
  warningMessage = "Warning Message",
  setShowWarning,
  setWarningResult,
}) {
  return (
    <main className="WarningMaxCtn">
      <div className="WarningCtn">
        <section className="Warning__header">
          <h3 className="Warning__header__title">{"⚠️ "}{warningTitle}</h3>
          <button
            className="Warning__header__close"
            onClick={() => {
              setWarningResult(false);
              setShowWarning(false);
            }}
          >
            🞮
          </button>
        </section>
        <section className="Warning__body">
          <p className="Warning__body__txt">{warningMessage}</p>
          <p className="Warning__body__txt toRight">Are you sure about this?</p>
          <div className="Warning__btnCtn">
            <button
              className="WarningBtn Warning__cancel"
              onClick={() => {
                setWarningResult(false);
                setShowWarning(false);
              }}
            >
              No
            </button>
            <button
              className="WarningBtn Warning__aprove"
              onClick={() => {
                setWarningResult(true);
                setShowWarning(false);
              }}
            >
              Yes
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default WarningMessage;
