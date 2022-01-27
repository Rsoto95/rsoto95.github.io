import React from "react";
import footer from "./footer.css";
import legacyLogo from "./legacyLogo.png";

export function Footer() {
  return (
    <div>
      <footer>
        <div className="footerSection">
            <div className="firstLine1">
          <img src={legacyLogo} />
          <h2>Legacy Smash Team</h2>
          </div>
          <div className="paragraph1">
          <p>
          Fundado en 2018
          </p>
          </div>
        </div>

        <div className="footerSection">
            <div className="firstLine1">
          <h2>Contact us</h2>
          </div>
          <div className="paragraph1">
          <p>
            loreLaborum est id consectetur nisi eiusmod consectetur. Nulla eu
            mollit quis id anim eiusmod qui nulla amet amet sint in. Labore
            excepteur consectetur culpa esse deserunt. Enim eu ut laborum
            consequat. Dolore amet 
          </p>
          </div>
        </div>


        <div className="footerSection">
            <div className="firstLine1">
          <h2>Quieres ser Legacy?  </h2>
          </div>
          <div className="paragraph1">
          <p>
            loreLaborum est id consectetur nisi eiusmod consectetur. Nulla eu
            mollit quis id anim eiusmod qui nulla amet amet sint in. Labore
            excepteur consectetur culpa esse deserunt. Enim eu ut laborum
            consequat. Dolore amet 
          </p>
          </div>
        </div>

      </footer>
    </div>
  );
}
