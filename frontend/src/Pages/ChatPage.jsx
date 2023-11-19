import React, { useEffect, useState } from "react";
import axios from "axios";

function ChatPage() {
  const [chats, setChats] = useState([]);
  // function to get the data from the api endpoint
  const fetchChats = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/chat");
      setChats(data);
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };

  // to display data on every render
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
}

export default ChatPage;
