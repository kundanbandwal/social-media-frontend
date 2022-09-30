import "./message.css";
import {format} from "timeago.js"

function Message({message,own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://static2.srcdn.com/wordpress/wp-content/uploads/2020/11/Pokemon-Crown-Tundra-Salamance.jpg"
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}

export default Message;
