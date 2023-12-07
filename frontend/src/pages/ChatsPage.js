import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatsPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChat = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
  };

  useEffect(() => {
    fetchChat();
  }, []);
  return <>
    <div>
        {chats.map(chat=>(
            <div key={chat._id}>
                {chat.chatName}
            </div>
        ))}
    </div>
  </>;
};

export default ChatsPage;
