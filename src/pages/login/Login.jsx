import { useNavigate } from "react-router-dom";
import "../login/login.css";


export default function Login() {
  const navigate = useNavigate()
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialChitChat</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialChitChat.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button onClick={()=>navigate("/profile")} className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button onClick={()=>navigate("/register")} className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
