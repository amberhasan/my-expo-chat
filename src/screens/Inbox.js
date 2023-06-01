import React from "react";
import { View, Text, Image } from "react-native";
import InboxItem from "../components/InboxItem";

const Inbox = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <InboxItem
        onPress={() => {
          props.navigation.navigate("Chat");
        }}
      />
    </View>
  );
};

export default Inbox;
