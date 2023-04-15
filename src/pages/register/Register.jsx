import "../register/register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialChitChat</h3>
          <p className="loginDesc">
            Connect with friends and the world around you <br /> on SocialChitChat.
          </p>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button onClick={()=>navigate("/profile")} className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
