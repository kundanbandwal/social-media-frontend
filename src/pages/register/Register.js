import { useRef } from "react";
import "./register.css";
import request from "../../axiosConfig";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import validator from "validator";
import { useState } from "react";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const [emailError, setEmailError] = useState("");
  const [passErr, setPassErr] = useState("");
  const [PassAgainErr, setPassAgainErr] = useState("");
  const [usernameErr, setUsernameErr] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password Don't Match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await request.post("/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const usernameHandler = (e) => {
  let username = e.target.value;
  if (username.length > 3) {
    setUsernameErr("");
  } else {
    setUsernameErr("Username Not Valid!");
  }
};

  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      if (email.length > 5) {
        setEmailError("Enter valid Email!");
      } else {
        setEmailError("");
      }
    }
  };

  const passwordHandler = (e) => {
    let password = e.target.value;
    if (password.length < 6) {
      setPassErr("Password Must Be 6 To 14 Characters");
    } else {
      setPassErr("");
    }
  };


  const PasswordAgainHandler = (e) => {
    const passwordAgain = e.target.value;
    if (password.current.value !== passwordAgain) {
      setPassAgainErr("Password Don't Match");
    } else {
      setPassAgainErr('');
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FaceBook</h3>
          <span className="loginDesc">
            Dont use FaceBook its very useless -Either you run the code or code
            runs you.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
              onChange={(e) => usernameHandler(e)}
            />
            <span
              style={{ fontWeight: "bold", color: "red", marginLeft: "140px" }}
            >
              {usernameErr}
            </span>
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
              onChange={(e) => validateEmail(e)}
            />
            <span
              style={{ fontWeight: "bold", color: "red", marginLeft: "140px" }}
            >
              {emailError}
            </span>
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
              onChange={(e) => passwordHandler(e)}
            />
            <span
              style={{ fontWeight: "bold", color: "red", marginLeft: "80px" }}
            >
              {passErr}
            </span>
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
              onChange={(e) => PasswordAgainHandler(e)}
            />
            <span
              style={{ fontWeight: "bold", color: "red", marginLeft: "140px" }}
            >
              {PassAgainErr}
            </span>
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to={"/login"}>
              <button className="loginRegisterButton">Login to Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
