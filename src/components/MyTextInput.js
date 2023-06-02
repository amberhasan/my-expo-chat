import React from "react";
import { TouchableOpacity, TextInput } from "react-native";

const MyTextInput = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      style={{
        height: 40,
        flex: 1,
        borderWidth: 0.5,
        paddingHorizontal: 10,
        borderRadius: 15,
        ...props.style,
      }}
    />
  );
};

export default MyTextInput;
