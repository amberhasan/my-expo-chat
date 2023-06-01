import React from "react";
import { TouchableOpacity, Text } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: "blue",
        flex: 1,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: "tomato",
        ...props.style,
      }}
    >
      <Text
        style={{
          color: "white",
          ...props.textStyle,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

/*

const animal = {
    gender : '',
    age: '',
    name: ''
}

const dog = {
   gender : '',
    age: '',
    name: ''
    name : '',
    legs : '',
}

*/
