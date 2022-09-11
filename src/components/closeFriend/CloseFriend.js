import './closeFriend.css'

function CloseFriend(props) {
    return (
        <div>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src={props.user.profilePicture} alt="" />
                <span className="sidebarFriendName">{props.user.username}</span>
            </li>
        </div>
    )
}

export default CloseFriend
