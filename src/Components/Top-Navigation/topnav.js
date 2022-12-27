import React, { useEffect, useState } from "react";
import legacyLogo from "./legacy-01.png";
import twilightLogo from "./twilight-10.png";
import "./topnav.css";
import { connect } from "react-redux";
import { changeLogin } from "../../actions/index";

function Topnav(props) {
  const [username, setUsername] = useState("LOGIN/REGISTER");

  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUsername(auth.currentUser.email);
  //     } else {
  //       setUsername("LOGIN/REGISTER");
  //     }
  //   });
  // }, [getAuth()]);

  // const logout = () => {
  //   const auth = getAuth();
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };

  return (
    <nav className="topNav">
      <div className="topNavigation">
        <a href="https://randellscaballero.github.io/legacyteam-app/#" target="_blank">
          <img src={legacyLogo} className="legacy-logo" />
        </a>

        <img src={twilightLogo} className="legacy-logo" />
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return { login: state.login, selectedLogin: state.selectedLogin };
};

export default connect(mapStateToProps, { changeLogin })(Topnav);
