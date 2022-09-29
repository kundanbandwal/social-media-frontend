import { useRef } from "react";
import "./register.css";
import request from "../../axiosConfig"
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory()

  const handleClick = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("Password Don't Match")
    }else{
      const user ={
        username : username.current.value,
        email : email.current.value,
        password : password.current.value,
      };
      try {
       await request.post("/auth/register", user);
         history.push("/login")
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FaceBook</h3>
          <span className="loginDesc">Dont use FaceBook its very useless 
               -Either you run the code or code runs you.</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">Sign Up</button>
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
