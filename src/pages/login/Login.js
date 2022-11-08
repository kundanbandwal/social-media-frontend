import { useRef, useContext } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import validator from 'validator'
// import { VisibilityOff } from "@material-ui/icons";

function Login() {
  const email = useRef();
  const password = useRef();
  const {  dispatch } = useContext(AuthContext);
  const [emailError, setEmailError] = useState('')
  const[passErr,setPassErr]=useState("");

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  const validateEmail = (e) => {
    var email = e.target.value
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      if(email.length > 5){
        setEmailError('Enter valid Email!')
      }else{
        setEmailError('')
      }
    }
  };

 const passwordHandler = (e) => {
  let password = e.target.value
  if(password.length>5){
    setPassErr('')
  }else{
    setPassErr("Password Must Be 6 To 14 Characters !!")
  }
 }
  // console.log({user});
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FaceBook</h3>
          <span className="loginDesc">
            Facebook helps you connect and share with the people in your life.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              onChange={(e) => validateEmail(e)}
              ref={email}
              />
            <span style={{ fontWeight: 'bold', color: 'red', marginLeft: "140px "}}>{emailError}</span>
            <input
              placeholder="Password"
              type="password"
              minLength="6"
              required
              className="loginInput"
              ref={password}
              onChange={(e) => passwordHandler(e)}
            />
             <span style={{ fontWeight: 'bold', color: 'red', marginLeft: "80 px  "}}>{passErr}</span>
            <button className="loginButton" type="submit">
              Login
            </button>
            <span className="loginForgot">Forgot Password ?</span>
            <hr className="loginHr" />
            <Link to={"/register"}>
              <button className="loginRegisterButton">
                Create a New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
