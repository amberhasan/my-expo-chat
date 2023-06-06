import React from "react";
import { View, Text, Image } from "react-native";
const LeftMessage = (props) => {
  return (
    <View
      style={{
        flex: 0,
        backgroundColor: "gray",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        padding: 10,
      }}
    >
      <Image
        source={{
          uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
        }}
        style={{
          height: 35,
          width: 35,
          borderRadius: 35 / 2,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          color: "black",
          paddingHorizontal: 10,
        }}
      >
        {props.data.message}
      </Text>
    </View>
  );
};

export default LeftMessage;
