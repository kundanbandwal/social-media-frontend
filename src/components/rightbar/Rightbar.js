import "./rightbar.css"

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImage" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>honey singh</b> and <b>3 other friends </b> have a birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">online friends</h4>
        <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImageContainer">
                <img src="assets/person/5.jpeg" alt="" className="rightbarProfileImage" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">jay thakur</span>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
