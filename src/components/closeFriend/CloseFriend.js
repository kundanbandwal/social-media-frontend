import './closeFriend.css'

function CloseFriend(props) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src={PF+props.user.profilePicture} alt="" />
                <span className="sidebarFriendName">{props.user.username}</span>
            </li>
        </div>
    )
}

export default CloseFriend
