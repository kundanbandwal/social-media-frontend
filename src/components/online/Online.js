import "./online.css";
// import { Add, Remove } from "@material-ui/icons";
import { useState } from "react";
import request from "../../axiosConfig";
import { Link } from "react-router-dom";


function Online({ user, homeUser }) {
  const [isFollowed, setFollowed] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // useEffect(() => {
  //   setSuggestFollowed(homeUser.followings.includes(user.id));
  // }, [homeUser, user.id]);

  const followingAction =  async () => {
    try {
      if (isFollowed) {
        await request.put(`/users/${user._id}/unfollow`, {
          userId: homeUser._id,
        });
      } else {
        await request.put(`/users/${user._id}/follow`, {
          userId: homeUser._id,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!isFollowed);
  };

  return (
    <div className="onlineFriend">
      <div className="rightbarFriend">
        <Link to={"/profile/" + user.username} style={{ textDecoration: "none" }}>
          <div className="rightbarProfileImageContainer">
            <img
              className="rightbarProfileImage"
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
            />
            <span className="rightbarOnline"></span>
          </div>
        </Link>
      </div>
      <div className="rightbarUsername">{user.username}</div>
      <div>
          <button className="suggetFollowButton" onClick={followingAction}>
            {isFollowed ? "Unfollow": "Follow" }
          </button>
      </div>
    </div>
  );
}

export default Online;
