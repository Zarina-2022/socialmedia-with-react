import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import "../topbar/topbar.css";
import { Link } from "react-router-dom";

import Person1 from "../../assets/images/person/1.jpeg";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">SocialChitChat</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">4</span>
          </div>
        </div>
        <div className="login-btn">
          <Link
            to={"/login"}
            style={{
              textDecoration:"none",
              borderRadius: "4px",
              border:" 1px solid #fff",
              background: "#1877f2",
              color: "#fff",
              padding: "5px 20px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Login
          </Link>
        </div>
        <img src={Person1} className="topbarImg" />
      </div>
    </div>
  );
}
