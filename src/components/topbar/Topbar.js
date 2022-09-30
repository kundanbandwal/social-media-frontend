import "./topbar.css";
import { Search, Person, Chat, Notifications,ExitToApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {loggedOutCall} from "../../apiCalls"

function Topbar() {

  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {  dispatch } = useContext(AuthContext);

  const logout = () => {
    loggedOutCall(
      dispatch
    );
  }
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">FaceBook</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="search for friends,posts or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlink">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <Link to={`/messenger`}>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">4</span>
          </div>
          </Link>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <ExitToApp onClick={logout} />
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img
          src={
            user.profilePicture
            ? PF + user.profilePicture
            : PF + "person/noAvatar.png"
          }
          alt=""
          className="topbarImage"
          />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
