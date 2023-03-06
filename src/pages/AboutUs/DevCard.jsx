import React from "react";
import "./DevCard.css";

function DevCard(props) {
  const specialChar = ["  {", "}", ","];
  const cRed = "rgba(218,106,110,255)";
  const cOrange = "#ef9d3f";
  const cGreen = "rgba(97,204,146,255)";
  const cYellow = "#c46239";
  const cPurple = "rgba(168,141,221,255)"

  return (
    <div className="card-base">
      <div className="developers-card-ctn">
        <figure className="member-img-ctn">
          <img className="member-profile-pic" src={props.cImage} alt="" />
          <h3 style={{ color: `${props.cColor1}` }}>
            <span style={{ color: "white" }}>{specialChar[0]}</span>
            {props.cNick}
            <span style={{ color: "white" }}> {specialChar[1]}</span>
          </h3>
        </figure>
        <div className="member-info-ctn">
          <div className="info-ctn-code">
            <div className="info-ctn-code-line">
              <div className="line-n">
                <p>1</p>
              </div>
              <div className="line-code">
                <p>
                  <span className="code-indentation">___</span>
                  <span style={{ color: "gray" }}>
                    //Declare Developer Status
                  </span>
                </p>
              </div>
            </div>
            <div className="info-ctn-code-line">
              <div className="line-n">
                <p>2</p>
              </div>
              <div className="line-code">
                <p>
                  <span className="code-indentation">___</span>
                  <span style={{ color: cPurple }}>const</span>
                  <span style={{ color: cYellow }}> aboutMe</span>
                  <span style={{ color: "cyan" }}> = </span>
                  <span style={{ color: "white" }}> {specialChar[0]}</span>
                </p>
              </div>
            </div>

            <div className="info-ctn-code-line">
              <div className="line-n">
                <p>3</p>
              </div>
              <div className="line-code">
                <p>
                  <span className="code-indentation">___</span>
                  <span className="code-indentation">___</span>
                  <span style={{ color: cRed }}> name</span>
                  <span style={{ color: "cyan" }}> : </span>
                  <span style={{ color: cGreen }}>'{props.cName}'</span>
                  <span style={{ color: "white" }}> {specialChar[2]}</span>
                </p>
              </div>
            </div>
            <div className="info-ctn-code-line">
              <div className="line-n">
                <p>4</p>
              </div>
              <div className="line-code">
                <p>
                  <span className="code-indentation">___</span>
                  <span className="code-indentation">___</span>
                  <span style={{ color: cRed }}> title</span>
                  <span style={{ color: "cyan" }}> : </span>
                  <span style={{ color: cGreen }}>'{props.cTitle}'</span>
                  <span style={{ color: "white" }}> {specialChar[2]}</span>
                </p>
              </div>
            </div>

            <div className="info-ctn-code-line">
              <div className="line-n">
                <p>5</p>
              </div>
              <div className="line-code">
                <p>
                  <span className="code-indentation">___</span>
                  <span className="code-indentation">___</span>
                  <span style={{ color: cRed }}> contact</span>
                  <span style={{ color: "cyan" }}> : </span>
                  <span style={{ color: "white" }}> {specialChar[0]}</span>
                </p>
              </div>
            </div>
            <div className="info-ctn-code-line">
              <div className="line-n">
                <p>6</p>
              </div>
              <div className="line-code">
                <p>
                  <span className="code-indentation">___</span>
                  <span className="code-indentation">___</span>
                  <span className="code-indentation">___</span>
                  <span style={{ color: cOrange }}> email</span>
                  <span style={{ color: "cyan" }}> : </span>
                  <span style={{ color: cGreen }}>'{props.cEmail}'</span>
                  <span style={{ color: "white" }}> {specialChar[2]}</span>
                </p>
              </div>
            </div>
            <div className="info-ctn-code-line">
              <div className="line-n">
                <p>7</p>
              </div>
              <div className="line-code">
                <p>
                  <span className="code-indentation">___</span>
                  <span className="code-indentation">___</span>
                  <span className="code-indentation">___</span>
                  <span style={{ color: cOrange }}> github</span>
                  <span style={{ color: "cyan" }}> : </span>
                  <span style={{ color: cGreen }}>'{props.cGithub}'</span>
                  <span style={{ color: "white" }}> {specialChar[2]}</span>
                </p>
              </div>
            </div>
            <div className="info-ctn-code-line">
              <div className="line-n">
                <p>8</p>
              </div>
              <div className="line-code">
                <p>
                  <span className="code-indentation">___</span>
                  <span className="code-indentation">___</span>
                  <span className="code-indentation">___</span>
                  <span style={{ color: cOrange }}> linkedin</span>
                  <span style={{ color: "cyan" }}> : </span>
                  <span style={{ color: cGreen }}>'{props.cLinkedin}'</span>
                  <span style={{ color: "white" }}> {specialChar[2]}</span>
                </p>
              </div>
            </div>
            <div className="info-ctn-code-line">
              <div className="line-n">
                <p>9</p>
              </div>
              <div className="line-code">
                <p>
                  <span className="code-indentation">___</span>
                  <span className="code-indentation">___</span>
                  <span style={{ color: "white" }}> {specialChar[0]}</span>
                </p>
              </div>
            </div>
            <div className="info-ctn-code-line">
              <div className="line-n">
                <p>10</p>
              </div>
              <div className="line-code">
                <p>
                  <span className="code-indentation">___</span>
                  <span style={{ color: "white" }}> {specialChar[1]}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevCard;
