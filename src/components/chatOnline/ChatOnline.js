import "./chatOnline.css";

function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://static2.srcdn.com/wordpress/wp-content/uploads/2020/11/Pokemon-Crown-Tundra-Salamance.jpg"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">kun B</span>
      </div>
    </div>
  );
}

export default ChatOnline;
