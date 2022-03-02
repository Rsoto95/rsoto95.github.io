import React, { useEffect, useState } from "react";
import "./login.css";
import { connect } from "react-redux";
import smashHouseLogo from "./legacyLogo.png";
import { changeLogin, changeSignup } from "../../actions";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import { initializeApp } from "@firebase/app";
import { useNavigate } from "react-router";

const firebaseConfig = {
  apiKey: "AIzaSyDSIu0F2CD9P487yAnUSy4_lbd2-E4fBnY",
  authDomain: "legacy-website-b093d.firebaseapp.com",
  projectId: "legacy-website-b093d",
  storageBucket: "legacy-website-b093d.appspot.com",
  messagingSenderId: "423838479718",
  appId: "1:423838479718:web:1bf6acc874732e8de9c4a7",
  measurementId: "G-43LQVRCWB5",
};

const app = initializeApp(firebaseConfig);

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay]=useState(props.selectedLogin)
  const navigate=useNavigate();

  useEffect(()=>{
    setDisplay(props.selectedLogin)
  },[props.selectedLogin])

  const signUp = (emails, passwords) => {
    const email = emails;
    const password = passwords;

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setDisplay("none")
        navigate("/userInfo")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signUpGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = provider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
       
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const signIn=(email,password)=>{

    const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setDisplay('none');
    navigate("../dashboard")


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });



  }

  return (
    <div>
      <section
        className="login-section"
        style={{ display: display }}
        onClick={(e) => {
          if (e.target.className != "login-section") {
            return;
          }
          props.changeLogin("none");
        }}
      >
        <div className="login-place">
          <img src={smashHouseLogo} />
          <div className="login-input">
            <div className="login-text2">Email</div>

            <input
              type="text"
              placeholder="Email"
              name="name"
              className=""
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="login-text2">Password</div>
            <input
              type=""
              placeholder="Password"
              name=""
              className=""
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="login-button" onClick={()=>{
              signIn(email,password)
            }}>Login</button>

            <div className="or-text">or</div>
            <button
              className="signup-button"
              onClick={() => {
                props.changeSignup("flex");
              }}
            >
              Sign-up
            </button>
          </div>
        </div>
      </section>

      <section
        className="signup-section"
        onClick={(e) => {
          if (e.target.className != "signup-section") {
            return;
          }
          props.changeSignup("flex");
        }}
        style={{ display: props.selectedSignup }}
      >
        <div className="signup-place">
          <img src={smashHouseLogo} />
          <div className="text9">Sign Up With Email and Password</div>
          <div className="login-input">
            <div className="login-text2">Email</div>

            <input
              type="text"
              placeholder="Email"
              name="name"
              className=""
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="login-text2">Password</div>
            <input
              type=""
              placeholder="Password"
              name=""
              className=""
              onChange={(b) => {
                setPassword(b.target.value);
              }}
              required
            />
            <button
              className="login-button"
              onClick={() => {
                signUp(email,password);
              }}
            >
              Sign up!
            </button>

            <div className="or-text">or</div>

            <button
              className="login-button2"
              onClick={() => {
                signUpGoogle();
              }}
            >
              Sign up With Google
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
    selectedLogin: state.selectedLogin,
    selectedSignup: state.selectedSignup,
  };
};

export default connect(mapStateToProps, { changeLogin, changeSignup })(Login);
