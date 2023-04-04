import React from "react";
import "../../pages/UniversalComponents/LoadingComp.css";

function LoadingComp() {
  return (
    <main className='LoadingComp__max'>
      <section
        className="loading__ctn"
        // style={{ display: loading ? "flex" : "none" }}
      >
        <h1 className="">LOADING...</h1>
        <p className="">... It will only take a moment</p>
        <div className="loading__ctn--loader loader1">
          <div className="loading__ctn--loader loader2">
            <div className="loading__ctn--loader loader3"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoadingComp;
