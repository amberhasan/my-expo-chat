import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const InboxItem = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        height: 80,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "white",
        borderBottomWidth: 0.5,
        borderColor: "black",
      }}
    >
      <View
        style={{
          width: "20%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
          }}
          style={{
            height: 70,
            width: 70,
          }}
        />
      </View>
      <View
        style={{
          width: "80%",
          justifyContent: "center",
          paddingHorizontal: 15,
        }}
      >
        <Text>Safdar</Text>
        <Text>Hey, how are you?</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InboxItem;
