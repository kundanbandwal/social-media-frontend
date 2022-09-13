import "./online.css"

function Online(props) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log({PF})

  return (
    <div>
       <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
                <img className="rightbarProfileImage" src={PF+props.user.profilePicture} alt=""  />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{props.user.username}</span>
          </li>
    </div>
  )
}

export default Online
