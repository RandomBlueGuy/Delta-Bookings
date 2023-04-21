import React from "react";

function FloatingMessage({ message = "[FLOATING MESSAGE]" }) {
  return (
    <main className="floatingMessage__ctn">
      <p><strong>{message}</strong></p>
      <p className='floatingMessage__special'><strong>🗙</strong></p>
    </main>
  );
}

export default FloatingMessage;
