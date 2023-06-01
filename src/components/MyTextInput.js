import React from "react";
import { TouchableOpacity, TextInput } from "react-native";

const MyTextInput = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      style={{
        height: 40,
        flex: 1,
        borderWidth: 0.5,
        paddingHorizontal: 10, //applied to all 4 sides
        borderRadius: 15,
        ...props.style,
      }}
    />
  );
};

export default MyTextInput;
