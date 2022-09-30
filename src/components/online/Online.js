import "./online.css";

function Online({ user }) {
  console.log({ user });
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log({PF})

  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImageContainer">
          <img
            className="rightbarProfileImage"
            src={PF + user.profilePicture}
            alt=""
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </div>
  );
}

export default Online;
