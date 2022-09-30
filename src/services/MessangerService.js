import request from "../axiosConfig"

export const fetchPosts = async (user,username, setPosts) => {
    try {
      // console.log('hi')
      const res = username ? await request.get('/posts/profile/' + username) : 
      await request.get('/posts/timeline/' + user._id) ;
      setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }))
    } catch (e) {
      console.log(e);
    }
  };

export default {
    fetchPosts
}