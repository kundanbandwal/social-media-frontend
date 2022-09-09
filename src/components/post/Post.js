import "./post.css"
import {MoreVert} from "@material-ui/icons"

function Post() {
  return (
    <div className='post'>
     <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="/assets/person/8.JPG" alt="" className="postProfileImage" />
                <span className="postUsername">kundan bandwal</span>
                <span className="postDate">10 mins Ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">hey! its my first post </span>
            <img className="postImage"  src="assets/posts/2.jpeg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/heart.png" alt="" />
                <img src="assets/like.png" alt="" />
            </div>
            <div className="postBottomRight"></div>
        </div>
     </div>
    </div>
  )
}

export default Post
