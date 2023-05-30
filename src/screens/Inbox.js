import React from "react";
import { View, Text } from "react-native";

const Inbox = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View
        style={{
          height: 80,
          width: "100%",
          backgroundColor: "yellow",
          flexDirection: "row",
        }}
      >
        <View style={{ backgroundColor: "blue", width: "20%" }}>
          <Text>Left</Text>
        </View>
        <View style={{ backgroundColor: "purple", width: "80%" }}>
          <Text>Right</Text>
        </View>
      </View>
    </View>
  );
};

export default Inbox;
