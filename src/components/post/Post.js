import "./post.css"
import { MoreVert } from "@material-ui/icons"
// import { Users } from "../../dummyData"
import { useState,useEffect } from "react"
import request from "../../axiosConfig"

function Post(props) {
    const [like, setLike] = useState(props.post.like)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(()=>{
        const fetchUser = async() => {
          try {
            const res = await request.get('/posts')
          console.log(res)
          setUser(res.data)
          } catch (error) {
            console.log(error)
          }
        };
        fetchUser();
    },[])

    function likeHandler() {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImage" src= {user.profilePicture || PF+
                        "person/noAvatar.png"} alt=""  />
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">{props.post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{props.post?.desc}</span>
                    <img className="postImage" src={PF + props.post.photo} alt="" />
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
