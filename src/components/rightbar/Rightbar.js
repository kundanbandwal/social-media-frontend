import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"
function Rightbar({profile}) {

function HomeRightBar(){
  return(
    <>
    <div className="birthdayContainer">
          <img className="birthdayImage" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>honey singh</b> and <b>3 other friends </b> have a birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">online friends</h4>
        <ul className="rightbarFriendList">
         {Users.map((u)=>(
           <Online key={u.id} user={u}/>
         ))}
        </ul>
    </>
  )
};

function ProfileRightbar(){
  return(
    <>
    <h4 className="rightbarTitle">User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City</span>
        <span className="rightbarInfoValue">wardha</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From</span>
        <span className="rightbarInfoValue">India</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImage" />
        <span className="rightbarFollowingName">ricky singh</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImage" />
        <span className="rightbarFollowingName">ricky singh</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImage" />
        <span className="rightbarFollowingName">ricky singh</span>
      </div>
      <div className="rightbarFollowing">
        <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImage" />
        <span className="rightbarFollowingName">ricky singh</span>
      </div>
    </div>
    </>
  )
}
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile?<ProfileRightbar />: <HomeRightBar />}
      </div>
    </div>
  )
}

export default Rightbar
