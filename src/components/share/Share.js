import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from "@material-ui/icons";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import request from "../../axiosConfig"
function Share({fetchPosts}) {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

 const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
        userId:user._id,
        desc:desc.current.value,
    }
    if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("file",file);
        data.append("name",fileName);
        newPost.img = fileName;
        try {
            await request.post(`/upload?name=${fileName}`, data);
        } catch (error) {}
    }
    try {
     await request.post("/posts", newPost);
    //  window.location.reload();
    desc.current.value = '';
    setFile(null);
    fetchPosts();

    } catch (error) {}
 }

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImage"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <input
            placeholder={`what's in your mind ${user.username} ?`}
            className="shareInput" 
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img  className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="cancelShareImg" onClick={()=>setFile(null)}/>
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler} > 
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">share</button>
        </form>
      </div>
    </div>
  );
}

export default Share;
