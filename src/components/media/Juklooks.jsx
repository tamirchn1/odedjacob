import React from "react";

function Juklooks() {
  return (
    <div class="content-container -content">
      <div className="media-text">
        <div className="text-center ">
          <h2> Juklook’s Service (2015) </h2>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.art.org.il/?exhibitions=%d7%aa%d7%a2%d7%a8%d7%95%d7%9b%d7%94-%d7%97%d7%9e%d7%99%d7%a9%d7%99%d7%aa-%d7%91%d7%a1%d7%93%d7%a8%d7%aa-%d7%a0%d7%93%d7%91%d7%9a-19&yearfilter=2015"
          >
            (Gallery archive)
          </a>
          <h5>
            <b>Curator: Etti Abergel</b>
          </h5>
        </div>
        <p>
          “Juklook’s Service”, the site specifiartc installation made by Oded
          Jacob in the Jerusalem Artist’s House, is an imaginary, chaotic spaceW
          that encapsulates military elements that are disarmed of their
          original use in means of deformation and theatrical exaggeration.{" "}
          <br /> <br />
          These surreal, grotesque, hybrid images which inflict collective
          terror and anxiety are used as a surface for realistic and expressive
          drawings.
          <br /> <br />
          They reveal the world of a young artist, dealing with questions of his
          own identity within the global and israeli artistic system. Jacob
          unites both the military and figurative languages in a parodic and
          threatening manner simultaneously. <br /> <br />
          The art as a representative of freedom, freedom of speech and
          imagination, is assimilated in the local code apparent in the
          military, khaki-olive green fabric,as a surface replacing the classic
          white canvas. The personal and the political are piled in the space as
          if in a shadow play.
        </p>
      </div>
      <div class="media-content">
        <img
          class="mt-5 media-img media-text "
          alt="oded's images"
          src={require("../../images/media/juklooks.jpg")}
        />
        <img
          class="mt-5 media-img media-text "
          alt="oded's images"
          src={require("../../images/media/juklooks2.jpg")}
        />
      </div>
    </div>
  );
}

export default Juklooks;
