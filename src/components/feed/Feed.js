import { useEffect } from "react";
import { useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import request from "../../axiosConfig"
function Feed() {
  const[posts,setPosts]=useState([])

  useEffect(()=>{
    const fetchPosts = async() => {
      try { 
        const res = await request.get('/posts')
        console.log({res})
        setPosts(res.data)
      }catch(e) {
        console.log(e);
      }
    };
    fetchPosts();
},[])


  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p)=>{
         return <Post key={p.id} post={p}/>
        })}
      </div>
    </div>
  )
}

export default Feed
