import "./post.css"
import { MoreVert } from "@material-ui/icons"
import { Users } from "../../dummyData"
import { useState } from "react"

function Post(props) {
    const [like, setLike] = useState(props.post.like)
    const [isLiked, setIsLiked] = useState(false)

function likeHandler(){
    setLike(isLiked? like-1 : like+1 );
    setIsLiked(!isLiked)
}
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) =>
                            u.id === props.post.userId)[0].profilePicture} alt="" className="postProfileImage" />
                        <span className="postUsername">
                            {Users.filter((u) =>
                                u.id === props.post.userId)[0].username}
                        </span>
                        <span className="postDate">{props.post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{props.post?.desc}</span>
                    <img className="postImage" src={props.post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{props.post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
