import "./online.css"

function Online(props) {
    console.log(props)
  return (
    <div>
       <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
                <img className="rightbarProfileImage" src={props.user.profilePicture} alt=""  />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{props.user.username}</span>
          </li>
    </div>
  )
}

export default Online
