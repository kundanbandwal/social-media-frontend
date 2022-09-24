import "./message.css";

function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://static2.srcdn.com/wordpress/wp-content/uploads/2020/11/Pokemon-Crown-Tundra-Salamance.jpg"
          alt=""
        />
        <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="messageBottom">1 hour Ago</div>
    </div>
  );
}

export default Message;
