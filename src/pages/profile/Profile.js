import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImage" src={`${PF}post/4.jpeg`} alt="" />
                            <img className="profileUserImage" src={`${PF}person/8.jpeg`} alt="" />
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
