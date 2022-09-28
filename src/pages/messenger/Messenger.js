import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import request from "../../axiosConfig";

function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await request.get("/conversations/" + user._id);
        // console.log(res)
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user._id]);
   console.log(currentChat)
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input className="chatMenuInput" placeholder="Search For Friends" />
            {conversations.map((c) => (
              <div onClick={()=>setCurrentChat(c)}>
              <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message />
                  <Message own={true} />
                  <Message />
                  <Message />
                  <Message />
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="Aa"
                  ></textarea>
                  <button className="chatSubmitButton">Send</button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                open conversation to start a chat !
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
