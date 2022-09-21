import "./post.css";
import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";//
import { useState,useEffect } from "react";
import request from "../../axiosConfig";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

function Post({post}) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(()=>{
        const fetchUser = async() => {
          try {
            const res = await request.get(`/users/${post.userId}`);
        //   console.log(res)
          setUser(res.data)
          } catch (error) {
            console.log(error)
          }
        };
        fetchUser();
    },[post.userId])

    function likeHandler() {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                        <img className="postProfileImage" src= {user.profilePicture || PF+
                        "person/noAvatar.png"} alt=""  />
                        </Link>
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImage" src={PF+post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                        <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
