import React from "react";

function Kids() {
  return (
    <div class="content-container">
      <div className="media-text text-center">
        <h2> where did the kids go? (2021) </h2>
        <a
          target="_blank"
          rel="noreferrer"
          className="display-5 d-block"
          Href="https://en.tama-outofthecube.com/oded-yaacov
"
        >
          (article Link)
        </a>
        <img
          class="mt-2 media-img media-text"
          alt="oded's images"
          src={require("../../images/media/kids.jpg")}
        />
        <img
          class="mt-2 media-img media-text"
          alt="oded's images"
          src={require("../../images/media/kids2.png")}
        />
      </div>
    </div>
  );
}

export default Kids;
