import React, { useState } from "react";
import { View, Text } from "react-native";
import MyTextInput from "../components/MyTextInput";
import MyButton from "../components/MyButton";
import MessageComposer from "../components/MessageComposer";
import RightMessage from "../components/RightMessage";
import LeftMessage from "../components/LeftMessage";

const Chat = () => {
  const [msg, setMsg] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "orange" }}>
        <RightMessage />
        <LeftMessage />
      </View>
      <MessageComposer onChangeText={setMsg} />
    </View>
  );
};

export default Chat;
