import { useRef } from "react"
import "./login.css"

function Login() {
const email = useRef();
const password = useRef();
function handleClick(e){
console.log(email.current.value)
  e.preventDefault()
}
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">FaceBook</h3>
            <span className="loginDesc">
                Dont use FaceBook its very useless.
            </span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                <input placeholder="Password" type="password" minLength='6' required className="loginInput" ref={password}/>
                <button className="loginButton">Login</button>
                <span className="loginForgot">Forgot Password ?</span>
                <button className="loginRegisterButton">Create a New Account</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
