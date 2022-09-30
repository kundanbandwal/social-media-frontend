import { useState,useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import request from "../../axiosConfig"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Feed({username}) {
  const [posts, setPosts] = useState([])
  const {user} = useContext(AuthContext)
  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = username ? await request.get('/posts/profile/' + username) : 
        await request.get('/posts/timeline/' + user._id) ;
        // console.log(res)
        setPosts(res.data.sort((p1,p2)=>{
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        }))
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, [username,user._id]);
  
  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => {
          return <Post key={p._id} post={p} />
        })}
      </div>
    </div>
  )
}

export default Feed;
