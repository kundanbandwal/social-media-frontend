import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";
import request from "../../axiosConfig";
import { useParams } from "react-router";
import { CameraAlt, Cancel, Save } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

function Profile({ fetchPosts }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
  const [file, setFile] = useState(null);
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await request.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  const saveProfileImage = async () => {
    // save image logic
    const newProfilePic = {
      userId: user._id,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newProfilePic.img = fileName;
      try {
        await request.put(`/upload?name=${fileName}`, data);
      } catch (error) {}
    }
    try {
      await request.put("/posts", newProfilePic);
      setFile(null);
      fetchPosts();
    } catch (error) {}
  };
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImage"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
              />
              {file ? (
                <>
                  <img
                    className="profileUserImage"
                    src={URL.createObjectURL(file)}
                    alt=""
                  />
                </>
              ) : (
                <img
                  className="profileUserImage"
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                />
              )}
              {username === currentUser.username && (
                <label htmlFor="file" className="addProfilePicIcon">
                  <span className="setProfileIcon">
                    <CameraAlt />
                  </span>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
              )}
              {file && (
                <span className="saveCancelIcon">
                  <Cancel
                    className="cancelProfileImg"
                    onClick={() => setFile(null)}
                  />
                  <Save className="saveProfileImg" onClick={saveProfileImage} />
                </span>
              )}
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
