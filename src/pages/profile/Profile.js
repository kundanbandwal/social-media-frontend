import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">ASGFJHFV
                        <div className="profileCover">
                            <img className="profileCoverImage" src="assets/post/4.jpeg " alt="" />
                            <img className="profileUserImage" src="assets/person/8.jpeg " alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">kundan bandwal</h4>
                            <span className="profileInfoDesc">Hello my Friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
