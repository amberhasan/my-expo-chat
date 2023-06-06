import React from "react";
import { View } from "react-native";
import MyTextInput from "./MyTextInput";
import MyButton from "./MyButton";

const MessageComposer = (props) => {
  return (
    <View
      style={{
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flex: 0,
      }}
    >
      <MyTextInput
        value={props.value}
        placeholder="Enter your message"
        onChangeText={props.onChangeText}
      />
      <View style={{ flex: 0.3 }}>
        <MyButton
          title="send"
          onPress={props.onSend}
          style={{
            borderRadius: 100,
          }}
        />
      </View>
    </View>
  );
};

export default MessageComposer;
