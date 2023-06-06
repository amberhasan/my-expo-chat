import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import MessageComposer from "../components/MessageComposer";
import RightMessage from "../components/RightMessage";
import LeftMessage from "../components/LeftMessage";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update, onValue } from "firebase/database";

const Chat = (props) => {
  const auth = getAuth();
  const db = getDatabase();
  const currentUser = auth.currentUser;
  const user = props.route.params.user;
  const chatUid =
    currentUser.uid < user.uid
      ? `${currentUser.uid}_${user.uid}`
      : `${user.uid}_${currentUser.uid}`;
  console.log("chatUid", chatUid);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const transformData = (data) =>
    Object.keys(data).map((key) => ({ ...data[key] }));

  useEffect(() => {
    const chatRef = ref(db, `chat/${chatUid}`);
    onValue(chatRef, (snapshot) => {
      let _chat = snapshot.val();
      if (_chat) {
        _chat = transformData(_chat);
        setChat(_chat);
      }
    });
  }, []);

  const onSend = () => {
    if (!msg) {
      alert("write something to send");
      return;
    }

    const msgObj = {
      message: msg,
      sender: {
        uid: currentUser.uid,
        email: currentUser.email,
      },
      receiver: {
        uid: user.uid,
        email: user.email,
      },
    };

    const key = new Date().getTime();
    const updates = {};
    updates[`chat/${chatUid}/${key}`] = msgObj;
    update(ref(db), updates);
    setMsg("");
  };
  console.log("------Render", chat);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "orange" }}>
        {chat.map((_msg, index) => {
          if (currentUser.uid === _msg.sender.uid) {
            return <RightMessage key={index} data={_msg} />;
          } else {
            return <LeftMessage key={index} data={_msg} />;
          }
        })}
      </View>
      <MessageComposer value={msg} onChangeText={setMsg} onSend={onSend} />
    </View>
  );
};

export default Chat;

/**
chat
  uid:{
    message: abc,
      sender:{
        ...
      }
      receiver:{...}    
  }
 */
