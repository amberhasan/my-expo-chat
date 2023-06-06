import React from "react";
import { View, Text, Image } from "react-native";
const RightMessage = (props) => {
  return (
    <View
      style={{
        backgroundColor: "gray",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10,
        marginTop: 5,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: "black",
          paddingHorizontal: 10,
        }}
      >
        {props.data.message}
      </Text>
      <Image
        source={{
          uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
        }}
        style={{
          height: 35,
          width: 35,
          borderRadius: 35 / 2,
          marginRight: 5,
        }}
      />
    </View>
  );
};

export default RightMessage;
