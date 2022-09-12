import "./topbar.css"
import { Search,Person,Chat,Notifications }  from '@material-ui/icons'
import { Link } from "react-router-dom"
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">FaceBook</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="search for friends,posts or videos" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlink">
            <span className="topbarlink">Homepage</span>
            <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge">4</span>
            </div>
            <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge">2</span>
            </div>
        </div>
        <img src="/assets/person/3.jpeg" alt="" className="topbarImage" />
      </div>
    </div>
  )
}

export default Topbar;
