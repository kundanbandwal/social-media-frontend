import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useContext } from "react";
import { useState } from "react";
import request from "../../axiosConfig";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id));

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await request.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await request.put("/users/" + user._id + "/unfollow", {
          userId: currentUser._id,
        });
        dispatch({type:"UNFOLLOW",payload:user._id})
      } else {
        await request.put("/users/" + user._id + "/follow", {
          userId: currentUser._id,
        });
        dispatch({type:"FOLLOW",payload:user._id})
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };

  function HomeRightBar() {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImage" src={`${PF}gift.png`} alt="" />
          <span className="birthdayText">
            <b>honey singh</b> and <b>3 other friends </b> have a birthday
            today.
          </span>
        </div>
        <img src="assets/ad.png" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">online friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
            ))}
        </ul>
      </>
    );
  }

  function ProfileRightbar() {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "single"
                : user.relationship === 2
                ? "married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImage"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))};
        </div>
      </>
    );
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
