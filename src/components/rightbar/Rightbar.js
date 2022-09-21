import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function HomeRightBar(){
  return(
    <>
    <div className="birthdayContainer">
          <img className="birthdayImage" src={`${PF}gift.png`} alt=""/>
          <span className="birthdayText">
            <b>honey singh</b> and <b>3 other friends </b> have a birthday today.
          </span>
        </div>
        <img src="assets/ad.png" className="rightbarAd" alt=""/>
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
        <span className="rightbarInfoValue">{user.city}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From</span>
        <span className="rightbarInfoValue">{user.from}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship</span>
        <span className="rightbarInfoValue">{user.relationship ===1 ?"single" :
        user.relationship === 2 ? "married" : "-" }</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImage" />
        <span className="rightbarFollowingName">ricky singh</span>
      </div>
      <div className="rightbarFollowing">
        <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImage" />
        <span className="rightbarFollowingName">ricky singh</span>
      </div>
      <div className="rightbarFollowing">
        <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImage" />
        <span className="rightbarFollowingName">ricky singh</span>
      </div>
      <div className="rightbarFollowing">
        <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImage" />
        <span className="rightbarFollowingName">ricky singh</span>
      </div>
    </div>
    </>
  )
}
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ?<ProfileRightbar />: <HomeRightBar />}
      </div>
    </div>
  )
}

export default Rightbar
