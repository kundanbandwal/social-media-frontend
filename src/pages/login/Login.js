import "./login.css"

function Login() {
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
            <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <button className="loginButton">Login</button>
                <span className="loginForgot">Forgot Password ?</span>
                <button className="loginRegisterButton">Create a New Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
