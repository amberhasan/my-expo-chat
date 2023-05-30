import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = () => {
    // Email valdation
    // Password Validation
    // register the user
    // navigate to home
    console.log("LOgin");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
      }}
    >
      <TextInput
        placeholder="Enter your email"
        onChangeText={(text) => {
          setEmail(text);
        }}
        style={{
          height: 40,
          width: "100%",
          borderWidth: 0.5,
          paddingHorizontal: 10, //applied to all 4 sides
          borderRadius: 15,
        }}
      />
      <TextInput
        placeholder="Enter your password"
        onChangeText={(text) => {
          setPassword(text);
        }}
        style={{
          height: 40,
          width: "100%",
          borderWidth: 0.5,
          paddingHorizontal: 10, //applied to all 4 sides
          borderRadius: 15,
          marginTop: 15,
        }}
      />
      <TouchableOpacity
        onPress={onLoginPress}
        style={{
          backgroundColor: "yellow",
          width: "100%",
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          borderRadius: 15,
          borderWidth: 0.5,
          borderColor: "tomato",
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
