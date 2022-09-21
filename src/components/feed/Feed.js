import { useState,useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import request from "../../axiosConfig"
function Feed({username}) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = username ? await request.get('/posts/profile/' + username) : 
        await request.get('/posts/timeline/6320c26207199e962aed9824') ;
        // console.log(res)
        setPosts(res.data)
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, [username])
  


  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => {
          return <Post key={p._id} post={p} />
        })}
      </div>
    </div>
  )
}

export default Feed;
