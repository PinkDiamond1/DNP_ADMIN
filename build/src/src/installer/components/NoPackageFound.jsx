import React from "react";

const PACKAGE_SURVEY_LINK = "https://goo.gl/forms/EjVTHu6UBWBk60Z62";

function Loading(props) {
  return (
    <React.Fragment>
      <div className="row justify-content-center mt-5">
        <h4 style={{ opacity: 0.6 }}>Not found</h4>
      </div>
      <div className="row justify-content-center">
        <p style={{ opacity: 0.4 }}>
          If you would like a specific DAppNode package (DNP) to be developed,
          express so in the survery below
        </p>
      </div>
      <div className="row justify-content-center mb-5">
        <a
          className="btn dappnode-pill"
          href={PACKAGE_SURVEY_LINK}
          rel="noopener noreferrer"
          target="_blank"
          style={{
            backgroundColor: "#ffffff00",
            width: "max-content",
            borderColor: "black",
            color: "black",
            opacity: 0.3
          }}
        >
          REQUEST DNP
        </a>
      </div>
    </React.Fragment>
  );
}

export default Loading;
