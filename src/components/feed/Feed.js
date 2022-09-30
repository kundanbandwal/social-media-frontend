import { useState,useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {fetchPosts} from "../../services/MessangerService"

function Feed({username}) {
  const [posts, setPosts] = useState([])
  const {user} = useContext(AuthContext)

  const shareFetchPost = () => fetchPosts(user, username, setPosts);

  useEffect(() => {
    shareFetchPost()
    // console.log({username, id: user._id})
  }, [username,user._id]);
  
  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share fetchPosts={shareFetchPost} />}
        {posts.map((p) => {
          return <Post key={p._id} post={p} />
        })}
      </div>
    </div>
  )
}

export default Feed;
